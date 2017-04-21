import React, { PropTypes } from 'react';
import { combineStyles } from 'utilities';
import { Link, Wrapper } from 'components/common';
import defaultStyles from 'styles/components/common/navigation';

const Navigation = ({
    items,
    styles,
}) => {
    const combinedStyles = combineStyles([defaultStyles, styles]);
    const navigationItems = items.map(({ label, link }) => (
        <li className={combinedStyles.item}>
            <Link
                to={link}
                styles={{
                    link: combinedStyles.link,
                    activeNavLink: combinedStyles.activeNavLink,
                }}
            >
                {label}
            </Link>
        </li>
    ));

    return (
        <nav className={combinedStyles.navigation}>
            <Wrapper>
                <ul className={combinedStyles.list}>
                    {navigationItems}
                </ul>
            </Wrapper>
        </nav>
    );
};

Navigation.propTypes = {
    items: PropTypes.array.isRequired,
    styles: PropTypes.object,
};

Navigation.defaultProps = {
    styles: {},
};

export default Navigation;

