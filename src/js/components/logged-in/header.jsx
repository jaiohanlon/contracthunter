import React, { PropTypes } from 'react';
import { combineStyles } from 'utilities';
import { Wrapper } from 'components/common';
import defaultStyles from 'styles/components/logged-in/header';
import Logo from 'components/common/logo';
import UserProfile from 'components/common/user-profile';

const Header = ({
    styles,
    userProfile,
}) => {
    const combinedStyles = combineStyles([defaultStyles, styles]);

    return (
        <header className={combinedStyles.header}>
            <Wrapper styles={{ wrapper: combinedStyles.wrapper }}>
                <Logo styles={{ logo: combinedStyles.logo }} />
                <UserProfile
                    styles={{ userProfile: combinedStyles.userProfile }}
                    {...userProfile}
                />
            </Wrapper>
        </header>
    );
};

Header.propTypes = {
    userProfile: PropTypes.object,
    styles: PropTypes.object,
};

Header.defaultProps = {
    userProfile: {
        avatarUrl: '',
        firstName: 'Jai',
        lastName: 'O\'Hanlon',
    },
    styles: {},
};

export default Header;
