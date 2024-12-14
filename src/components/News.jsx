import React from 'react'
import NewsCard from '../containers/NewsCard'
import NewsList from '../containers/NewsList'
import { Link } from 'react-router-dom'


const News = () => {
  return (
    <section className=''>
      <div className='flex poppins-bold text-[38px] justify-center uppercase ' >Новини про книгу</div>
      <NewsList></NewsList>
      <div className='mt-10 flex justify-center' >
        <Link to='/news'>
        <button className= ' flex  justify-center mt-5 p-4 bg-[#915c28] w-[300px] rounded-3xl poppins-bold text-white uppercase tracking-widest text-[25px]'>
          Дивитися ще
        </button>
        </Link>
      </div>
    </section>
  )
}

export default News