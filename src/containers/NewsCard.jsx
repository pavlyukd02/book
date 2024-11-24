import React from 'react';

const NewsCard = ({ image, title, shortText, handleClick, date }) => {
  console.log('URL изображения:', image); // Логируем URL изображения, чтобы проверить правильность его получения

  return (
    <div
      className='mt-[60px] mb-[20px] flex flex-col w-full sm:w-[320px] h-[400px] rounded-[15px] bg-[#C37F3B] shadow-lg cursor-pointer transition hover:scale-105 relative'
      onClick={handleClick}
    >
      {/* Фото новости */}
      <img
        src={image}
        alt="news"
        className='w-full h-[50%] object-cover rounded-t-[15px]'
        onError={(e) => {
          e.target.src = 'https://via.placeholder.com/320x200?text=Изображение+не+найдено'; // Заменяем на плейсхолдер, если изображение не загружается
        }}
      />

      {/* Короткий текст новости */}
      <div className='p-4 flex flex-col gap-2 h-[50%]'>
        <h3 className='poppins-bold text-[15px] text-ellipsis pb-1 text-black'>
          {title}
        </h3>
        <hr />
        <p className='poppins-regular text-[13px] text-black tracking-wider overflow-hidden text-pretty'>
          {shortText}
        </p>

        {/* Дата новости */}
        <div className='bottom-4 right-4 text-[12px] pt-1 text-black opacity-70 text-right'>
          {date}
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
