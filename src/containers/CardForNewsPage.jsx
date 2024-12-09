import React from 'react';

const CardForNewsPage = ({ image, title, description, handleClick, date }) => {
    return (
        <div>
            <div
                className="flex flex-col sm:flex-row items-start sm:items-center p-4 sm:ml-10 rounded-lg cursor-pointer transition hover:scale-105 max-w-[1000px] w-full"
                onClick={handleClick}
            >
                {/* Изображение будет занимать всю ширину на мобильных и фиксированную ширину на больших экранах */}
                <div className="w-full sm:w-[350px] h-auto sm:h-[200px] flex-shrink-0 overflow-hidden rounded-lg">
                    <img src={image} alt="news" className="w-full h-full object-cover" />
                </div>

                {/* Текстовый блок: отступ сверху на мобильных, слева на больших экранах */}
                <div className="mt-4 sm:mt-0 sm:ml-4 flex flex-col justify-between w-full">
                    <h1 className="text-lg sm:text-xl font-semibold">{title}</h1>
                    <div className="text-gray-500 text-sm mt-1">{date}</div>
                    <p className="text-gray-700 text-sm mt-2">{description}</p>
                </div>
            </div>
            <hr className="mt-4"/>
        </div>
    );
};

export default CardForNewsPage;
