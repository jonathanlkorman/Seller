import React from 'react';

export const navigationRef = React.createRef();

const navigate = (name, params) =>
    navigationRef.currenrt?.navigate(name, params);

    export default {
        navigate,
    };