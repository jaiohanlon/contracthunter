import React, { Component, PropTypes } from 'react';

export default class Slide extends Component {
    state = {
        height: 0,
        isTransitioning: false,
    }

    componentDidMount() {
        setTimeout(() => {
            const scrollHeight = this.slide.scrollHeight;
            const height = `${scrollHeight}px`;

            this.setState({
                height,
            });
        }, 100);
    }

    componentWillReceiveProps(nextProps) {
        if (!nextProps.isActive) {
            setTimeout(() => {
                this.setState({
                    height: '0px',
                });
            }, 200);

            return;
        }

        const scrollHeight = this.slide.scrollHeight;
        const height = `${scrollHeight}px`;

        this.setState({
            height,
        });

        setTimeout(() => {
            this.setState({
                height: 'auto',
            });
        }, 2000);
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.height !== this.state.height) {
            this.setState({
                isTransitioning: true,
            });
            setTimeout(() => {
                this.setState({
                    height: 'auto',
                    isTransitioning: false,
                });
            }, 2000);
        }
    }

    render() {
        const { children, isActive, styles } = this.props;
        const { height, isTransitioning } = this.state;

        return (
            <li
                className={`${isActive ? styles.slideActive : styles.slide} ${isTransitioning ? styles.transition : ''}`}
                ref={slide => { this.slide = slide; }}
                style={{ height: (isActive ? height : '0px') }}
            >
                {children}
            </li>
        );
    }
}

Slide.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.arrayOf(
            PropTypes.node,
        ),
        PropTypes.string,
    ]).isRequired,
    isActive: PropTypes.bool,
    styles: PropTypes.object,
};

Slide.defaultProps = {
    isActive: false,
    styles: {},
};
