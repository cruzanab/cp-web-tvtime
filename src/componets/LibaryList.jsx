import LibraryCard from "./LibraryCard";

const LibaryList = () => {
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
      <div className="library-grid">
          {movies.map((movie) => (
              <LibraryCard 
              poster={movie.poster} 
              titulo={movie.title} 
              nota={movie.rating}/>
            ))}
    </div>
  )
}

export default LibaryList
