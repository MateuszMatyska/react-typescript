import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {IPrivateRoute} from './Interfaces/IPrivateRoute';

const PrivateRoute: React.FC<IPrivateRoute> = (props: IPrivateRoute) => {
    const {component: Component, ...rest} = props;
    return (<Route {...rest} render={(routeProps)=>
            true ? <Component {...routeProps}/> : <Redirect to={{pathname: "/", state:{from: routeProps.location}}} /> 
    } />)
}

export default PrivateRoute;