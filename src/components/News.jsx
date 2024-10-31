import React from 'react'
import NewsCard from '../containers/NewsCard'
import NewsList from '../containers/NewsList'


const News = () => {
  return (
    <section>
        <div className='flex poppins-bold text-[28px] justify-center uppercase ' >Новини про книгу</div>
        
        <NewsList></NewsList>
    </section>
  )
}

export default News