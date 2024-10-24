import Header from './components/Header';
import bgImg from './assets/bg.png'
import Navbar from './components/Navbar';
import AboutBook from './components/AboutBook';
import Video from './components/Video';

function App() {

  return (
    <main
      className="min-h-screen p-8"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      
      <Header></Header>
      <Navbar></Navbar>
      <AboutBook></AboutBook>
      <Video></Video>

    </main>
  )
}

export default App
