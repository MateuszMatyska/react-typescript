import { ActionCreator, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { IAddUser, UserTypes, IUser } from "store/actions/UserTypes";

export const getUser: ActionCreator<ThunkAction<
    Promise<any>,
    IUser,
    null,
    IAddUser
>> = (FirstName: string, LastName: string) => {
    return async (dispatch: Dispatch) => {
        const user = {FirstName: FirstName, LastName: LastName} as IUser;
        dispatch({
            type: UserTypes.ADD_USER,
            payload: user
        });
    };
};
