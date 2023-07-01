"use client"

import { createContext, useState } from "react";
export const ThemeContext=createContext();

// create your context provider

export const ThemeProvider=({children})=>{

    const [mode, setMode]=useState("dark");
// create our toggler function
const toggle=()=>{
    setMode(prev=>prev==="dark" ? "light" : "dark")
}

return (
    <ThemeContext.Provider value={{ toggle, mode }}>
      <div className={`theme ${mode}`}>{children}</div>
    </ThemeContext.Provider>
  );

}