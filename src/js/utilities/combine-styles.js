const combineStyles = stylesArray => {
    const newStylesObject = {};

    stylesArray.forEach(styles => {
        if (styles) {
            Object.keys(styles).forEach(key => {
                if (newStylesObject[key] && styles[key]) {
                    newStylesObject[key] = [newStylesObject[key], styles[key]].join(' ');

                    return null;
                }

                if (styles[key] === undefined) {
                    return null;
                }

                newStylesObject[key] = styles[key] || null;

                return null;
            });
        }
    });

    return newStylesObject;
};

export default combineStyles;
