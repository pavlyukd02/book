// Импортируем необходимые зависимости
import React from 'react';
import { news } from './constants'; // Убедись, что путь к массиву новостей верный
import NewsCard from './NewsCard';
import { useNavigate } from 'react-router-dom';

const NewsList = () => {

    const navigate = useNavigate();

    const latesnews = news.slice(-3);
    return (
        <div className="flex flex-wrap gap-[80px] justify-center ">
            {latesnews.map((item) => (
                <NewsCard
                    key={item.id}
                    image={item.img}
                    title={item.title}
                    date={item.date}
                    // shortText={item.description.slice(0, 150) + (item.description.length > 150 ? "..." : "")}
                      shortText={item.description}
                    
                    handleClick={ () => navigate(`news/${item.id}`)}
                />
            ))}
        </div>
    );
}

export default NewsList;
