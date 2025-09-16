import { createContext, useState } from "react";


const ThemeContext = createContext();

const ThemeProvider = ({children}) => {
const [isDarkMode,setIsDarkMode] = useState(false);

const toggleTheme = ()=> {
    setIsDarkMode((prevMode) => !prevMode)
};

return (
    <ThemeContext.Provider value={{isDarkMode,toggleTheme}}>
        {children}
    </ThemeContext.Provider>
);
};

export {ThemeContext,ThemeProvider}