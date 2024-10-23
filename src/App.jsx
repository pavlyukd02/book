import Header from './components/Header';
import bgImg from './assets/bg.png'

function App() {

  return (
    <main
      className="min-h-screen"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <Header></Header>

    </main>
  )
}

export default App
