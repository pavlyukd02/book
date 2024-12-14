import React from "react";
import bookImg from "../assets/image.png";
import ornament from "../assets/ornament.png";
// Импортируем PDF-файл
import bookPdf from "../assets/book.pdf";

const AboutBook = () => {
  return (
    <section className="max-w-screen-xl mx-auto px-4 mt-12 relative">
      {/* Орнамент слева сверху, скрыть на средних устройствах и меньше */}
      <img
        src={ornament}
        alt="Ornament"
        className="h-auto w-[100px] absolute left-0 hidden lg:block"
      />

      {/* Контейнер для текста и изображения, по центру */}
      <div className="max-w-4xl mx-auto flex flex-col lg:flex-row items-center gap-8">
        {/* Текстовый блок */}
        <div className="flex-1">
          <h1 className="poppins-bold text-2xl md:text-3xl text-center lg:text-left">
            Село Спаське: Історія крізь призму епох
          </h1>
          <div className="h-[2px] bg-[#E50A0A] mb-6 mt-3 w-full max-w-xs mx-auto lg:mx-0"></div>
          <div className="poppins-medium text-base md:text-lg tracking-wide text-center lg:text-left">
            <p className="mb-5">
              Ця книга – спроба зберегти пам’ять про багатовікову історію села
              Спаське, висвітлюючи його минуле в контексті різних епох. Від
              геологічних особливостей регіону до найдавніших археологічних
              знахідок, від козацької звитяги до викликів колективізації,
              політичних репресій та воєнного лихоліття – кожен розділ книги
              відкриває маловідомі сторінки історії краю. Особливу увагу
              приділено соціальному та культурному життю: розвитку освіти,
              медицини, релігії, мистецтва та навіть кулінарних традицій, що
              формували унікальний образ цього регіону.
            </p>
            <p>
              Для створення цієї книги автори використали широкий спектр джерел:
              від архівних документів та спогадів старожилів до матеріалів
              місцевого музею. Унікальні фотографії оживляють минуле, дозволяючи
              читачам уявити життя своїх предків.
            </p>
          </div>
        </div>

        {/* Изображение книги и кнопка */}
        <div className="flex flex-col items-center lg:items-start">
          <img
            src={bookImg}
            alt="Book"
            className="w-64 md:w-80 lg:w-96 h-auto mx-auto lg:mx-0"
          />

          {/* Оборачиваем кнопку в ссылку <a> */}
          <a
            href={bookPdf}
            target="_blank"
            rel="noopener noreferrer"
            // Используем flex для центрирования кнопки на мобильных устройствах
            className="w-full"
          >
            <button className="mx-auto w-full mt-5 px-6 py-3 bg-[#C37F3B] rounded-3xl poppins-bold text-white uppercase tracking-widest text-base md:text-lg">
              Читати
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutBook;
