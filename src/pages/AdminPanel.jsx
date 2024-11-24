import React, { useEffect, useState } from 'react';
import AddNews from '../components/AddNews';
import AddVideo from '../components/AddVideo';
import { collection, getDocs } from 'firebase/firestore';
import { db, auth } from '../firebaseConfig'; // Импортируем auth
import { signOut } from 'firebase/auth'; // Импортируем signOut из Firebase Auth
import NewsItemAdmin from '../components/NewsItemAdmin';
import { useNavigate } from 'react-router-dom';

const AdminPanel = () => {
  const [newsList, setNewsList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const newsCollection = await getDocs(collection(db, 'news'));
        setNewsList(
          newsCollection.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        );
      } catch (e) {
        console.error('Ошибка при загрузке новостей:', e.message);
      }
    };

    fetchNews();
  }, []);

  // Функция для разлогина
  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/login'); // Перенаправляем на страницу логина
    } catch (e) {
      console.error('Ошибка при выходе из системы:', e.message);
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Административная Панель</h1>
        <div className="flex gap-4">
          <button
            onClick={() => navigate('/')} // Перенаправляем на главную страницу
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            На главный экран
          </button>
          <button
            onClick={handleLogout} // Разлогиниваем пользователя
            className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
          >
            Выйти
          </button>
        </div>
      </div>
      <AddNews />
      <AddVideo />
      <h2 className="text-2xl font-semibold mt-10 mb-4">Список новостей</h2>
      <div>
        {newsList.map((news) => (
          <NewsItemAdmin key={news.id} news={news} />
        ))}
      </div>
    </div>
  );
};

export default AdminPanel;
