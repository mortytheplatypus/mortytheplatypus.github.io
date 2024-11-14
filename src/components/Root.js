import React from 'react'
import './Root.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { Navbar } from './Navbar'
import { Body } from './Body'
import { Footer } from './Footer'

export const Root = () => {
  return (
    <Router>
      <div className='root'>
        <Navbar/>
        <Body/>
        <Footer/>
      </div>
    </Router>
  )
}
