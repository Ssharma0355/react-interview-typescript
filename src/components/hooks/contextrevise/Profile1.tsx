import React from 'react'
import { UserText } from './MainContext'
import { useUser } from '../context/UserContext'


const Profile1 = () => { 
    const {name} = useUser()
  return (
    <div>
        <h1>{name}</h1>
    </div>
  )
}

export default Profile1
