import React from 'react'
import NewsCard from '../containers/NewsCard'
import { news } from '../containers/constants'; // Убедись, что путь к массиву новостей верный
import CardForNewsPage from '../containers/CardForNewsPage';
import { useNavigate } from 'react-router-dom';

const NewsPages = () => {

  const navigate = useNavigate();
  return (
    <section>
      <div className='flex justify-center  text-black uppercase mt-10 poppins-semibold text-[28px]'>Новини</div>

      <div className="flex flex-col  gap-[80px] justify-center mt-10">
            {news.map((item) => (

                <CardForNewsPage
                    key={item.id}
                    image={item.img}
                    title={item.title}
                    date={item.date}
                    description={item.description}
                    handleClick={() => navigate(`/news/${item.id}`)}      
                />
                
            ))}
        </div>

    </section>
  )
}

export default NewsPages