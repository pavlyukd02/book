import React from 'react'
import NewsCard from '../containers/NewsCard'
import NewsList from '../containers/NewsList'


const News = () => {
  return (
    <section className=''>
      <div className='flex poppins-bold text-[28px] justify-center uppercase ' >Новини про книгу</div>
      <NewsList></NewsList>
      <div className='mt-10 flex justify-center' >
        <button className= ' flex  justify-center mt-5 p-4 bg-[#915c28] w-[300px] rounded-3xl poppins-bold text-white uppercase tracking-widest text-[25px]'>
          Дивитися ще
        </button>
      </div>
    </section>
  )
}

export default News