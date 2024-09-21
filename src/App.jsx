import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// npm run dev
import './App.css'
import Navbar from './Component/Navbar'
import Home from "./Pages/Home"
import {Routes, Route } from "react-router-dom"
import Video from "./Pages/Video"
import Profile from './Pages/Profile'
import VideoUpload from './Component/VideoUpload'
import SignUp from './Component/SignUp'


function App() {
  const [sideNavbar, setsideNavbar] = useState(false);
  const sideNavFunc = (value)=>{
    setsideNavbar(value);
  }

  return (
    <div className='p-0 m-0 border-box w-screen h-screen font-["Satoshi"] bg-[#151517] flex flex-col relative'>
    <Navbar sideNavFunc={sideNavFunc} sideNavbar={sideNavbar} />
    <Routes>
      <Route path='/' element={<Home sideNavbar={sideNavbar} sideNavFunc={sideNavFunc} />}/>
      <Route path='/watch/:id' element={<Video sideNavbar={sideNavbar}  />}/>
      <Route path='/user/:id' element={<Profile sideNavbar={sideNavbar} />}/>
      <Route path='/:id/upload' element={<VideoUpload />}/>
      <Route path='/signup' element={<SignUp/>} />
    </Routes>
    
    </div>
  )
}

export default App
