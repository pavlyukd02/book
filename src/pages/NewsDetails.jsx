// NewsDetails.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import Header from '../components/Header';
import Navbar from '../components/Navbar';

const NewsDetails = () => {
  const { id } = useParams(); // Получаем ID из URL
  const [selectedNews, setSelectedNews] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNewsDetails = async () => {
      try {
        const docRef = doc(db, 'news', id); // Создаем ссылку на документ с конкретным ID
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setSelectedNews({ id: docSnap.id, ...docSnap.data() }); // Сохраняем данные о новости в состояние
        } else {
          console.error('Новость не найдена');
        }
      } catch (e) {
        console.error('Ошибка при загрузке новости:', e.message);
      } finally {
        setLoading(false);
      }
    };

    fetchNewsDetails();
  }, [id]); // Загрузка данных при изменении id

  if (loading) {
    return <div>Загрузка...</div>; // Показать индикатор загрузки, пока данные загружаются
  }

  if (!selectedNews) {
    return <div>Новость не найдена</div>; // Сообщение, если новость не найдена
  }

  return (
    <div>
      <Header/>
      <Navbar/>
    <div className="flex flex-col items-center mt-10">
      {selectedNews.imgUrl && (
        <img
          src={selectedNews.imgUrl}
          alt={selectedNews.title}
          className="mb-6 w-2/4 rounded-lg shadow-lg"
        />
      )}
      <h2 className="text-3xl font-semibold mb-4">{selectedNews.title}</h2>
      <p className="text-gray-500 mb-2">{selectedNews.date}</p>
      <p className="text-lg leading-relaxed max-w-3xl whitespace-pre-wrap">
        {selectedNews.description}
      </p>
    </div>
    </div>
  );
};

export default NewsDetails;
