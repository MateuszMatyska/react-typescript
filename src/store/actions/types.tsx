export enum UserTypes {
    ADD_USER = "ADD_USER",
    DELETE_USER = "DELETE_USER"
};

export interface IAddUser {
    type: UserTypes.ADD_USER,
    payload: string
}

export type UserActions = IAddUser;