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
      markers: false, // Маркеры для дебага (можно удалить в продакшене)
    });
  }, []);

  return (
    <section className='min-h-screen flex justify-center items-center relative'>
      <div className='relative w-full h-[800px] md:h-[600px]'>
        {/* Само видео */}
        <video
          className="w-full h-full object-cover block border-0 outline-none rounded-xl"
          src={videoSrc}
          ref={videoRef}
          autoPlay
          muted
          loop
        />

        {/* Наложение затемнения */}
        <div className="absolute inset-0 bg-black opacity-50 rounded-xl"></div>
        <div className='absolute inset-0 flex-col  items-center text-white  flex justify-center gap-4'>
          <h1 className='poppins-bold text-[40px] uppercase '>Улюблене Спаське</h1>
          <p className='poppins-bold uppercase text-[20px] '  >та його стародавня історія</p>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
