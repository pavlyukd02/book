import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebaseConfig';

const AddVideo = () => {
  const [videoUrl, setVideoUrl] = useState('');

  const handleAddVideo = async () => {
    if (videoUrl.trim() === '') {
      alert('Введите ссылку на видео');
      return;
    }

    try {
      await addDoc(collection(db, 'videos'), {
        url: videoUrl,
      });
      alert('Видео успешно добавлено!');
      setVideoUrl(''); // Очищаем поле ввода после добавления
    } catch (e) {
      console.error('Ошибка при добавлении видео:', e.message);
      alert('Ошибка при добавлении видео.');
    }
  };

  return (
    <div className="mb-6">
      <h3 className="text-xl font-semibold mb-2">Добавить новое видео</h3>
      <div className="flex gap-2">
        <input
          type="text"
          value={videoUrl}
          onChange={(e) => setVideoUrl(e.target.value)}
          placeholder="Введите ссылку на YouTube видео"
          className="p-2 border rounded w-full"
        />
        <button
          onClick={handleAddVideo}
          className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
        >
          Добавить
        </button>
      </div>
    </div>
  );
};

export default AddVideo;
