import {RouteProps} from 'react-router-dom';

export interface IPrivateRoute extends RouteProps{
    component: any,
    redirectPath?: string
}