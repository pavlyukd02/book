import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import NewsCard from './NewsCard';
import { useNavigate } from 'react-router-dom';

const NewsList = () => {
  const [news, setNews] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'news'));
        const newsData = querySnapshot.docs.map(doc => ({
          ...doc.data(),
          id: doc.id,
        }));
        console.log('Загруженные новости:', newsData); // Логируем данные, чтобы убедиться в правильности загрузки
        setNews(newsData);
      } catch (e) {
        console.error('Ошибка при загрузке новостей:', e.message);
      }
    };
    fetchNews();
  }, []);

  const latestNews = news.slice(0, 3);

  return (
    <div className='px-4 md:px-8'>
      <div className="flex flex-wrap  md:gap-[80px] justify-center">
        {latestNews.map((item) => (
          <NewsCard
            key={item.id}
            image={item.imgUrl} // Убедись, что imgUrl содержит действительный URL
            title={item.title}
            date={item.date}
            shortText={item.description}
            handleClick={() => navigate(`/news/${item.id}`)}
          />
        ))}
      </div>
    </div>
  );
};

export default NewsList;
