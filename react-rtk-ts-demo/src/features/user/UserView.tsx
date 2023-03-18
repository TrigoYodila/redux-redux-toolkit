import React, { useEffect } from 'react'
// import { useSelector, useDispatch } from 'react-redux'
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { fetchUsers } from './userSlice'


const UserView = () => {
  // get user
  const user = useAppSelector((state) => state.user)

  const dispatch = useAppDispatch()

  // send action fetchUsers
  useEffect(() => {
    dispatch(fetchUsers())
  },[])

  return (
    <div>
      <h2>List of users</h2>
      {user.loading && <div>loading...</div>}
      {!user.loading && user.error ? <div>Error : {user.error}</div> : null}
      {!user.loading && user.users.length ? (
        <ul>
          {
            user.users.map(user => (
              <li key={user.id}>{user.name}</li>
            ))
          }
        </ul>
      ):null}
    </div>
  )
}

export default UserView
