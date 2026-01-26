import React, { useContext } from 'react'
import { ThemeContext } from './MainProvider'

const ChildA = () => {
    const theme = useContext(ThemeContext)
  return (
    <div>
        <h1>{theme}</h1>
      
    </div>
  )
}

export default ChildA
