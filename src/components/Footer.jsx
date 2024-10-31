import React from 'react'

import facebook from '../assets/facebook.png'
import instagram1 from '../assets/instagram1.png'
import x from '../assets/x.png'

const Footer = () => {
    return (
        <footer className='mt-10'>
            <div className='bg-black  opacity-80 p-11 '>
                <div className='flex justify-between    items-center text-white'>
                    <div className='flex flex-col gap-4 '>
                        <div className=' uppercase poppins-medium'>
                            Історичне Спасське
                        </div>
                        <div>
                            © 2024. Цей проєкт має відкриту ліцензію CC BY 4.0.
                        </div>
                    </div>
                    <div>
                        <div className='flex flex-col mr-[150px]'>
                            <h1 className=' uppercase'>Контакти:</h1>
                            <div className=' text-[14px] mt-1 ml-2'>
                                <p>індекс: 39081,</p>
                                <p>вул. Богдана Хмельницького 22,</p>
                                <p>пошта: test@gmail.com</p>
                            </div>
                        </div>

                    </div>
                    <div className=''>
                        <div>Соціальні мережі</div>
                        <div className='flex flew-row w-[150px] h-[50px] gap-4 mt-4'>
                            <div className=''>
                                <img src={facebook} alt="" />
                            </div>
                            <div>
                                <img src={instagram1} alt="" />
                            </div>
                            <div>
                                <img src={x} alt="" />
                            </div>
                        </div>

                    </div>
                </div>
                <hr className='bg-white h-[1.5px] mt-3'/>
            </div>
        </footer>
    )
}

export default Footer