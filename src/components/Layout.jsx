import React from 'react'
import Head from "next/head";
import Navbar from './Navbar'
import Footer from './Footer';

const Layout = ({children}) => {
  return (
     <>
       <Head>
          <title>Ecommerce store</title>
        </Head>
        <header>
          <Navbar />
        </header>
        <main>
          {children}
          <footer>
            {/* <Footer /> */}
          </footer>
        </main>
     </>
  )
}

export default Layout