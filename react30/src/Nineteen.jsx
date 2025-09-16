import React, { useContext } from 'react'
import { ThemeContext } from './ThemeContext'

export default function Nineteen() {

    const {isDarkMode,toggleTheme} = useContext(ThemeContext);

  return (
    <div>
      <label>
        <input type='checkbox' checked={isDarkMode} onChange={toggleTheme}/>
        Dark Mode
      </label>
    </div>
  )
}