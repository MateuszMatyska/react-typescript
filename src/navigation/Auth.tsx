import React from 'react';
import {Redirect} from 'react-router-dom';

export const Auth = () => {
    const user = localStorage.getItem('token');

    if(user) {
        localStorage.setItem('user', 'true');
    }
    else {
        return <Redirect to="/login" />
    }
}