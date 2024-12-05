import React from 'react';
import bookImg from '../assets/bookImg.png';
import ornament from '../assets/ornament.png';

const AboutBook = () => {
  return (
    <section className="mt-12 flex flex-col md:flex-row items-center md:items-start md:justify-center px-4">
      {/* Орнамент зліва */}
      <div className="hidden md:block md:w-1/6">
        <img
          src={ornament}
          alt="Ornament"
          className="w-full h-auto mix-blend-color-burn"
        />
      </div>

      {/* Центральний контейнер з текстом та зображенням */}
      <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between md:w-5/6 gap-8">
        {/* Текстовий блок */}
        <div className="text-center md:text-left max-w-lg">
          <h1 className="poppins-bold text-2xl md:text-3xl">
            Село Спаське: Історія крізь призму епох
          </h1>
          <div className="h-[2px] bg-[#E50A0A] mb-8 mt-3"></div>
          <div className="poppins-medium text-base md:text-lg tracking-wide">
            <p className="mb-5">
              Книга «Історія України» є захоплюючим та детальним дослідженням
              багатої та складної історії нашої країни. Від древніх часів, коли
              на території сучасної України існували великі князівства та
              племена, до сучасних подій, що формують наш національний
              ландшафт, це видання охоплює широкий спектр історичних періодів.
            </p>
            <p>
              Автори книги вдало поєднали академічний підхід з доступним стилем
              викладу, завдяки чому читач може не лише дізнатися про важливі
              події, але й краще зрозуміти їх контекст.
            </p>
          </div>
        </div>

        {/* Зображення книги та кнопка */}
        <div className="flex flex-col items-center">
          <img
            src={bookImg}
            alt="Book"
            className="w-48 md:w-64 lg:w-72 h-auto"
          />
          <button className="mt-5 px-6 py-3 bg-[#C37F3B] rounded-3xl poppins-bold text-white uppercase tracking-widest text-base md:text-lg">
            Читати
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutBook;
