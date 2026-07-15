import React from 'react'

import Footer from '../shared/Footer'
import Navbar from '../shared/Navbar'

export default function MainLayout({children}) {
  return (
    <div>
        
        <nav>
            <Navbar></Navbar>
        </nav>
        {children}
        <footer>
            <Footer></Footer>
        </footer>
    </div>
  )
}
