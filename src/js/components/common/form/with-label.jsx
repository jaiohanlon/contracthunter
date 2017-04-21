import React, { Component, PropTypes, Children, cloneElement } from 'react';
import { combineStyles } from 'utilities';
import defaultStyles from 'styles/components/common/form/with-label';

export default class WithLabel extends Component {
    state = {
        value: this.props.value,
    }

    _handleChange = event => {
        this.setState({
            value: event.target.value,
        });
    }

    render() {
        const { children, label, styles, ...attributes } = this.props;
        const { value } = this.state;
        const combinedStyles = combineStyles([defaultStyles, styles]);

        const childrenWithProps = Children.map(children,
            child => cloneElement(child, {
                ...attributes,
                value,
                placeholder: label,
                styles: { ...styles },
                onChange: this._handleChange,
            }),
        );

        return (
            <div>
                <label className={value !== '' ? combinedStyles.labelActive : combinedStyles.label}>
                    {label}
                </label>
                {childrenWithProps}
            </div>
        );
    }
}

WithLabel.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.arrayOf(
            PropTypes.node,
        ),
        PropTypes.string,
    ]).isRequired,
    label: PropTypes.string,
    styles: PropTypes.object,
    value: PropTypes.string,
};

WithLabel.defaultProps = {
    label: '',
    styles: {},
    value: '',
};
