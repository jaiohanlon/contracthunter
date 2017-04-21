import React, { PropTypes } from 'react';
import { Link } from 'components/common';
import { combineStyles } from 'utilities';
import defaultStyles from 'styles/components/common/logo';

const Logo = ({
    link,
    styles,
}) => {
    const combinedStyles = combineStyles([defaultStyles, styles]);

    return (
        <Link to={link} styles={{ link: combinedStyles.logo }}>
            Contract Hunter
        </Link>
    );
};

Logo.propTypes = {
    link: PropTypes.string,
    styles: PropTypes.object,
};

Logo.defaultProps = {
    link: '',
    styles: {},
};

export default Logo;
