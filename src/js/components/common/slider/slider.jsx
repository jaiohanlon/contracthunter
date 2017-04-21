import React, { Children, Component, cloneElement, PropTypes } from 'react';
import { combineStyles } from 'utilities';
import defaultStyles from 'styles/components/common/slider';

export default class Slider extends Component {
    state = {
        currentIndex: this.props.currentIndex,
    }

    combinedStyles = combineStyles([defaultStyles, this.props.styles])

    prev = () => {
        const { currentIndex } = this.state;

        this.setState({
            currentIndex: (currentIndex > 0) ? currentIndex - 1 : currentIndex,
        });
    }

    next = () => {
        const { children } = this.props;
        const { currentIndex } = this.state;

        this.setState({
            currentIndex: (currentIndex < Children.toArray(children)
                .filter(child => child.type.name === 'Slide').length - 1
            ) ? currentIndex + 1 : currentIndex,
        });
    }

    renderSlides() {
        const { children } = this.props;
        const { currentIndex } = this.state;

        return Children.map(children, (child, index) => {
            if (child.type.name === 'Slide') {
                return cloneElement(child, {
                    isActive: currentIndex === index,
                    styles: this.combinedStyles,
                });
            }
            return child;
        });
    }

    render() {
        const slides = this.renderSlides();
        const { currentIndex } = this.state;
        const attributes = Object.assign({}, this.props);

        delete attributes.currentIndex;
        delete attributes.styles;

        return (
            <div {...attributes} className={this.combinedStyles.slider}>
                { slides && (
                    <ul
                        className={this.combinedStyles.sliderList}
                        style={{ left: `-${currentIndex * 100}%` }}
                    >
                        {slides}
                    </ul>
                )}
            </div>
        );
    }
}

Slider.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.arrayOf(
            PropTypes.node,
        ),
        PropTypes.string,
    ]).isRequired,
    currentIndex: PropTypes.number,
    styles: PropTypes.object,
};

Slider.defaultProps = {
    currentIndex: 0,
    styles: {},
};
