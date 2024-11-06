import React, { useState } from 'react'
import { PiBuildingApartment } from 'react-icons/pi'
import { RiHotelFill, RiHotelLine } from 'react-icons/ri'
import { dataInputHotel, katagory } from '../dataDami/NavbarData'
import { AiOutlineSearch } from 'react-icons/ai'
import Select from "react-select"

const HotelNav = () => {
    const [bgNav, setBgNav] = useState("Hotel")
    const [selectCity, setSelectCity] = useState(null)
    const [change, setChange] = useState(false)
 
    const handleSelect = (data) => {
        setSelectCity(data)
        setChange(true)
    }

    const handleSerch = () => {
        if(selectCity) {
            console.info(`tempat yang kamu tuju ${selectCity.label}`)
        }
    }

    const costumOption = () => {
        const { data , innerREf, innerProps } = props;
        return (
            <div ref={innerREf} {...innerProps} className='flex justify-between items-center' >
                <span>
                    <span>
                       <h1> {data.label}</h1>
                       <h1> {data.description}</h1>
                    </span>
                    <span>
                        <button className='p-1 rounded-xl bg-blue-500 text-white' >Kota</button>
                        <h1>{data.jumlahHotel}</h1>
                    </span>
                </span>
            </div>
        )
    }

    const handleClick = (data) => {
        setBgNav(data)
    }

    const handleIcon = (icon) => {
        switch(icon ) {
            case "PiBuildingApartment" :
                return  <PiBuildingApartment/>
            case "RiHotelFill" :
                return  <RiHotelFill/>
            case "RiHotelLine" :
                return  <RiHotelLine/>
            default : 
                return null
        }
    }
  return (
    <div>
        <div className='flex gap-3 mb-5 ' >
           {
                katagory.map((e) => (
                    <button onClick={() => handleClick(e.lodging) }  key={e.icon} className={`py-[6px] px-3 text-xs flex items-center gap-1 rounded-xl  ${bgNav === e.lodging ? "bg-blue-500" : "bg-[#000005]/20"}`}  >{handleIcon(e.icon)}{e.lodging}</button>
                ))
           }
        </div>
        <div className='flex flex-col'>
            <div className='flex justify-start items-center gap-16 ml-3 mb-2'>
                <h6 className='text-xs'>kota, tujuan atau nama Hotel</h6>
                <h6 className='text-xs'>Tanggal Check-in & Check-out</h6>
                <h6 className='text-xs'>Tamu dan Kamar</h6>
            </div>
            <div className='flex justify-start items-center text-black border-[3px] gap- border-gray-500 rounded-xl '>
                <Select
                    options={dataInputHotel}
                    onChange={handleSelect}
                    components={{DropdownIndicator: () => null, IndicatorSeparator: () => null}}
                    styles={{
                        control : (base) => ({
                            ...base,
                            borderRadius : '12px 0 0 12px',
                            boxShadow: 'none',
                            width:"300px"
                        })
                    }}
                    getOptionLabel={(e) => (
                        <div className='flex text-xs justify-between  rounded-l-xl items-center' >
                            <span className={`${selectCity && selectCity.value === e.value ? "flex gap-1 " : "block"} `} >
                            <h1 className='font-semibold' >{e.label}</h1>
                            <h1 className='text-[10px]' > {e.descripsi}</h1>
                            </span>
                        {
                            !selectCity || selectCity.value !== e.value ? (
                            <span className='text-end text-[10px]  '  >
                                <button className=' rounded-xl px-2 border text-blue-500 border-blue-500 ' >Kota</button>
                                <h1>{e.jumlahHotel}</h1>
                            </span>
                            ) : null
                        }
                    </div>
                    )}
                placeholder='kota hotel tempat wisata'
                className='h-[40px] w-[300px] flex-1  rounded-l-xl border-2  border-r outline-none '
                />
                <input
                type="text"
                placeholder='kota hotel tempat wisata'
                className='h-[40px] flex-1 px-2 border-2 border-r outline-none'
                />
                <input
                type="text"
                placeholder='kota hotel tempat wisata'
                className='h-[40px] flex-1 px-2 border-2 outline-none '
                />
                <button className='p-2 bg-orange-500 h-10 rounded-r-xl '>
                <AiOutlineSearch size={20} className='text-white' />
                </button>
            </div>
        </div>

    </div>
  )
}

export default HotelNav