import React from 'react'; 
import baroccoImg from '../assets/barocco.png'; 
import landscape from '../assets/landscape.jpg'; 
 
const Header = () => { 
    return ( 
        <div className='relative'> 
            {/* Контейнер для изображений */} 
            <div className='relative flex flex-col lg:flex-row justify-between items-center'> 
                {/* Заголовок по центру */} 
                <h1 
                    style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }} 
                    className='absolute z-30 pacifico-regular text-white font-normal text-[24px] sm:text-[32px] lg:text-[48px] uppercase text-center  
             top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'> 
                    Історичне спаське 
                </h1> 
 
                {/* Ландшафтное изображение */} 
                <div className='w-full h-[200px] sm:h-[250px] lg:h-[300px]'> 
                    <img 
                        className='w-full h-full object-cover rounded-2xl filter' 
                        style={{ filter: 'blur(1.5px)' }} 
                        src={landscape} 
                        alt="Landscape" 
                    /> 
                    <div className="absolute inset-0 bg-black opacity-20 rounded-xl"></div> 
                </div> 
            </div> 
 
 
        </div> 
    ); 
}; 
 
export default Header;