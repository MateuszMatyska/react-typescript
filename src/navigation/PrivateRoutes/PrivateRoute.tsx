import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { IPrivateRoute } from './Interfaces/IPrivateRoute';
import { UserMiddleware } from 'navigation/Middlewares/User/UserMiddleware';

const PrivateRoute: React.FC<IPrivateRoute> = (props: IPrivateRoute) => {
    const { component: Component, redirectPath, ...rest } = props;
    const pathName = props.path ? props.path.toString() : "";

    return (<Route {...rest} render={(routeProps) =>
        UserMiddleware(pathName)
            ? <Component {...routeProps} />
            : <Redirect to={{
                pathname: redirectPath
                    ? redirectPath
                    : "/login", state: { from: routeProps.location }
            }} />
    } />)
}

export default PrivateRoute;