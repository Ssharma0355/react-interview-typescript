import React from 'react'
import { UserProvider } from './UserContext'
import Profile from './Profile'
import Profile1 from '../contextrevise/Profile1'

const Parent = () => {
  return (
    <div>
        <UserProvider>
            <Profile />
            <Profile1 />
        </UserProvider>
    </div>
  )
}

export default Parent
