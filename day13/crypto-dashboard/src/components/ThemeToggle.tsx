'use client'

import { useEffect, useState } from 'react'

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const root = window.document.documentElement
    if (darkMode) {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
  }, [darkMode])

  return (
    <button
      className="px-4 py-2 bg-gray-200 dark:bg-gray-700 dark:text-white rounded shadow transition"
      onClick={() => setDarkMode(!darkMode)}
    >
      {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
    </button>
  )
}

export default ThemeToggle
