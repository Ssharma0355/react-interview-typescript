import React, { createContext, ReactNode, use, useContext } from "react";

interface UserContextType{
    name: string;
}

//  creating context
const UserContext = createContext<UserContextType | undefined>(undefined);

//  creating provider

export const UserProvider =({children}:{children: ReactNode})=>{
    const userName = "Sachin"; // Here is your data
    return(
        <UserContext.Provider value={{name:userName}}>
            {children}
        </UserContext.Provider>
    )
}

// 4. Create the Hook (To read the data easily)
export const useUser=()=>{
    const context = useContext(UserContext);
    if (!context) throw new Error("useUser must be used within UserProvider");
  return context;
}