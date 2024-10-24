import React from 'react'

const Navbar = () => {
  return (
    <nav className='mt-5'>
        <div className=' bg-[#C37F3B] py-4  rounded-3xl w-[700px] flex flex-row gap-[50px] pacifico-regular font-normal text-[32px] ml-[140px]  justify-center  '>
                <div className=''>Головна</div>
                <div>Новини</div>
                <div>Відео</div>
                <div>Про авторів</div>
        </div>
    </nav>
  )
}

export default Navbar