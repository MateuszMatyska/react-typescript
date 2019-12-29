import {Reducer} from 'redux'

import { UserTypes, UserActions, IUserTypes } from 'store/actions/UserTypes';

const initState: IUserTypes = {
    User: undefined,
    LoginUser: undefined 
}

export const UserReducer: Reducer<IUserTypes, UserActions> = (state = initState, action) => { 
    switch(action.type) {
        case UserTypes.ADD_USER_DATA: {
            return {
                ...state,
                User: {
                    FirstName: action.payload.FirstName,
                    LastName: action.payload.LastName,
                    Email: action.payload.Email
                }
            }
        }
        case UserTypes.LOGIN: {
            return {
                ...state,
                LoginUser: {
                    Login: action.payload.Login
                }
            }
        }
        default: {
            return state;
        }
    }
}