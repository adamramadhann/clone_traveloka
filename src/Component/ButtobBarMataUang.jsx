import React, { useState } from 'react'
import { fromMoney } from '../dataDami/NavbarData'

const ButtobBarMataUang = ({ className }) => {
    const [tabBar, setTabBar] = useState(fromMoney[0]?.country)

    return (
        <div className={`${className} flex w-auto h-[400px] bg-white text-black`}>
            <div className='text-xs relative flex flex-col border-r-2 w-[200px] py-3 pr-1 overflow-y-auto max-h-[400px] '>
                <h1 className='absolute font-bold  bg-white py-3 pr-12 top-0 pl-1' >NEGARA DAN BAHASA</h1>
                <div className='mt-5' >
                {
                    fromMoney .map((e, index) => (
                        <button 
                            key={index}
                            onClick={() => setTabBar(e.country)} 
                            className='p-2 w-full flex justify-between text-left'
                        >
                           <span> {e.country} {e.language && `(${e.language})`}</span>
                            {tabBar === e.country && <span className='text-blue-500'>√</span>}
                        </button>
                    ))
                }
                </div>
            </div>
            <div className='text-xs relative flex-1 flex-grow overflow-y-auto p-3 max-h-[400px]'>
                <h1 className='absolute bg-white top-0  pr-[50px] py-3' >MATA UANG</h1>
                {
                    fromMoney.some(e => e.country === tabBar) && 
                    fromMoney.filter(e => e.country === tabBar).slice(0,1).map((e) => (
                        tabBar === e.country && e.currency[0] && (
                            <div key={e.country} className='flex mt-5 flex-col'>
                                {
                                    e.currency.map((curr, index) => (
                                        <button 
                                            key={index}
                                            className='p-2 whitespace-nowrap text-left'
                                        >
                                            <span className='font-bold pr-2'>{curr.currency_symbol}</span>
                                             {curr.currency} 
                                             {curr.currency === tabBar && <span className='text-blue-500' >√</span>}
                                        </button>
                                    ))
                                }
                            </div>
                        )
                    ))
                }
            </div>
        </div>
    )
}

export default ButtobBarMataUang
