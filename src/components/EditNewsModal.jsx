// components/EditNewsModal.jsx
import React, { useState } from 'react';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../firebaseConfig';

const EditNewsModal = ({ news, onClose }) => {
  const [title, setTitle] = useState(news.title);
  const [description, setDescription] = useState(news.description);
  const [imgUrl, setImgUrl] = useState(news.imgUrl);
  const [date, setDate] = useState(news.date);
  const [error, setError] = useState('');

  const handleUpdate = async () => {
    try {
      const newsRef = doc(db, 'news', news.id);
      await updateDoc(newsRef, {
        title,
        description,
        imgUrl,
        date,
      });
      alert('Новость успешно обновлена');
      onClose();
      window.location.reload(); // Перезагружаем страницу после обновления
    } catch (e) {
      console.error('Ошибка при обновлении новости:', e.message);
      setError('Ошибка при обновлении новости: ' + e.message);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-md shadow-md w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Изменить Новость</h2>
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
        <div className="flex justify-end space-x-4">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
          >
            Отмена
          </button>
          <button
            onClick={handleUpdate}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Сохранить
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditNewsModal;
