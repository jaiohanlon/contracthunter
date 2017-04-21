import React, { PropTypes } from 'react';
import { combineStyles } from 'utilities';
import defaultStyles from 'styles/components/common/wrapper';

const Wrapper = ({
    children,
    styles,
}) => {
    const combinedStyles = combineStyles([defaultStyles, styles]);

    return (
        <div className={combinedStyles.wrapper}>
            {children}
        </div>
    );
};

Wrapper.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.arrayOf(
            PropTypes.node,
        ),
        PropTypes.string,
    ]).isRequired,
    styles: PropTypes.object,
};

Wrapper.defaultProps = {
    children: {},
    styles: {},
};

export default Wrapper;
