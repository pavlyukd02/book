import React from 'react'
import baroccoImg from '../assets/barocco.svg'
import landscape from '../assets/landscape.png'

const Header = () => {
    return (
        <div>
            <div className='flex    '>
                <img className='mix-blend-multiply w-[350px] h-[360px]' src={baroccoImg} alt="" />
                <div>
                    <h1 className='font-bold text-[64px]'>Історичне спасське</h1>
                </div>
                <img src={landscape} className='' alt="" />
                <div>gello niggers</div>
            </div>
        </div>
    )
}

export default Header