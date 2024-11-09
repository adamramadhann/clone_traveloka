import React, { useState } from 'react'
import { PiBuildingApartment } from 'react-icons/pi'
import { RiHotelFill, RiHotelLine } from 'react-icons/ri'
import { ageChild, dataInputHotel, katagory } from '../dataDami/NavbarData'
import { AiOutlineSearch } from 'react-icons/ai'
import Select from "react-select"
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";

const HotelNav = () => {
    const [bgNav, setBgNav] = useState("Hotel")
    const [selectCity, setSelectCity] = useState(null)
    const [change, setChange] = useState(false)
    const [startDate, setStartDate] = useState(null)
    const [lastDate, setLastDate] = useState(null)
    const [currentIndex, setCurentIndex] = useState(0)
    const [select, setSelect] = useState("1")
    const [selectAcc, setSelectAcc] = useState(false)
    const [inputRom, setInputRom] = useState(false)


    const [inputData, setInputData] = useState({
        Adult : 1,
        Children : 0,
        Room : 1,
    })



    const handleSelectChild = (value) => {
        setSelect(value)
        setSelectAcc((prev) => prev = !prev)
    }

    const handleSelectClick = () => {
        setSelectAcc((prev) => prev = !prev)

    }


    const handleButtonClick = (type, change) => {
        setInputData((prev) =>{
            const newData = {...prev}

            if(type === "Adult") {
                newData.Adult = Math.max(0, newData.Adult + change)
            } else if (type === "Children") {
                newData.Children = Math.max(0, (Math.min(newData.Children + change,8)))
            } else if (type === "Room") {   
                newData.Room = Math.max(0, newData.Room + change)
            }
            return newData
        }) 
    }


    const handleChangeInput = (e) => {
        const {value} = e.target 
        const [abdult, children, room] = value.split(", ").map((val) => parseInt(val.split(" ")[0]))
        setInputData({
            Adult : abdult || 0,
            Children : children || 0,
            Room : room || 0,
        })
        setInputRom(val => val = !val)
    }

    const handleDate = (date) => {
        const [start, last] = date
        setStartDate(start),
        setLastDate(last)
    }
 
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
            <div className='flex justify-start items-center gap-[135px] ml-3 mb-2'>
                <h6 className='text-xs'>kota, tujuan atau nama Hotel</h6>
                <h6 className='text-xs'>Tanggal Check-in & Check-out</h6>
                <h6 className='text-xs'>Tamu dan Kamar</h6>
            </div>
            <div className='flex justify-start items-center  text-black border-[3px] gap- border-gray-500 rounded-xl '>
                <Select
                    options={dataInputHotel}
                    onChange={handleSelect}
                    components={{DropdownIndicator: () => null, IndicatorSeparator: () => null}}
                    styles={{
                        control : (base) => ({
                            ...base,
                            borderRadius : '12px 0 0 12px',
                            boxShadow: 'none',
                            width:"350px"
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
                <DatePicker
                    selected={startDate}
                    onChange={handleDate}
                    startDate={startDate}
                    endDate={lastDate}
                    selectsRange
                    dateFormat={"dd/MM/yyyy"}
                    placeholderText='Check-In dan Check Outh'
                    className='h-[40px] text-gray-500 w-[350px] flex-1 px-2 border-2 border-r outline-none'
                />
                <input
                    type='text'
                    placeholder='kota hotel tempat wisata'
                    className='h-[40px] flex-1 text-gray-500 px-2 w-[350px]  border-2 outline-none '
                    value={`${inputData.Adult} Adult(s), ${inputData.Children} Children, ${inputData.Room} Room`}
                    onChange={handleChangeInput}
                />
                <button className='p-2 bg-orange-500 h-10 rounded-r-xl '>
                <AiOutlineSearch size={20} className='text-white' />
                </button>
            </div>
        </div>
       <div className={`flex w-full justify-end  pr-5 ${inputRom ? "block" : "hidden"}`} >
       <div className={`${inputData ? "block" : "hidden"} w-[350px] bg-white text-black flex flex-col gap-4 py-4 `} >
            <div className='w-full flex text-gray-500 justify-between px-3 ' >
                <h1>icon</h1>
                <span className='flex gap-4 text-xl border-b items-center' > 
                    <button onClick={() => handleButtonClick('Adult',  -1)} >-</button>
                    <h1 className='text-sm border-b ' >{inputData.Adult}</h1>
                    <button onClick={() => handleButtonClick('Adult', 1)} >+</button>
                </span>
            </div>
            <div className='w-full flex text-gray-500 justify-between px-3 ' >
                <h1>icon</h1>
                <span className='flex gap-4 text-xl border-b  items-center' > 
                    <button onClick={() => handleButtonClick('Children',  -1)} >-</button>
                    <h1 className='text-sm ' >{inputData.Children}</h1>
                    <button onClick={() => handleButtonClick('Children', 1)} disabled={inputData.Children >= 8}  >+</button>
                </span>
            </div>
            <div className='w-full flex text-gray-500 justify-between px-3 ' >
                <h1>icon</h1>
                <span className='flex gap-4 text-xl border-b items-center' > 
                    <button onClick={() => handleButtonClick('Room',  -1)} >-</button>
                    <h1 className='text-sm ' >{inputData.Room}</h1>
                    <button onClick={() => handleButtonClick('Room', 1)} >+</button>
                </span>
            </div>
            {
                inputData.Children !== 0 && (
                    <div className='text-xs text-gray-500 px-3 bg-slate-100' > 
                        <span  >
                            <h1 className='font-bold' >Enter Children’s Ages</h1>
                            <p>Knowing your children’s ages will help us find you suitable accommodations</p>
                        </span>
                    <div className='grid grid-cols-4 gap-3 ' >
                    {
                             Array.from({length : inputData.Children}).map((e, val) => (
                                <div className=' bg-slate-100  mt-3 ' >
                                   <h1>Child {val + 1} </h1>
                                  <div className='w-[70px] bg-white shadow-md ' >
                                  <div className='flex justify-between items-center px-2  bg-white ' >
                                  <input type="" onChange={handleSelectClick} value={select} className='w-full h-10 outline-none ' />
                                  <h1>icon</h1>
                                  </div>    
                                    <div  className={`flex flex-col ${selectAcc ? "block" : "hidden"} `}  >
                                    {
                                        ageChild.map((e) => (
                                            <button onClick={()=> handleSelectChild(e.age)}>{e.age}</button>
                                        ))
                                    }    
                                    </div>
                                  </div>
                                </div>
                            ))
                        }
                    </div>
                    </div>
                )
            }
        </div>  
       </div>
        </div>
  )
}

export default HotelNav