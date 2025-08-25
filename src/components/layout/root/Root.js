import React from 'react'
import './Root.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { Navbar } from '../navbar/Navbar'
import { Body } from '../body/Body'
import { Footer } from '../footer/Footer'

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
