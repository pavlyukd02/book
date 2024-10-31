// Импортируем необходимые зависимости
import React from 'react';
import { news } from './constants'; // Убедись, что путь к массиву новостей верный
import NewsCard from './NewsCard';


const NewsList = () => {
    return (
        <div className="flex flex-wrap gap-[80px] justify-center">
            {news.map((item) => (

                <NewsCard
                    key={item.id}
                    image={item.img}
                    title={item.title}
                    shortText={item.description.slice(0, 150) + (item.description.length > 150 ? "..." : "")}
                    handleClick={() => alert(`Вы нажали на новость с ID: ${item.id}`)}      
                />
            ))}
        </div>
    );
}

export default NewsList;
