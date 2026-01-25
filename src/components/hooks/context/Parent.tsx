import React from 'react'
import { UserProvider } from './UserContext'
import Profile from './Profile'

const Parent = () => {
  return (
    <div>
        <UserProvider>
            <Profile />
        </UserProvider>
    </div>
  )
}

export default Parent
