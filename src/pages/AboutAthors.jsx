import React from "react";

import author1 from "../assets/kuchma.jpg";
import author2 from "../assets/govoruha.png";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

const AboutAuthors = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <section className="mt-10 mb-32 px-4">
        <div className="flex flex-col md:flex-row w-full gap-10 md:gap-0">
          {/* Первый автор */}
          <div className="md:w-1/2 flex flex-col items-center p-5">
            {/* Контейнер фиксированной высоты и ширины */}
            <div className="w-[400px] h-[400px] overflow-hidden rounded-xl">
              <img
                src={author1}
                alt="Автор 1"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="px-10">
              <div className="flex justify-center mt-4">
                <h1 className="poppins-bold text-2xl sm:text-3xl lg:text-4xl">
                  Кучма Роман
                </h1>
              </div>
              
              <p className="py-4 poppins-light text-base sm:text-lg lg:text-xl tracking-wider text-black text-justify ">
                Роман Кучма народився 28 березня 1994 року у с. Спаське на
                Дніпропетровщині (Січеславщині). Після закінчення дев’яти класів
                Спаської школи пішов навчатися до Новомосковського
                кооперативного коледжа економіки та права ім. С. В. Литвиненка
                Дніпропетровської ОСС за спеціальністю «Правознавство».
                <br />
                <br />
                В 2014 - 2016 р. р. : навчався в Дніпропетровському державному
                університеті внутрішніх справ також за спеціальністю
                «Правознавство». А в 2024 році закінчив магістратуру
                Національного технічного університету Дніпровська політехніка за
                спеціальністю «Публічне управління та адміністрування».
                <br />
                <br />
                Роман Кучма ‒ громадський діяч, краєзнавець, нумізмат, засновник
                та голова громадських організацій «Спаський простір» та
                «Футбольний клуб «Спаське». Депутат місцевих рад 3-х скликань.
              </p>
            </div>
          </div>

          {/* Второй автор */}
          <div className="md:w-1/2 flex flex-col items-center p-5">
            <div className="w-[400px] h-[400px] overflow-hidden rounded-xl">
              <img
                src={author2}
                alt="Автор 2"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="px-10">
              <div className="flex justify-center mt-4">
                <h1 className="poppins-bold text-2xl sm:text-3xl lg:text-4xl">
                  Говоруха Владислав
                </h1>
              </div>
              
              <p className="py-4 poppins-light text-base sm:text-lg lg:text-xl tracking-wider text-black text-justify">
                Говоруха Владислав народився 02 березня 1994 року у с. Спаське
                на Дніпропетровщині (Січеславщині). Після закінчення Спаської
                школи вступив до Дніпровського національного університету ім.
                Олеся Гончара за спеціальністю «Історія». В 2017 р. здобув
                ступінь магістра історії та продовжив навчання в аспірантурі.
                <br />
                <br />
                З 2016 по 2022 р. працював на посаді директора КЗ
                «Історико-краєзнавчий музей села Спаське» Підгородненської
                міської ради. В 2024 р. закінчив магістерську програму в
                Дніпровському державному аграрно-економічному університеті за
                спеціальністю «Публічне управління та адміністрування».
                <br />
                <br />
                Владислав Говоруха ‒ громадський діяч, історик та краєзнавець,
                депутат Підгородненської міської ради 2-х скликань, голова Ради
                молодих учених історичного факультету Дніпровського
                національного університету ім. Олеся Гончара, член ГО «Спаський
                простір».
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutAuthors;
