import React, { useContext } from 'react'
import './styles/Nineteen.css';
import { ThemeContext } from './ThemeContext';

const NineteenComp = () => {
    const{isDarkMode}= useContext(ThemeContext);
    const themeClass= isDarkMode? 'dark-theme': 'light-theme';
    return (
        <div className={`container ${themeClass}`}>
          <p>This component uses selected theme</p>
        </div>
      )
}

export default NineteenComp
