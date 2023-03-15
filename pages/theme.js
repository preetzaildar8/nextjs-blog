import React, { useContext } from 'react'
import { ThemeContext } from '../helpers/ThemeContext'

function SomeComponent() {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <div>
      <h1>Current Theme: {theme}</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  )
}

export default SomeComponent