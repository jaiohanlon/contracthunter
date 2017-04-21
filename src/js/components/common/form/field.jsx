import React, { PropTypes } from 'react';
import { combineStyles } from 'utilities';
import defaultStyles from 'styles/components/common/form/field';

const Field = props => {
    const { styles, children, ...attributes } = props;
    const combinedStyles = combineStyles([defaultStyles, styles]);

    return (
        <div {...attributes} className={combinedStyles.field}>
            {children}
        </div>
    );
};

Field.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.arrayOf(
            PropTypes.node,
        ),
        PropTypes.string,
    ]).isRequired,
    styles: PropTypes.object,
};

Field.defaultProps = {
    styles: {},
};

export default Field;
