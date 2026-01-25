import React from 'react'
import { useUser } from './UserContext'

const Profile = () => {

    const {name} = useUser();
  return (
    <div>
        <h2>{name}</h2>
      
    </div>
  )
}

export default Profile
