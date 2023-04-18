import React from 'react';
import { useRouteError } from 'react-router-dom';

const Error = () => {
    const error = useRouteError();
    console.log(error);
    return (
        <h2 style={{"color":"red"}}>{error.data},      Please check your URL!!!!!</h2>
    )
}

export default Error