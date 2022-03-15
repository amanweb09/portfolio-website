import { useEffect } from 'react'
import '../styles/globals.css'
import '../styles/output.css'
import themeToggle from '../util/ThemeToggle'

function MyApp({ Component, pageProps }) {

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

  return <Component {...pageProps} />
}

export default MyApp
