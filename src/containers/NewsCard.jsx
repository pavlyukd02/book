import React from 'react';

const NewsCard = ({ image, title, shortText, handleClick }) => {
    return (
        <div className='flex flex-col w-full sm:w-[320px] h-[300px] rounded-[15px] bg-[#ffffff] shadow-lg cursor-pointer transition hover:scale-105' onClick={handleClick}>
            
            {/* Фото новости */}
            <img src={image} alt="news" className='w-full h-[60%] object-cover rounded-t-[15px]' />

            {/* Короткий текст новости */}
            <div className='p-4 flex flex-col justify-between h-[40%]'>
                <h3 className='font-epilogue font-semibold text-[16px] text-[#333] leading-[24px] truncate'>
                    {title}
                </h3>
                <p className='mt-2 font-epilogue font-normal text-[14px] text-[#808191] leading-[20px] truncate'>
                    {shortText}
                </p>
            </div>

        </div>
    );
}

export default NewsCard;
