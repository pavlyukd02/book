import React from 'react';

import author1 from '../assets/author1.png';
import author2 from '../assets/author2.png';

const AboutAuthors = () => {
  return (
    <section className='mt-10 mb-[800px] '>
      <div className='flex w-full h-[430px] shadow-xl drop-shadow-xl '>
        <div className='w-1/2'>
          <img src={author1} alt="" className='w-full h-full object-cover     ' />
          <div className='flex justify-center mt-4 ' >
            <h1 className='poppins-bold text-[38px]'>Кучма Роман </h1>
          </div>
          <p className='flex justify-center poppins-medium text-[34px] '>"Якась гарна цитата" </p>
          <p className='px-[80px] py-4 poppins-light text-[18px] tracking-wider text-black'>Автобіографія — це свого роду особиста візитівка. Чому в кадровій сфері застосовується термін «автобіографія», а не «біографія»? Адже біографія — це огляд життя людини, включаючно з основними фактами життя, який може скласти інша особа про цю людину. Тоді як автобіографія це біографія, написана власноруч автором про себе. Чим зрозуміліше і якісніше написана автобіографія, тим більша ймовірність, що вона спрацює. <br /><br />Наприклад, автора запросять на співбесіду або потрібна автобіографія на роботу. Як і будь-який документ, містить і автобіографія вимоги до написання. При складанні автобіографії дотримуйтесь правил:
            «Повне або часткове копіювання будь-яких матеріалів сайту, цитування, публікація їх анотованих оглядів допускаються лише з письмового дозволу редакції сайту Кадровик-01
            </p>
        </div>
        <div className='w-1/2'>
          <img src={author2} alt="" className='w-full h-full object-cover' />
        </div>
      </div>
    </section>
  );
};

export default AboutAuthors;
