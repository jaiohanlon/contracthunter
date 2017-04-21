import React, { PropTypes } from 'react';
import { combineStyles } from 'utilities';
import defaultStyles from 'styles/components/common/form/button/primary-button';
import Button from './button';

const PrimaryButton = props => {
    const { styles, children, ...attributes } = props;
    const combinedStyles = combineStyles([defaultStyles, styles]);

    return (
        <Button {...attributes} styles={{ button: combinedStyles.primaryButton }}>
            {children}
        </Button>
    );
};

PrimaryButton.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.arrayOf(
            PropTypes.node,
        ),
        PropTypes.string,
    ]).isRequired,
    styles: PropTypes.object,
};

PrimaryButton.defaultProps = {
    styles: {},
};

export default PrimaryButton;
