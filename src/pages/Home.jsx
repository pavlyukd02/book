import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import AboutBook from '../components/AboutBook';
import Video from '../components/Video';
import News from '../components/News';

const Home = () => {
    return (
        
        <section>
            <Header />
            <Navbar />
           
            <AboutBook />
            <Video />
            <News />
        </section>
    );
}

export default Home;
