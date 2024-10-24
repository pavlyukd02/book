import React from 'react';
import baroccoImg from '../assets/barocco.png';
import landscape from '../assets/landscape.png';

const Header = () => {
    return (
        <div className='relative px-4 sm:px-6 lg:px-8'>
            {/* Контейнер для изображений */}
            <div className='flex justify-between items-center'>
                {/* Изображение с барокко. Используем flex-initial, чтобы оно не занимало больше места. */}
                <img 
                    className='w-[250px] mix-blend-multiply' 
                    src={baroccoImg} 
                    alt="Barocco" 
                />
                <h1 className='flex-1 pacifico-regular font-normal text-[32px] sm:text-[48px] md:text-[48px] uppercase relative '>
                    Історичне спасське
                </h1>
             

                {/* Ландшафтное изображение. Используем flex-initial для контроля размеров. */}
                <img 
                    className='w-[500px] absolute right-2 top-4' 
                    src={landscape} 
                    alt="Landscape" 
                />
            </div>

            <hr className='bg-white h-1 rounded-md ' />
        </div>
    );
};

export default Header;
