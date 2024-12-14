import Header from './components/Header';
import Navbar from './components/Navbar';
import bgImg from './assets/bg1.png';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NewsPages from './pages/NewsPages';
import Footer from './components/Footer';
import AboutAthors from './pages/AboutAthors';
import Media from './pages/Media';
import NewsDetails from './pages/NewsDetails';
import Login from './pages/Login';
import AdminPanel from './pages/AdminPanel';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <main
      className="min-h-screen"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <BrowserRouter>
        
        <Routes>

          <Route index element={<Home />} />
          <Route path="/news" element={<NewsPages />} />
          <Route path='/about' element={<AboutAthors />} />
          <Route path='/videos' element={<Media />} />
          <Route path='/news/:id' element={<NewsDetails />} />
          <Route path='/login' element={<Login />} />
          <Route
            path='/admin'
            element={
              <PrivateRoute>
                <AdminPanel />
              </PrivateRoute>
            }
          />
        </Routes>
        <Footer className='mt-auto' />
      </BrowserRouter>
    </main>
  )
}

export default App;
