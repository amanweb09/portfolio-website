import React, { useEffect } from 'react'
import '../styles/globals.css'
import '../styles/output.css'
import themeToggle from '../util/themeToggle'
import initFirebase from '../firebase/config'
import AOS from 'aos'
import Head from 'next/head'


function MyApp({ Component, pageProps }) {

  useEffect(() => {
    // initFirebase()
    AOS.init({
      delay: 0,
      duration: 400,
      easing: 'ease'
    })
    const theme = window.localStorage.getItem('theme')

    if (theme === 'light') {
      themeToggle(theme)
      return;
    }
    if (theme === 'dark' || !theme) {
      themeToggle('dark')
      return;
    }
    themeToggle('dark')
  }, [])

  return (
    <>
      <Head>
        <link rel="icon" type="image/x-icon" href="/images/favicon.png" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
