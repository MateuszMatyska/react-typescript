import {Reducer} from 'redux'

import { UserTypes, UserActions } from 'store/actions/types';

export interface IUser {
    name: string
}

const initState: IUser = {
    name: ""
}

export const UserReducer: Reducer<IUser, UserActions> = (state = initState, action) => { 
    switch(action.type) {
        case UserTypes.ADD_USER: {
            return {
                ...state,
                name: action.payload
            }
        }
        default: {
            return state;
        }
    }
}