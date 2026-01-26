import React from 'react'
import { MainContext } from './MainContext'
import Profile1 from './Profile1'

const Parent1 = () => {
   
  return (
    <MainContext>
        <Profile1 />
    </MainContext>
    
      
  )
}

export default Parent1
