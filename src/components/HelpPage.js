import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
    return (
        <div>
            <h1>This is the help page</h1><br/>
            <Link to="/">Go home</Link>
        </div>
    )
};