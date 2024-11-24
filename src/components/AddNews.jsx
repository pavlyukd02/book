// AddNews.jsx
import { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import { useAuth } from '../hooks/useAuth';

const AddNews = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imgUrl, setImgUrl] = useState('');
  const [date, setDate] = useState('');
  const [error, setError] = useState('');

  const currentUser = useAuth();

  const handleSubmit = async () => {
    if (!currentUser) {
      setError('Вы должны быть авторизованы для добавления новостей.');
      return;
    }

    try {
      await addDoc(collection(db, 'news'), {
        title,
        description,
        imgUrl,
        date,
        userId: currentUser.uid,
      });
      alert('Новость добавлена успешно');
      setTitle('');
      setDescription('');
      setImgUrl('');
      setDate('');
    } catch (e) {
      console.error('Ошибка при добавлении новости:', e.message);
      setError('Ошибка при добавлении новости: ' + e.message);
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Добавить Новость</h2>
      {error && <p className="mb-4 text-red-500">{error}</p>}
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Заголовок</label>
        <input
          type="text"
          placeholder="Заголовок"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Описание</label>
        <textarea
          placeholder="Описание"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-3 h-40 border rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">URL изображения</label>
        <input
          type="text"
          placeholder="URL изображения"
          value={imgUrl}
          onChange={(e) => setImgUrl(e.target.value)}
          className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 mb-2">Дата</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <button
        onClick={handleSubmit}
        className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition duration-200"
      >
        Добавить Новость
      </button>
    </div>
  );
};

export default AddNews;
