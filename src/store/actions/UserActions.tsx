import { ActionCreator, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { ISetUserData, UserTypes, IUser, ILogIn, ILoginUser, ILogOut } from "store/actions/UserTypes";

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

export const LoginUser: ActionCreator< ThunkAction< 
    Promise<any>, 
    ILoginUser, 
    null, 
    ILogIn 
>> = (login: string, password: string ) => {
    return async (dispatch: Dispatch) => {
        if(login === "user" && password === "qwe123") {
            const loginData = {Login: login, UserType: "user"} as ILoginUser;
            dispatch({
                type: UserTypes.LOGIN,
                payload: loginData
            });
            localStorage.setItem("token", `${login}`);
        }

        if(login === "admin" && password === "zaqwsx") {
            const loginData = {Login: login, UserType: "admin"} as ILoginUser;
            dispatch({
                type: UserTypes.LOGIN,
                payload: loginData
            });
            localStorage.setItem("token", `${login}`);
        }
    }
}

export const GetLoginUser: ActionCreator< ThunkAction<
    Promise<any>,
    ILoginUser,
    null,
    ILogIn
>> = (login: string) => {
    return async (dispatch: Dispatch) => {
        console.log(`akcja: ${login}`)
        if(login === "user") {
            const loginData = {Login: login, UserType: "user"} as ILoginUser;
            dispatch({
                type: UserTypes.LOGIN,
                payload: loginData
            });
        }

        if(login === "admin") {
            const loginData = {Login: login, UserType: "admin"} as ILoginUser;
            dispatch({
                type: UserTypes.LOGIN,
                payload: loginData
            });
        }
    }    
}

export const LogOutUser: ActionCreator< ThunkAction<
    Promise<any>,
    ILoginUser,
    null,
    ILogOut
>> = () => {
   return async (dispatch: Dispatch) => {
    dispatch({
        type: UserTypes.LOGOUT,
    });
    localStorage.removeItem("token");
    localStorage.removeItem("user");
   } 
}