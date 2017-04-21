import React, { PropTypes } from 'react';
import { Link as RouterLink, NavLink as RouterNavLink } from 'react-router-dom';
import { combineStyles } from 'utilities';
import defaultStyles from 'styles/components/common/link';

const Link = props => {
    const { styles, children, ...attributes } = props;
    const combinedStyles = combineStyles([defaultStyles, styles]);

    if (styles.activeNavLink) {
        return (
            <RouterNavLink
                {...attributes}
                className={combinedStyles.link}
                activeClassName={styles.activeNavLink}
            >
                {children}
            </RouterNavLink>
        );
    }

    return (
        <RouterLink {...attributes} className={combinedStyles.link}>
            {children}
        </RouterLink>
    );
};

Link.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.arrayOf(
            PropTypes.node,
        ),
        PropTypes.string,
    ]).isRequired,
    styles: PropTypes.object,
};

Link.defaultProps = {
    styles: {},
};

export default Link;
