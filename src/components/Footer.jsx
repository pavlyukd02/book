import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Импортируем Link и useNavigate

import facebook from '../assets/facebook.png';
import instagram1 from '../assets/instagram1.png';
import x from '../assets/x.png';

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className='mt-5'>
      <div className='bg-black opacity-80 p-11'>
        <div className='flex justify-between items-center  text-white  flex-col md:flex-row md:gap-0 gap-[15px] text-center'>
          <div className='flex flex-col gap-4 justify-center items-center px-4'>
            <div className='uppercase poppins-medium'>
              Історичне Спасське
            </div>
            <div>
              © 2024. Цей проєкт має відкриту ліцензію CC BY 4.0.
            </div>
          </div>
          <div className=''>
            <div className='flex justify-center align-middle items-center flex-col mr:0 md:mr-[250px]'>
              <h1 className='uppercase'>Контакти:</h1>
              <div className='text-[14px] flex items-center  flex-col'>
                <p>індекс: 39081,</p>
                <p className>вул. Богдана Хмельницького 22,</p>
                <p>пошта: test@gmail.com</p>
              </div>
            </div>
          </div>
          <div>
            <div className=' flex  justify-center  items-center'>Соціальні мережі</div>
            <div className='flex flew-row w-[150px] h-[50px] gap-4 mt-4 '>
              <div>
                <img src={facebook} alt="Facebook" />
              </div>
              <div>
                <img src={instagram1} alt="Instagram" />
              </div>
              <div>
                <img src={x} alt="X" />
              </div>
            </div>
          </div>
        </div>
        <hr className='bg-white h-[1.5px] mt-3' />
        <div className='flex justify-end text-white mt-4'>
          <Link to="/login" className="bg-transparent hover:bg-white hover:text-black py-2 px-4 rounded transition">
            Вхід адміністратора
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
