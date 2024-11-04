import Header from './components/Header';

import Navbar from './components/Navbar';
// import AboutBook from './components/AboutBook';
// import Video from './components/Video';
// import News from './components/News';

import bgImg from './assets/bg.png'

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NewsPages from './pages/NewsPages';
import Footer from './components/Footer';
import NewsList from './containers/NewsList';
import AboutAthors from './pages/AboutAthors';
import Media from './pages/Media';
import NewsDetails from './pages/NewsDetails';


function App() {

  return (



    <main
      className="min-h-screen"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <BrowserRouter>
        <Header />
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/news" element={<NewsPages />} />
          <Route path='/about' element={<AboutAthors />} />
          <Route path='/videos' element={<Media />} />
          <Route path='/news/:id' element={<NewsDetails />} />
          
         


        </Routes>
        <Footer className='mt-auto'/>
      </BrowserRouter>



    </main>
  )
}

export default App
