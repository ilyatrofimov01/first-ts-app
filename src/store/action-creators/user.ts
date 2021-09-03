import axios from 'axios'
import { UserAction, UserActionTypes } from '../../types/user'
import { Dispatch } from 'redux'

export const fetchUsers = () => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            dispatch({ type: UserActionTypes.FETCH_USERS })
            const response = await axios.get(
                'https://jsonplaceholder.typicode.com/users'
            )
            setTimeout(() => {
                dispatch({
                    type: UserActionTypes.FETCH_USERS_SUCCESS,
                    payload: response.data,
                })
            }, 500)
        } catch (e) {
            dispatch({
                type: UserActionTypes.FETCH_USERS_ERORR,
                payload: 'Error in fetch users',
            })
        }
    }
}
