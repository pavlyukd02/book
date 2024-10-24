import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import videoSrc from '../assets/videoBook2.mp4'; // Импорт видеофайла

// Регистрация плагина ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const VideoSection = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    // Анимация GSAP с использованием ScrollTrigger
    ScrollTrigger.create({
      trigger: videoRef.current, // Триггер для видео
      start: 'top 80%', // Когда верхняя часть видео достигнет 80% экрана
      onEnter: () => {
        // Воспроизведение видео при прокрутке к нему
        if (videoRef.current) {
          videoRef.current.play();
        }
      },
      onLeave: () => {
        // Остановка видео при уходе с экрана
        if (videoRef.current) {
          videoRef.current.pause();
        }
      },
      onEnterBack: () => {
        // Воспроизведение видео при прокрутке обратно
        if (videoRef.current) {
          videoRef.current.play();
        }
      },
      onLeaveBack: () => {
        // Остановка видео при прокрутке вверх
        if (videoRef.current) {
          videoRef.current.pause();
        }
      },
      markers: true, // Маркеры для дебага (можно удалить в продакшене)
    });
  }, []);

  return (
    <section className='min-h-screen flex justify-center items-center relative'>
      <div className='relative w-full h-[800px]'>
        {/* Само видео */}
        <video
          className="w-full h-full object-cover block border-0 outline-none"
          src={videoSrc}
          ref={videoRef}
          autoPlay
          muted
          loop
        />
        
        {/* Наложение затемнения */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
    </section>
  );
};

export default VideoSection;
