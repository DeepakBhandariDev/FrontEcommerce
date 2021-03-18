import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { AppState } from '../../types'
import './index.css'

export default function Profile() {

const userState = useSelector((state: AppState) => state.user)
  const { user } = userState

    return (
        <div className="profile">
            <img src={user.imageUrl}/>
            <h2>{user.name}.</h2>
            <h3>{user.email}</h3>
        </div>
    )
}
