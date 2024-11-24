// components/NewsItemAdmin.jsx
import React, { useState } from 'react';
import EditNewsModal from './EditNewsModal';
import { doc, deleteDoc } from 'firebase/firestore';
import { db } from '../firebaseConfig';

const NewsItemAdmin = ({ news }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDelete = async () => {
    const confirmDelete = window.confirm('Вы уверены, что хотите удалить эту новость?');
    if (confirmDelete) {
      try {
        await deleteDoc(doc(db, 'news', news.id));
        alert('Новость успешно удалена');
        window.location.reload(); // Перезагружаем страницу после удаления
      } catch (e) {
        console.error('Ошибка при удалении новости:', e.message);
        alert('Ошибка при удалении новости: ' + e.message);
      }
    }
  };

  return (
    <div className="border p-4 mb-4 rounded-md shadow-sm flex items-center">
      {news.imgUrl && (
        <img
          src={news.imgUrl}
          alt={news.title}
          className="w-32 h-32 object-cover mr-4 rounded-md"
        />
      )}
      <div className="flex-1">
        <h3 className="text-xl font-semibold mb-2">{news.title}</h3>
        <p className="text-gray-600 mb-2">{news.date}</p>
        <div className="flex space-x-4">
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600"
          >
            Изменить
          </button>
          <button
            onClick={handleDelete}
            className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
          >
            Удалить
          </button>
        </div>
      </div>

      {isModalOpen && (
        <EditNewsModal news={news} onClose={() => setIsModalOpen(false)} />
      )}
    </div>
  );
};

export default NewsItemAdmin;
