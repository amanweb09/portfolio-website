import React, { useEffect, useState } from 'react'
import '../styles/globals.css'
import '../styles/output.css'
import themeToggle from '../util/ThemeToggle'
import { navlinkContext } from '../context/navlinks'
import initFirebase from '../firebase/config'

function MyApp({ Component, pageProps }) {

  const [activeLink, setActiveLink] = useState('')

  useEffect(() => {
    initFirebase()
  }, [])
  // useEffect(() => {
  //   const theme = window.localStorage.getItem('theme')

  //   if (!theme || theme === 'light') {
  //     document.body.style.background = "#fff"
  //     themeToggle(theme)
  //     return;
  //   }
  //   if (theme === 'dark') {
  //     document.body.style.background = "rgb(15, 23, 42)"
  //     themeToggle('dark')
  //     return;
  //   }
  //   themeToggle('light')

  // }, [])

  return (
    <navlinkContext.Provider value={{ activeLink, setActiveLink }}>
      <Component {...pageProps} />
    </navlinkContext.Provider>
  )
}

export default MyApp
