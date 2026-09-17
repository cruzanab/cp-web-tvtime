import MovieCard from "./MovieCard";
import posterStrangerThings from "../assets/posterStrangerThings.webp"
import posterBreakingBad from "../assets/posterBreakingBad.webp"
import posterTLOU from "../assets/posterTLOU.webp"
import posterLoki from "../assets/posterLoki.webp"

const MovieList = () => {
  const movies = [
    {
      title: "Stranger Things",
      poster: posterStrangerThings,
    },
    {
      title: "Breaking Bad",
      poster: posterBreakingBad,
    },
    {
      title: "The Last Of Us",
      poster: posterTLOU,
    },
    {
      title: "Loki",
      poster: posterLoki,
    },
  ];

  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <MovieCard poster={movie.poster}
        titulo={movie.title} />
      ))}
    </div>
  )
}

export default MovieList
