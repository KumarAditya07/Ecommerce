import React from 'react'
import MyContext from './myContext'

const myState = ({children}) => {
  return (
     <MyContext.Provider>
          {children}
     </MyContext.Provider>
  )
}

export default myState
