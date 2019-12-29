export enum UserTypes {
    ADD_USER_DATA = "SET_USER_DATA",
    LOGIN = "LOGIN",
    LOGOUT = "LOGOUT"
};

export interface IUserTypes {
    User?: IUser,
    LoginUser?: ILoginUser
}

export interface IUser {
    FirstName: string;
    LastName: string;
    Email: string;
}

export interface ILoginUser {
    Login: string;
    UserType: string;
}

export interface ISetUserData {
    type: UserTypes.ADD_USER_DATA,
    payload: IUser
}

export interface ILogIn {
    type: UserTypes.LOGIN,
    payload: ILoginUser
}


export type UserActions = ISetUserData | ILogIn;