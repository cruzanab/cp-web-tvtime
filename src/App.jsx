import './App.css'
import Header from './componets/Header'

function App() {
  return (
    <div>
      <Header />
      <main className="home">
        <section className="hero">
          <div className="hero-content">

            <p className="hero-type">FILME</p>

            <h1>Interestelar</h1>

            <p className="hero-description">
              Em um futuro próximo, a Terra enfrenta uma crise ambiental
              sem precedentes. Um grupo de exploradores viaja através de
              um buraco de minhoca em busca de um novo lar para a humanidade.
            </p>

            <div className="hero-buttons">
              <button className="button-primary">
                ▶ Assistir
              </button>

              <button className="button-secondary">
                + Minha lista
              </button>
            </div>

          </div>
        </section>

        <section className="home-section">
          <h2>Continuar assistindo</h2>

          <div className="movie-list">

            <div className="movie-card">
              <img
                src="https://image.tmdb.org/t/p/w500/49WJfeN0moxb9IPfGn8AIqMGskD.jpg"
                alt="Stranger Things"
              />
              <p>Stranger Things</p>
            </div>

            <div className="movie-card">
              <img
                src="https://image.tmdb.org/t/p/w500/ztkUQFLlC2s6pC8vJ6r4Nq7aQ9H.jpg"
                alt="Breaking Bad"
              />
              <p>Breaking Bad</p>
            </div>

            <div className="movie-card">
              <img
                src="https://image.tmdb.org/t/p/w500/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg"
                alt="The Last of Us"
              />
              <p>The Last of Us</p>
            </div>

            <div className="movie-card">
              <img
                src="https://image.tmdb.org/t/p/w500/voHUmluYmKyleFkTu3lOXQG702u.jpg"
                alt="Loki"
              />
              <p>Loki</p>
            </div>

          </div>
        </section>

        <section className="home-section">
          <h2>Em alta</h2>

          <div className="movie-list">

            <div className="movie-card">
              <img
                src="https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg"
                alt="Duna"
              />
              <p>Duna</p>
            </div>

            <div className="movie-card">
              <img
                src="https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg"
                alt="The Batman"
              />
              <p>The Batman</p>
            </div>

            <div className="movie-card">
              <img
                src="https://image.tmdb.org/t/p/w500/jeGtaMwGxPmQN5xM4ClnwPQcNQz.jpg"
                alt="Top Gun Maverick"
              />
              <p>Top Gun: Maverick</p>
            </div>

            <div className="movie-card">
              <img
                src="https://image.tmdb.org/t/p/w500/4E1B5E7mE4B2t8H2xW9tV9z3b3f.jpg"
                alt="Encanto"
              />
              <p>Encanto</p>
            </div>

          </div>
        </section>

      </main>
    </div>
  )
}

export default App
