import './App.css'
import Header from './componets/Header'
import Hero from './componets/Hero'
import MovieList from './componets/MovieList'

function App() {
  return (
    <div>
      <Header />
      <main className="home">
        <section className="hero">
          <Hero />
        </section>

        <section className="home-section">
          <h2>Continuar assistindo</h2>
          <MovieList />
        </section>

        <section className="home-section">
          <h2>Em alta</h2>

          <MovieList />
        </section>

      </main>
    </div>
  )
}

export default App
