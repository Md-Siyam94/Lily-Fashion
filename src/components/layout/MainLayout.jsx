import React from 'react'

import Footer from '../shared/Footer'
import Navbar from '../shared/Navbar'

export default function MainLayout({children}) {
  return (
    <div>
        <nav>
            <Navbar></Navbar>
        </nav>
        <div className='min-h-[calc(100vh-50px)] pt-22'>
            {children}
        </div>
        <footer>
            <Footer></Footer>
        </footer>
    </div>
  )
}
