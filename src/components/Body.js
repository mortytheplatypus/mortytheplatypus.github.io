import React from 'react'
import './Body.css'
import { Routes, Route } from 'react-router-dom'
import { Home } from './tabs/Home'
import { Academics } from './tabs/Academics'
import { Projects } from './tabs/Projects'
import { Hobbies } from './tabs/Hobbies'
import { Writeups } from './tabs/Writeups'

export const Body = () => {
  return (
    <div className='root-body'>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<Home />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/hobbies" element={<Hobbies />} />
        <Route path="/writeups" element={<Writeups />} />
      </Routes>
    </div>
  )
}
