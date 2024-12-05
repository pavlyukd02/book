import React, { useEffect, useState } from 'react';
import AddNews from '../components/AddNews';
import AddVideo from '../components/AddVideo';
import { collection, getDocs, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { db, auth } from '../firebaseConfig';
import { signOut } from 'firebase/auth';
import NewsItemAdmin from '../components/NewsItemAdmin';
import { useNavigate } from 'react-router-dom';

const AdminPanel = () => {
  const [newsList, setNewsList] = useState([]);
  const [videosList, setVideosList] = useState([]);
  const [editVideo, setEditVideo] = useState(null);
  const [editedVideoUrl, setEditedVideoUrl] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Функция для загрузки новостей
    const fetchNews = async () => {
      try {
        const newsCollection = await getDocs(collection(db, 'news'));
        setNewsList(newsCollection.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      } catch (e) {
        console.error('Ошибка при загрузке новостей:', e.message);
      }
    };

    // Функция для загрузки видео
    const fetchVideos = async () => {
      try {
        const videosCollection = await getDocs(collection(db, 'videos'));
        setVideosList(videosCollection.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      } catch (e) {
        console.error('Ошибка при загрузке видео:', e.message);
      }
    };

    fetchNews();
    fetchVideos();
  }, []);

  // Функция для удаления видео
  const handleDeleteVideo = async (videoId) => {
    if (window.confirm('Ви впевнені, що хочете видалити це відео?')) {
      try {
        await deleteDoc(doc(db, 'videos', videoId));
        setVideosList(videosList.filter((video) => video.id !== videoId));
        alert('Відео успішно видалено!');
      } catch (e) {
        console.error('Ошибка при удалении видео:', e.message);
        alert('Ошибка при удалении видео.');
      }
    }
  };

  // Функция для редактирования видео
  const handleEditVideo = async (videoId) => {
    if (editedVideoUrl.trim() === '') {
      alert('Введіть нову URL для відео');
      return;
    }

    try {
      const videoRef = doc(db, 'videos', videoId);
      await updateDoc(videoRef, { url: editedVideoUrl });
      setVideosList(videosList.map((video) => (video.id === videoId ? { ...video, url: editedVideoUrl } : video)));
      setEditVideo(null);
      setEditedVideoUrl('');
      alert('Відео успішно оновлено!');
    } catch (e) {
      console.error('Ошибка при редагуванні відео:', e.message);
      alert('Ошибка при редагуванні відео.');
    }
  };

  // Функция для выхода из системы
  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/login');
    } catch (e) {
      console.error('Ошибка при выходе из системы:', e.message);
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Адміністративна Панель</h1>
        <div className="flex gap-4">
          <button
            onClick={() => navigate('/')}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            На головний екран
          </button>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
          >
            Вийти
          </button>
        </div>
      </div>

      {/* Форма для додавання новин та відео */}
      <AddNews />
      <AddVideo />

      {/* Список відео з можливістю редагування та видалення */}
      

      {/* Список новин */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Список новин</h2>
      <div>
        {newsList.map((news) => (
          <NewsItemAdmin key={news.id} news={news} />
        ))}
      </div>
      <h2 className="text-2xl font-semibold mt-10 mb-4">Список відео</h2>
      <div className="flex flex-col gap-4 mb-10">
        {videosList.map((video) => (
          <div key={video.id} className="flex justify-between items-center p-4 border rounded bg-gray-100">
            {editVideo === video.id ? (
              <div className="flex gap-4 w-full">
                <input
                  type="text"
                  value={editedVideoUrl}
                  onChange={(e) => setEditedVideoUrl(e.target.value)}
                  placeholder="Нова URL"
                  className="p-2 border rounded w-full"
                />
                <button
                  onClick={() => handleEditVideo(video.id)}
                  className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
                >
                  Зберегти
                </button>
                <button
                  onClick={() => {
                    setEditVideo(null);
                    setEditedVideoUrl('');
                  }}
                  className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
                >
                  Скасувати
                </button>
              </div>
            ) : (
              <>
                <p className="text-lg">{video.url}</p>
                <div className="flex gap-4">
                  <button
                    onClick={() => {
                      setEditVideo(video.id);
                      setEditedVideoUrl(video.url);
                    }}
                    className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600"
                  >
                    Редагувати
                  </button>
                  <button
                    onClick={() => handleDeleteVideo(video.id)}
                    className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                  >
                    Видалити
                  </button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPanel;
