import React, { PropTypes } from 'react';
import styles from 'styles/components/common/user-profile';

const UserProfile = ({
    avatarUrl,
    firstName,
    lastName,
}) => (
    <div className={styles.userProfile}>
        <span className={styles.avatar}>
            <img src={avatarUrl} alt="" />
        </span>
        <span className={styles.name}>
            {`${firstName} ${lastName}`}
        </span>
    </div>
);

UserProfile.propTypes = {
    avatarUrl: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
};

export default UserProfile;

