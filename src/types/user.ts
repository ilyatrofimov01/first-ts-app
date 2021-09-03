export enum UserActionTypes {
    FETCH_USERS = 'FETCH_USERS',
    FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
    FETCH_USERS_ERORR = 'FETCH_USERS_ERORR',
}
export interface userState {
    users: any[]
    loading: boolean
    error: null | string
}

interface FecthUsersAction {
    type: UserActionTypes.FETCH_USERS
}
interface FecthUsersSuccsessAction {
    type: UserActionTypes.FETCH_USERS_SUCCESS
    payload: any[]
}
interface FecthUsersErrorAction {
    type: UserActionTypes.FETCH_USERS_ERORR
    payload: string
}

export type UserAction =
    | FecthUsersAction
    | FecthUsersSuccsessAction
    | FecthUsersErrorAction
