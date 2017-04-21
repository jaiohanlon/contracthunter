import React, { Component, PropTypes } from 'react';
import { combineStyles } from 'utilities';
import defaultStyles from 'styles/components/common/form/showable-password-input';
import { Input, IconButton } from 'components/common';
import { VisibleIcon, HiddenIcon } from 'components/common/icons';

const ALT_KEY_CODE = 18;

export default class ShowablePasswordInput extends Component {
    state = {
        isVisible: this.props.isVisible,
    }

    _handleToggleVisibilityClick = event => {
        event.preventDefault();
        this.setState({
            isVisible: !this.state.isVisible,
        });
        this.input.focus();
    }

    _handleInputKeyDown = event => {
        if (event.keyCode === ALT_KEY_CODE) {
            this.setState({
                isVisible: true,
            });
        }
    }

    _handleInputKeyUp = event => {
        if (event.keyCode === ALT_KEY_CODE) {
            this.setState({
                isVisible: false,
            });
        }
    }

    render() {
        const { styles, ...attributes } = this.props;
        const { isVisible } = this.state;
        const combinedStyles = combineStyles([defaultStyles, styles]);

        return (
            <div className={combinedStyles.showablePasswordInput}>
                { isVisible ? (
                    <Input
                        ref={input => { this.input = input; }}
                        type="text"
                        styles={{ input: combinedStyles.textInput }}
                        onKeyDown={this._handleInputKeyDown}
                        onKeyUp={this._handleInputKeyUp}
                        {...attributes}
                    />
                ) : (
                    <Input
                        ref={input => { this.input = input; }}
                        type="password"
                        styles={{ input: combinedStyles.passwordInput }}
                        onKeyDown={this._handleInputKeyDown}
                        onKeyUp={this._handleInputKeyUp}
                        {...attributes}
                    />
                )}
                <IconButton
                    styles={{ iconButton: combinedStyles.button }}
                    onClick={this._handleToggleVisibilityClick}
                >
                    { isVisible ? (
                        <HiddenIcon />
                    ) : (
                        <VisibleIcon />
                    )}
                </IconButton>
            </div>
        );
    }
}

ShowablePasswordInput.propTypes = {
    styles: PropTypes.object,
    isVisible: PropTypes.bool,
};

ShowablePasswordInput.defaultProps = {
    styles: {},
    isVisible: false,
};
