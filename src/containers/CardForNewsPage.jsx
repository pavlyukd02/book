import React from 'react';

const CardForNewsPage = ({ image, title, description, handleClick, date }) => {
    return (
        <div>
            <div
                className="flex items-center p-4 ml-10 rounded-lg cursor-pointer transition hover:scale-105 max-w-[1000px] w-full"
                onClick={handleClick}
            >
                {/* Блок для изображения с фиксированным размером */}
                <div className="w-[350px] h-[200px] flex-shrink-0 overflow-hidden rounded-lg">
                    <img src={image} alt="news" className="w-full h-full object-cover" />
                </div>

                {/* Блок с текстом новости */}
                <div className="ml-4 flex flex-col justify-between">
                    <h1 className="text-xl font-semibold">{title}</h1>
                    <div className="text-gray-500 text-sm">{date}</div>
                    <p className="text-gray-700 text-sm mt-2">{description}</p>
                </div>


            </div>
        <hr />  
           
        </div>
    );
};

export default CardForNewsPage;
