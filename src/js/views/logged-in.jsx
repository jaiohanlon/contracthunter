import React, { PropTypes } from 'react';
import Header from 'components/logged-in/header';
import Navigation from 'components/common/navigation';
import Footer from 'components/logged-in/footer';
import styles from 'styles/views/logged-in';

const LoggedIn = ({
    children,
    header,
    navigation,
}) =>
    <div className={styles.loggedIn}>
        <Header {...header} />
        <Navigation {...navigation} />
        <div className={styles.main}>
            {children}
        </div>
        <Footer />
    </div>;

LoggedIn.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.arrayOf(
            PropTypes.node,
        ),
        PropTypes.string,
    ]).isRequired,
    header: PropTypes.object,
    navigation: PropTypes.object,
};

LoggedIn.defaultProps = {
    header: {
        userProfile: {
            avatarUrl: '',
            firstName: 'Jai',
            lastName: 'O\'Hanlon',
        },
    },
    navigation: {
        items: [
            { label: 'Dashboard', link: '/app/dashboard' },
            { label: 'Contracts', link: '/app/contracts' },
            { label: 'Candidates', link: '/app/candidates' },
            { label: 'Skills', link: '/app/profile/skills' },
            { label: 'Settings', link: '/app/account' },
        ],
    },
};

export default LoggedIn;
