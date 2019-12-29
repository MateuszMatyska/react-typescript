import { ActionCreator, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { ISetUserData, UserTypes, IUser } from "store/actions/UserTypes";

export const SetUserData: ActionCreator<ThunkAction<
    Promise<any>,
    IUser,
    null,
    ISetUserData
>> = (FirstName: string, LastName: string, Email: string) => {
    return async (dispatch: Dispatch) => {
        const user = {FirstName: FirstName, LastName: LastName, Email: Email} as IUser;
        dispatch({
            type: UserTypes.ADD_USER_DATA,
            payload: user
        });
    };
};
