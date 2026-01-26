import React, { createContext, ReactNode, useState } from "react";
import UsedContent from "./UsedContent";

interface contentInterface{
    userName: string
}

// creating context

export const ContentContext = createContext<contentInterface | null>(null)

export const ContentProvider=({children}:{children: ReactNode})=>{
    const [content, setContent] = useState<contentInterface>({
        userName:"Sachin"
    })

    return(
        <ContentContext.Provider value={content}>
            {/* <UsedContent /> */}
            {children}
        </ContentContext.Provider>
    )
}