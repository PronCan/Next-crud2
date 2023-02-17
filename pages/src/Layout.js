import React from 'react'
import Headers from '@/pages/src/Header'

const Layout = ({children}) => {
  return (
    <>
        <Headers></Headers>
        {children}
        <footer></footer>
    </>
  )
}

export default Layout