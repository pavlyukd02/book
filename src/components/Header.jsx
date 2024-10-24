import React from 'react'
import baroccoImg from '../assets/barocco.svg'
import landscape from '../assets/landscape.png'

const Header = () => {
    return (
        <div className='px-10 '>
            <div className='flex justify-between items-center '>
                <img className='mix-blend-multiply w-[300px] h-[360px]' src={baroccoImg} alt="" />

                <div className=''>
                    <h1 className='font-bold abosolute text-[64px]'>Історичне спасське</h1>
                </div>
                <img src={landscape} className='w-[30%] h-[75%]' alt="" />
                <div className="border-l-4 border-gray-500 h-32"></div>

                

            </div>
            
        </div>
    )
}

export default Header