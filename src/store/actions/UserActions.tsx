import { ActionCreator, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { IUser } from "store/reducers/UserReducer";
import { IAddUser, UserTypes } from "store/actions/types";

export const getUser: ActionCreator<ThunkAction<
    Promise<any>,
    IUser,
    null,
    IAddUser
>> = () => {
    return async (dispatch: Dispatch) => {
        dispatch({
            type: UserTypes.ADD_USER,
            payload: "Mateo"
        });
    };
};
