import { createContext, useState } from "react";

export const Theme=createContext();

export const ThemeProvider=({children})=>{
const [theme1, settheme1] = useState("light")
const cover=()=>{
    if(theme1==="light")
    settheme1("dark")
    else
    settheme1("light")
}
    return <Theme.Provider value={{cover,theme1,isLight:theme1==="light"}}>{children}</Theme.Provider>
}