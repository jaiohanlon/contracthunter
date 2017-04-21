import React, { PropTypes } from 'react';
import { combineStyles } from 'utilities';
import defaultStyles from 'styles/components/common/form/form';

const Form = ({
    children,
    styles,
    ...attributes
}) => {
    const combinedStyles = combineStyles([defaultStyles, styles]);

    return (
        <form className={combinedStyles.form} {...attributes}>
            {children}
        </form>
    );
};

Form.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.arrayOf(
            PropTypes.node,
        ),
        PropTypes.string,
    ]).isRequired,
    styles: PropTypes.object,
};

Form.defaultProps = {
    styles: {},
};

export default Form;
