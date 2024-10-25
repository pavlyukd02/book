import Header from './components/Header';

import Navbar from './components/Navbar';
// import AboutBook from './components/AboutBook';
// import Video from './components/Video';
// import News from './components/News';

import bgImg from './assets/bg.png'

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NewsPages from './pages/NewsPages';


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

        </Routes>
      </BrowserRouter>



    </main>
  )
}

export default App
