import React, { createContext, useState } from 'react';
export const dataContext = createContext();


let [input,setInput] = useState("")

let data = {
    input,
    setInput
}

function UserContext({children}) {
  return (
    <div>
        <dataContext.Provider value = {data} >
           {children}
        </dataContext.Provider>
    </div>
  )
}

export default UserContext 