import {Reducer} from 'redux'

import { UserTypes, UserActions, IUser } from 'store/actions/UserTypes';

const initState: IUser = {
    FirstName: "",
    LastName: ""
}

export const UserReducer: Reducer<IUser, UserActions> = (state = initState, action) => { 
    switch(action.type) {
        case UserTypes.ADD_USER: {
            return {
                ...state,
                FirstName: action.payload.FirstName, 
                LastName: action.payload.LastName
            }
        }
        default: {
            return state;
        }
    }
}