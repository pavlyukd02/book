import React from 'react';

const NewsCard = ({ image, title, shortText, handleClick }) => {
    return (
        <div className='mt-[60px] mb-[200px] flex flex-col w-full sm:w-[320px] h-[400px] rounded-[15px] bg-[#C37F3B] shadow-lg cursor-pointer transition hover:scale-105' onClick={handleClick}>

            {/* Фото новости */}
            <img src={image} alt="news" className='w-full h-[50%] object-cover rounded-t-[15px]' />

            {/* Короткий текст новости */}
            <div className='p-4 flex flex-col gap-2 h-[50%] '>
                <h3 className=' poppins-bold  text-[16px] text-black leading-[24px] '>
                    {title}
                </h3>
                <hr />
                <p className='mt-2 poppins-regular  font-normal text-[14px] text-[white] tracking-wider '>
                    {shortText}
                </p>
            </div>

        </div>
    );
}

export default NewsCard;
