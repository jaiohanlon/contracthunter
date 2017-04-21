import React, { Component, PropTypes } from 'react';
import { combineStyles } from 'utilities';
import defaultStyles from 'styles/components/common/form/input';

export default class Input extends Component {
    state = {
        value: this.props.value,
    }

    focus = () => {
        this.input.focus();
    }

    handleChange = event => {
        this.setState({
            value: event.target.value,
        });
        this.props.onChange(event);
    }

    render() {
        const { styles, ...attributes } = this.props;
        const { value } = this.state;
        const combinedStyles = combineStyles([defaultStyles, styles]);

        return (
            <input
                {...attributes}
                ref={input => { this.input = input; }}
                className={combinedStyles.input}
                value={value}
                onChange={this.handleChange}
            />
        );
    }
}

Input.propTypes = {
    styles: PropTypes.object,
    value: PropTypes.string,
    onChange: PropTypes.func,
};

Input.defaultProps = {
    styles: {},
    value: '',
    onChange: () => {},
};
