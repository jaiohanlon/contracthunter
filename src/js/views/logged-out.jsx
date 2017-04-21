import React, { PropTypes } from 'react';
import Header from 'components/logged-out/header';
import Footer from 'components/logged-out/footer';
import styles from 'styles/views/logged-out';

const LoggedOut = ({ children }) =>
    <div className={styles.loggedOut}>
        <Header />
        <div className={styles.main}>
            {children}
        </div>
        <Footer />
    </div>;

LoggedOut.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.arrayOf(
            PropTypes.node,
        ),
        PropTypes.string,
    ]).isRequired,
};

export default LoggedOut;
