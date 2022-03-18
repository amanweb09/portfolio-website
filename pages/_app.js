import React, { useEffect } from 'react'
import '../styles/globals.css'
import '../styles/output.css'
import themeToggle from '../util/ThemeToggle'
import initFirebase from '../firebase/config'
import AOS from 'aos'
import { Provider, useDispatch } from 'react-redux'
import { changeTheme } from '../Rx-store/themeSlice'
import { store } from '../Rx-store'

function MyApp({ Component, pageProps }) {

  // const dispatch = useDispatch()

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
      // dispatch(changeTheme('light'))
      return;
    }
    if (theme === 'dark') {
      themeToggle('dark')
      // dispatch(changeTheme('dark'))
      return;
    }
    themeToggle('light')
    // dispatch(changeTheme('light'))
  }, [])

  return (
      <Component {...pageProps} />
  )
}

export default MyApp
