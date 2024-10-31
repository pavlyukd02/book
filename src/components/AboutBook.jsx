import React from 'react'
import bookImg from '../assets/bookImg.png'
import ornament from '../assets/ornament.png'

const AboutBook = () => {
    return (
        <section className='mt-[50px] flex  items-start'>

            {/* Орнамент слева */}
            <div className=' flex items-start ml-[50px]'>
                <img src={ornament} alt="Ornament" className='w-[150px] h-auto mix-blend-color-burn mr-10' />


                {/* Центральный контейнер с текстом и картинкой */}
                <div className='flex flex-col md:flex-row items-center mt-[125px] ml-[140px] align-middle justify-center gap-8'>

                    {/* Текстовый блок */}
                    <div className='text-center md:text-left max-w-lg'>
                        <h1 className='poppins-bold text-[28px]'>
                            Село Спаське: Історія крізь призму епох
                        </h1>
                        <div className='p-[1px] rounded-full bg-[#E50A0A] mb-8 mt-3'></div>
                        <div className='poppins-medium text-[22px] tracking-wide'>
                            <p className='mb-5'>
                                Книга «Історія України» є захоплюючим та детальним дослідженням багатої та складної історії нашої країни. Від древніх часів, коли на території сучасної України існували великі князівства та племена, до сучасних подій, що формують наш національний ландшафт, це видання охоплює широкий спектр історичних періодів.
                            </p>
                            <p>
                                Автори книги вдало поєднали академічний підхід з доступним стилем викладу, завдяки чому читач може не лише дізнатися про важливі події, але й краще зрозуміти їх контекст.
                            </p>
                        </div>
                    </div>

                    {/* Изображение книги и кнопка */}
                    <div className='flex flex-col items-center'>
                        <img src={bookImg} className='w-[350px]' alt="Book" />
                        <button className='mt-5 p-4 bg-[#C37F3B] w-[300px] rounded-3xl poppins-bold text-white uppercase tracking-widest text-[25px]'>
                            Читати
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default AboutBook;
