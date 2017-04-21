import React, { PropTypes } from 'react';
import { combineStyles } from 'utilities';
import defaultStyles from 'styles/components/common/form/dropdown';

const Dropdown = props => {
    const { styles, children } = props;
    const combinedStyles = combineStyles([defaultStyles, styles]);

    const renderOptions = options.map(({ label, value }) => <option value={value}>{label}</option>);

    return (
        <select className={styles.select} {...props}>
            {renderOptions()}
        </select>
    );
};

Dropdown.propTypes = {
    styles: PropTypes.object,
};

export default Dropdown;
