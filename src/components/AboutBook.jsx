import React from 'react'
import bookImg from '../assets/bookImg.png'
const AboutBook = () => {
    return (
        <section className='mt-[100px]'>
            <div className='flex flex-row justify-center  ml-[200px] mr-[100px]'>
                <div className='flex  flex-1 flex-col  mr-[89px] '>
                    <div className='flex jus'>
                        <h1 className='poppins-bold text-[28px]  '>
                            Село Спаське: Історія крізь призму епох
                        </h1>


                    </div>
                    <div className='p-[1px] rounded-full bg-[#E50A0A] mb-8 mt-3'></div>

                    <div className='poppins-medium text-[22px] tracking-wide '>
                        <p className='mb-5' >
                            Книга «Історія України» є захоплюючим та детальним дослідженням багатої та складної історії нашої країни. Від древніх часів, коли на території сучасної України існували великі князівства та племена, до сучасних подій, що формують наш національний ландшафт, це видання охоплює широкий спектр історичних періодів.
                        </p>

                        <p>
                            Автори книги вдало поєднали академічний підхід з доступним стилем викладу, завдяки чому читач може не лише дізнатися про важливі події, але й краще зрозуміти їх контекст.
                        </p>
                    </div>
                </div>


                <div>
                    <img src={bookImg} className='w-[400px]' alt="" />
                    <div className='flex justify-center mt-5 '>
                        <button className='p-4  bg-[#C37F3B] w-[400px]  rounded-3xl poppins-bold text-white uppercase tracking-widest text-[25px]'>Читати</button>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default AboutBook