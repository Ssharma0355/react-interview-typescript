import React, { createContext, useState } from "react";
import ChildA from "./ChildA";

type themeType = "light" | "dark"


// create a context
export const ThemeContext = createContext<themeType>("light")

export const MainProvider=()=>{
const [theme, setTheme] = useState<themeType>("light")
return(
    <ThemeContext.Provider value={theme} >
        <ChildA />

    </ThemeContext.Provider>
)


}
