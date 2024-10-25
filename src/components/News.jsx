import React from 'react'
import NewsCard from '../containers/NewsCard'


const News = () => {
  return (
    <section>
        <div className='flex poppins-bold text-[28px] justify-center uppercase' >Новини про книгу</div>
        <NewsCard></NewsCard>
    </section>
  )
}

export default News