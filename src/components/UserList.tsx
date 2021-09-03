import React, { useEffect } from 'react'
import { useActions } from '../hooks/useActions'
import { useTypedSelector } from '../hooks/useTypedSelector'

const UserList: React.FC = () => {
    const { users, error, loading } = useTypedSelector((state) => state.user)
    const { fetchUsers } = useActions()
    useEffect(() => {
        fetchUsers()
    }, [])

    if (loading) {
        return (
            <div>
                <span>Loading...</span>
            </div>
        )
    }
    if (error) {
        return <div>{`Error: ${error}`}</div>
    }
    return (
        <div>
            {users.map((user) => {
                return <div key={user.id}>{user.name}</div>
            })}
        </div>
    )
}

export default UserList
