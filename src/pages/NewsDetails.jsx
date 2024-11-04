import React from 'react';
import { useParams } from 'react-router-dom';
import { news } from '../containers/constants';

const NewsDetails = () => {
  const { id } = useParams(); // Получаем ID из URL
  const selectedNews = news.find((item) => item.id === parseInt(id)); // Находим новость по ID

  if (!selectedNews) {
    return <div>Новость не найдена</div>;
  }

  return (
    <div className="flex flex-col items-center mt-10">
      <img src={selectedNews.img} alt={selectedNews.title} className="mb-6 w-3/4 rounded-lg shadow-lg" />
      <h2 className="text-3xl font-semibold mb-4">{selectedNews.title}</h2>
      <p className="text-gray-500 mb-2">{selectedNews.date}</p>
      <p className="text-lg leading-relaxed max-w-3xl">{selectedNews.description}</p>
    </div>
  );
}

export default NewsDetails;
