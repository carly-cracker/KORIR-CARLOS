import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './pages/Home'
import About from './pages/About'
import Navbar from './components/Navbar'
import Projects from './pages/Projects'
import Contacts from './pages/Contacts'
import './App.css'
import "tailwindcss";

function App(){
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About/>}/>
        <Route path="projects" element={<Projects/>}/>
        <Route path ="contacts" element ={<Contacts/>}/>
      </Routes>
    </Router>
  )
}
export default App
