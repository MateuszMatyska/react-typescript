export enum UserTypes {
    ADD_USER = "ADD_USER",
    DELETE_USER = "DELETE_USER"
};

export interface IUser {
    FirstName: string;
    LastName: string;
}

export interface IAddUser {
    type: UserTypes.ADD_USER,
    payload: IUser
}

export type UserActions = IAddUser;