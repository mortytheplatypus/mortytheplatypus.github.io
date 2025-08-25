import React from 'react'
import './Body.css'
import { Routes, Route } from 'react-router-dom'
import { Home } from '../../tabs/home/Home'
import { Academics } from '../../tabs/academics/Academics'
import { Projects } from '../../tabs/projects/Projects'
import { Hobbies } from '../../tabs/hobbies/Hobbies'
import { Writeups } from '../../tabs/writeups/Writeups'

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
