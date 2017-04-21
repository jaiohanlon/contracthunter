import React, { PropTypes } from 'react';
import { combineStyles } from 'utilities';
import defaultStyles from 'styles/components/common/form/button/icon-button';
import Button from './button';

const IconButton = props => {
    const { styles, children, ...attributes } = props;
    const combinedStyles = combineStyles([defaultStyles, styles]);

    return (
        <Button {...attributes} styles={{ button: combinedStyles.iconButton }}>
            {children}
        </Button>
    );
};

IconButton.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.arrayOf(
            PropTypes.node,
        ),
        PropTypes.string,
    ]).isRequired,
    styles: PropTypes.object,
};

IconButton.defaultProps = {
    styles: {},
};

export default IconButton;
