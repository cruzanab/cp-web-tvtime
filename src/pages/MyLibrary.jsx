import React from 'react'

const MyLibrary = () => {
  const movies = [
    {
      title: "Interestelar",
      poster:
        "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
      rating: 5,
    },
    {
      title: "Oppenheimer",
      poster:
        "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
      rating: 4,
    },
    {
      title: "Duna",
      poster:
        "https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg",
      rating: 5,
    },
    {
      title: "The Batman",
      poster:
        "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg",
      rating: 4,
    },
  ];

  return (
    <main className="library">

      <section className="library-header">
        <h1>Minha biblioteca</h1>

        <p>
          Aqui estão os filmes e séries que você já assistiu.
        </p>
      </section>

      <section className="library-content">

        <h2>Assistidos</h2>

        <div className="library-grid">

          {movies.map((movie) => (
            <div className="library-card" key={movie.title}>

              <img
                src={movie.poster}
                alt={movie.title}
              />

              <h3>{movie.title}</h3>

              <p className="movie-rating">
                Minha nota: {"★".repeat(movie.rating)}
                {"☆".repeat(5 - movie.rating)}
              </p>

            </div>
          ))}

        </div>

      </section>

    </main>)
}

export default MyLibrary
