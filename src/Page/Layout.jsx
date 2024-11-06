import React from 'react'
import Navbar from '../Component/Navbar'
import ButtobBarMataUang from '../Component/ButtobBarMataUang'
import HotelNav from '../Component/HotelNav'


const Layout = () => {
  return (
    <div className='w-screen h-screen flex flex-col items-center '>
    <div className='bg-image w-full flex flex-col items-center text-white pt-5 '>
        <HotelNav/>
    </div>
  </div>
  
)
}

export default Layout