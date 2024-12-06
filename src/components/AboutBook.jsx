import React from 'react'
import bookImg from '../assets/bookImg.png'
import ornament from '../assets/ornament.png'

const AboutBook = () => {
  return (
    <section className="max-w-screen-xl mx-auto px-4 mt-12 relative">
      {/* Орнамент ліворуч зверху, приховати на середніх пристроях і менше */}
      <img
        src={ornament}
        alt="Ornament"
        className="h-auto w-[100px] absolute left- hidden lg:block  "
      />

      {/* Контейнер для тексту та зображення, по центру */}
      <div className="max-w-4xl mx-auto flex flex-col lg:flex-row items-center gap-8">
        {/* Текстовий блок */}
        <div className="flex-1">
          <h1 className="poppins-bold text-2xl md:text-3xl text-center lg:text-left">
            Село Спаське: Історія крізь призму епох
          </h1>
          <div className="h-[2px] bg-[#E50A0A] mb-6 mt-3 w-full max-w-xs mx-auto lg:mx-0"></div>
          <div className="poppins-medium text-base md:text-lg tracking-wide text-center lg:text-left">
            <p className="mb-5">
              Книга «Історія України» є захоплюючим та детальним дослідженням
              багатої та складної історії нашої країни. Від древніх часів, коли
              на території сучасної України існували великі князівства та племена,
              до сучасних подій, що формують наш національний ландшафт, це видання
              охоплює широкий спектр історичних періодів.
            </p>
            <p>
              Автори книги вдало поєднали академічний підхід з доступним стилем
              викладу, завдяки чому читач може не лише дізнатися про важливі події,
              але й краще зрозуміти їхній контекст.
            </p>
          </div>
        </div>

        {/* Зображення книги та кнопка */}
        <div className="flex flex-col items-center lg:items-start">
          <img
            src={bookImg}
            alt="Book"
            className="w-48 md:w-64 lg:w-72 h-auto mx-auto lg:mx-0"
          />
          <button className="mx-auto w-full mt-5 px-6 py-3 bg-[#C37F3B] rounded-3xl poppins-bold text-white uppercase  tracking-widest text-base md:text-lg">
            Читати
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutBook;
