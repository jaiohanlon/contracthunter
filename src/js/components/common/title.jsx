import React, { PropTypes } from 'react';
import { combineStyles } from 'utilities';
import { TitleTypes, TitleElements, TitleStyleNames } from 'constants/common/title';
import defaultStyles from 'styles/components/common/title';

const Title = props => {
    const { children, styles, type, ...attributes } = props;
    const combinedStyles = combineStyles([defaultStyles, styles]);
    const styleName = TitleStyleNames[type];
    const TitleElement = `${TitleElements[type]}`;

    return (
        <TitleElement {...attributes} className={combinedStyles[styleName]}>
            {children}
        </TitleElement>
    );
};

Title.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.arrayOf(
            PropTypes.node,
        ),
        PropTypes.string,
    ]).isRequired,
    styles: PropTypes.object,
    type: PropTypes.oneOf([
        TitleTypes.HEADING,
        TitleTypes.SUB_HEADING,
        TitleTypes.FORM_HEADING,
        TitleTypes.FIELDSET_HEADING,
    ]),
};

Title.defaultProps = {
    styles: {},
    type: TitleTypes.HEADING,
};

export default Title;
