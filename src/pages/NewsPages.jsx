import React, { useState, useEffect } from 'react';
import NewsCard from '../containers/NewsCard';
import CardForNewsPage from '../containers/CardForNewsPage';
import { useNavigate } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebaseConfig'; // Убедись, что путь к файлу конфигурации верный
import Header from '../components/Header';
import Navbar from '../components/Navbar';

const NewsPages = () => {
  const [newsList, setNewsList] = useState([]); // Состояние для хранения новостей
  const navigate = useNavigate();
  
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'news')); // Получение всех документов из коллекции 'news'
        const newsData = querySnapshot.docs.map((doc) => ({
          id: doc.id, // Используем id документа Firestore как уникальный идентификатор
          ...doc.data(), // Данные из документа
        }));
        setNewsList(newsData); // Обновляем состояние новостей
      } catch (e) {
        console.error('Ошибка при загрузке новостей:', e.message);
      }
    };

    fetchNews();
  }, []); // Загрузка новостей при монтировании компонента

 

  return (
    <section>
      <Header />
      <Navbar />
      
      <div className='flex justify-center text-black uppercase mt-10 poppins-semibold text-[36px]'>Усі новини</div>

      <div className="flex flex-col gap-[80px] justify-center mt-10">
        {newsList.map((item) => (
          <CardForNewsPage
            key={item.id}
            image={item.imgUrl} // Используем imgUrl из данных Firestore
            title={item.title}
            date={item.date}
            description={item.description}
            handleClick={() => navigate(`/news/${item.id}`)}      
          />
        ))}
      </div>
    </section>
  );
};

export default NewsPages;
