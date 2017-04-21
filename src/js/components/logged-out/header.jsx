import React, { PropTypes } from 'react';
import { combineStyles } from 'utilities';
import defaultStyles from 'styles/components/logged-out/header';
import Logo from 'components/common/logo';

const Header = ({
    styles,
}) => {
    const combinedStyles = combineStyles([defaultStyles, styles]);

    return (
        <header className={combinedStyles.header}>
            <Logo styles={{ logo: combinedStyles.logo }} />
        </header>
    );
};

Header.propTypes = {
    styles: PropTypes.object,
};

Header.defaultProps = {
    styles: {},
};

export default Header;
