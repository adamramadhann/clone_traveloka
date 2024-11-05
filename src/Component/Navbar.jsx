import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { NavBwh, NavProduklainnya } from '../dataDami/NavbarData.js'
import { FaAngleDown, FaAngleUp, FaPlaneDeparture, FaUser } from 'react-icons/fa'
import ButtobBarMataUang from './ButtobBarMataUang.jsx'

const Navbar = () => {
    const [accordions, setAccordions] = useState(false)
    const [accordionsMatauang, setAccordionsMataUang] = useState(false)

    const handleAccor = () => {
        setAccordions((val) => val = !val)
    }


    const handleAccorMataUang = () => {
        setAccordionsMataUang ((val) => val = !val)
    }



    return (
    <header className={`w-full  h-auto pb-5 text-[13px] flex flex-col items-center`} >
            <div className='flex items-center w-full justify-between px-[200px] pb-3 ' >
                <img src="/logo_traveloka_-removebg-preview.png" alt="Logo" width={"150px"} className='h-10  object-cover   '  />
                <div className='flex items-center gap-3 ' >
                    <div className='hover:bg-[#000005]/40 relative rounded-md flex gap-2s p-2' > 
                        <img src="public/png-transparent-pokeball-icon-flag-of-indonesia-flag-of-monaco-indonesian-art-flags-of-the-world-flag-miscellaneous-english-flag-thumbnail-removebg-preview.png" alt="" className='rounded-full w-5 object-cover' />
                        <button onClick={handleAccorMataUang} >ID | IDR</button>
                        <div className={`absolute ${accordionsMatauang ? "opacity-100 max-h-96  " : "opacity-0 overflow-y-auto pointer-events-none "} top-10 transition ease-in-out duration-300 `} >
                            <ButtobBarMataUang />
                        </div>
                    </div>
                    <div className='flex gap-2 hover:bg-[#000005]/40 rounded-md p-[5px]' >
                        <img src="/image.png" alt="" />
                        <button>Promo</button>
                    </div>
                    <button className='hover:bg-[#000005]/40 transition duration-300 rounded-md p-2' >Bantuan</button>
                    <NavLink className={'hover:bg-[#000005]/40 transition duration-300 rounded-md p-2'} >Jadi Mitra</NavLink>
                    <NavLink className={`hover:bg-[#000005]/40 transition duration-300 rounded-md p-2`} >For Corporates</NavLink>
                    <NavLink className={`hover:bg-[#000005]/40 transition duration-300 rounded-md p-2`} >Pesanan</NavLink>
                    <div className='flex gap-2 items-center' >
                        <button className='border rounded-md flex items-center gap-2 hover:bg-[#000005]/20  p-2 '   ><FaUser />Login</button>
                        <button className=' px-3 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700' >Daftar</button>
                    </div>
                </div>
            </div>
            <nav className="flex gap-3 border border-gray-600 px-[200px] py-1  w-full items-center ">
            <div className='flex gap-5 items-center ' >
            <ul className="flex gap-5">
              {
                NavBwh.map((e) => (
                    <li>
                    <NavLink key={e.titile} to="#" className={'hover:bg-[#000005]/20 transition duration-300 p-2 rounded-sm '} >
                        {e.titile}
                    </NavLink>
                </li>
                ))
              }
            </ul>
                <div className='relative' >
                    <button className="hover:bg-[#000005]/30 h-[30px] px-2 rounded-sm flex gap-1 items-center " onClick={handleAccor} >Produk Lainnya {accordions ? <FaAngleDown /> : <FaAngleUp />} </button>
                    <div className={`absolute list-none gap-4 grid w-[220px] right-[5px] rounded-md bg-white transition-all ease-in-out overflow-hidden duration-1000 ${accordions ? "opacity-100 max-h-80" : "opacity-0 max-h-0 pointer-events-none"}`} >
                        <ul className='list-none flex flex-col gap-5  justify-center p-5 text-gray-500 ' >
                        {
                            NavProduklainnya.map((e) => (
                                <li  key={e.title} className='' >
                                    <NavLink to="#" className={`flex items-center gap-3 `} >
                                        <FaPlaneDeparture/>{e.title}
                                    </NavLink>
                                </li>
                            ))
                        }
                        </ul>
                    </div>
                </div>
            </div>
            </nav>
    </header>
  )
}

export default Navbar