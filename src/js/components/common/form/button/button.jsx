import React, { PropTypes } from 'react';
import { combineStyles } from 'utilities';
import defaultStyles from 'styles/components/common/form/button/button';

const Button = ({ styles, children, ...attributes }) => {
    const combinedStyles = combineStyles([defaultStyles, styles]);

    return (
        <button {...attributes} className={combinedStyles.button}>
            {children}
        </button>
    );
};

Button.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.arrayOf(
            PropTypes.node,
        ),
        PropTypes.string,
    ]).isRequired,
    styles: PropTypes.object,
    type: PropTypes.string,
};

Button.defaultProps = {
    styles: {},
    type: 'button',
};

export default Button;
