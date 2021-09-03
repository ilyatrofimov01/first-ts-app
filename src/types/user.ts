export enum UserActionTypes {
    FETCH_USERS = 'FETCH_USERS',
    FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
    FETCH_USERS_ERORR = 'FETCH_USERS_ERORR',
}
interface Company{
    name:string
    bs:string
    catchPhrase:string

}
interface Geo{
    lat:string
    lng:string
}
interface Address{
    city:string
    street:string
    suite: string
    zipcode:string
    geo:Geo
}
interface User{  
    id:number
    name: string
    username:string
    phone:string
    email:string
    website:string
    company:Company
    address:Address
  
}
export interface userState {
    users: User[]
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
