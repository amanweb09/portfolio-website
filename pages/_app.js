import React, { useEffect } from 'react'
import '../styles/globals.css'
import '../styles/output.css'
import themeToggle from '../util/ThemeToggle'
import initFirebase from '../firebase/config'
import AOS from 'aos'


function MyApp({ Component, pageProps }) {

  useEffect(() => {
    initFirebase()
    AOS.init({
      delay: 0,
      duration: 400,
      easing: 'ease'
    })
    const theme = window.localStorage.getItem('theme')

    if (!theme || theme === 'light') {
      themeToggle(theme)
      return;
    }
    if (theme === 'dark') {
      themeToggle('dark')
      return;
    }
    themeToggle('light')
  }, [])

  return (
      <Component {...pageProps} />
  )
}

export default MyApp
