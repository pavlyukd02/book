import React from 'react';

const Navbar = () => {
  return (
    <nav className="mt-5">
      <div className="bg-[#C37F3B] py-4 rounded-3xl w-full max-w-[700px] flex flex-col sm:flex-row gap-4 sm:gap-[50px] pacifico-regular font-normal text-[24px] sm:text-[32px] lg:ml-[140px] md:justify-center items-center m-auto ">
        <a href="/" className="hover:underline">Головна</a>
        <a href="/news" className="hover:underline">Новини</a>
        <a href="/videos" className="hover:underline">Відео</a>
        <a href="/about" className="hover:underline">Про авторів</a>
      </div>
    </nav>
  );
};

export default Navbar;
