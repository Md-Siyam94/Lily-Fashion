import React from 'react'

import Footer from '../shared/Footer'
import Navbar from '../shared/Navbar'

export default function MainLayout({children}) {
  return (
    <div>
        <nav>
            <Navbar></Navbar>
        </nav>
        <main className='min-h-[calc(100vh-50px)] pt-22'>
            {children}
        </main>
        <footer>
            <Footer></Footer>
        </footer>
    </div>
  )
}
