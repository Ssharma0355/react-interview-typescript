import React, { useContext } from 'react'
import { ContentContext } from './ParentMain'

const UsedContent = () => {
    const name = useContext(ContentContext)
  return (
    <div>
        <h1>{name?.userName}</h1>
    </div>
  )
}

export default UsedContent
