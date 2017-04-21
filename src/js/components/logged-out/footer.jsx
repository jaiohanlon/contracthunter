import React, { PropTypes } from 'react';
import { combineStyles } from 'utilities';
import defaultStyles from 'styles/components/logged-out/footer';

const Footer = ({
    styles,
}) => {
    const combinedStyles = combineStyles([defaultStyles, styles]);

    return (
        <footer className={combinedStyles.footer}>
            { '' }
        </footer>
    );
};

Footer.propTypes = {
    styles: PropTypes.object,
};

Footer.defaultProps = {
    styles: {},
};

export default Footer;
