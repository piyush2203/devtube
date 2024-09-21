import React from 'react'
import Sidenav from '../Component/Sidenav'
import Homepage from '../Component/Homepage'

const Home = ({sideNavbar, sideNavFunc }) => {
  return (
    <div className='w-full md:h-full h-[108%] flex relative'>
      <Sidenav sideNavbar={sideNavbar}  />
      <Homepage sideNav={sideNavbar} sideNavFunc={sideNavFunc} />
    </div>
  )
}

export default Home
