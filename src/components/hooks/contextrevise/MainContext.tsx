import React, { createContext, ReactNode, useContext } from "react";

// creating interface
interface UserContestInterface{
    name: string
}

// creating context

const userContext = createContext<UserContestInterface | undefined>(undefined)


// provider

export const MainContext=({children}:{children: ReactNode})=>{
    const userName = "Sachin";
    return(
        <userContext.Provider value={{name:userName}}>
            {children}
        </userContext.Provider>
    )
}

// creating custom hook to 

export const UserText=()=>{
    const context = useContext(userContext)
        if(!context)
            console.log("Not found")
    return context;
}