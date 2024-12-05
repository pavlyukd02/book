import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebaseConfig';

const Media = () => {
  const [videoUrls, setVideoUrls] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const videosCollection = await getDocs(collection(db, 'videos'));
        const videosData = videosCollection.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setVideoUrls(videosData.map((video) => video.url)); // Извлекаем ссылки на видео
      } catch (e) {
        console.error('Ошибка при загрузке видео:', e.message);
      }
    };
    fetchVideos();
  }, []);

  return (
    <div>
      <Header />
      <Navbar />
      <div className="container mx-auto p-4 px-[80px] mt-10 ">
        {/* Секция для двух последних больших видео */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-8 justify-items-center ">
          {videoUrls.slice(0, 2).map((url, index) => (
            <div key={index} className="w-[550px] h-[400px]">
              <iframe
                width="100%"
                height="100%"
                src={url}
                title={`YouTube video ${index + 1}`}
                controls="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-2xl"
              ></iframe>
            </div>
          ))}
        </div>

        {/* Секция для остальных видео меньшего размера */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-[50px] mt-[50px] justify-self-center">
          {videoUrls.slice(2).map((url, index) => (
            <div key={index + 2} className="w-[350px] h-[250px]">
              <iframe
                width="100%"
                height="100%"
                src={url}
                title={`YouTube video ${index + 3}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-2xl"
              ></iframe>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Media;
