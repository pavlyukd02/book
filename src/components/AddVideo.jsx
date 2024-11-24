// AddVideo.jsx
import { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebaseConfig';

const AddVideo = () => {
  const [title, setTitle] = useState('');
  const [videoUrl, setVideoUrl] = useState('');

  const handleSubmit = async () => {
    try {
      await addDoc(collection(db, 'videos'), {
        title,
        videoUrl,
      });
      alert('Видео добавлено успешно');
    } catch (e) {
      console.error('Ошибка при добавлении видео: ', e);
    }
  };

  return (
    <div>
      <h2>Добавить Видео</h2>
      <input
        type="text"
        placeholder="Заголовок"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="URL Видео (YouTube)"
        value={videoUrl}
        onChange={(e) => setVideoUrl(e.target.value)}
      />
      <button onClick={handleSubmit}>Добавить Видео</button>
    </div>
  );
};

export default AddVideo;
