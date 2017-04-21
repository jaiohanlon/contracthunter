import React, { PropTypes } from 'react';
import { combineStyles } from 'utilities';
import defaultStyles from 'styles/components/common/form/button/secondary-button';
import Button from './button';

const SecondaryButton = props => {
    const { styles, children, ...attributes } = props;
    const combinedStyles = combineStyles([defaultStyles, styles]);

    return (
        <Button {...attributes} styles={{ button: combinedStyles.secondaryButton }}>
            {children}
        </Button>
    );
};

SecondaryButton.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.arrayOf(
            PropTypes.node,
        ),
        PropTypes.string,
    ]).isRequired,
    styles: PropTypes.object,
};

SecondaryButton.defaultProps = {
    styles: {},
};

export default SecondaryButton;
