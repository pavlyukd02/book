import React from 'react';
import baroccoImg from '../assets/barocco.png';
import landscape from '../assets/landscape.jpg';

const Header = () => {
    return (
        <div className='relative px-4 sm:px-6 lg:px-8'>
            {/* Контейнер для изображений */}
            <div className='flex flex-col lg:flex-row justify-between items-center'>
                {/* Изображение с барокко. Используем flex-initial, чтобы оно не занимало больше места. Показ только на больших устройствах */}
                <img
                    className='hidden lg:block w-[150px] lg:w-[250px] mix-blend-multiply mb-4 lg:mb-0'
                    src={baroccoImg}
                    alt="Barocco"
                />
                <h1 className='flex-1 pacifico-regular font-normal text-[24px] mr-5 sm:text-[32px] lg:text-[48px] uppercase text-center lg:text-left mb-4 lg:mb-0'>
                    Історичне спасське
                </h1>

                {/* Ландшафтное изображение. Используем flex-initial для контроля размеров. */}
                <div className='w-full lg:w-[500px] h-[200px] sm:h-[250px] lg:h-[300px] py-4'>
                    <img
                        className='w-full h-full object-cover rounded-2xl'
                        src={landscape}
                        alt="Landscape"
                    />
                </div>
            </div>

            <hr className='bg-white h-1 rounded-md' />
        </div>
    );
};

export default Header;
