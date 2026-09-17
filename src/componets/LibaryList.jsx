import LibraryCard from "./LibraryCard";
import posterInterstelar from "../assets/posterInterstelar.webp"
import posterOppenheimer from "../assets/posterOppenheimer.webp"
import posterDuna from "../assets/posterDuna.webp"
import posterBatman from "../assets/posterBatman.webp"

const LibaryList = () => {
    const movies = [
        {
            title: "Interestelar",
            poster: posterInterstelar,
            rating: 5,
        },
        {
            title: "Oppenheimer",
            poster: posterOppenheimer,
            rating: 4,
        },
        {
            title: "Duna",
            poster: posterDuna,
            rating: 5,
        },
        {
            title: "The Batman",
            poster: posterBatman,
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
