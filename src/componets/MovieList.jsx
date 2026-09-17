import MovieCard from "./MovieCard";

const MovieList = () => {
  const movies = [
    {
      title: "Stranger Things",
      poster:
        "https://image.tmdb.org/t/p/w500/49WJfeN0moxb9IPfGn8AIqMGskD.jpg",
    },
    {
      title: "Breaking Bad",
      poster:
        "https://image.tmdb.org/t/p/w500/ztkUQFLlC2s6pC8vJ6r4Nq7aQ9H.jpg",
    },
    {
      title: "The Last Of Us",
      poster:
        "https://image.tmdb.org/t/p/w500/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg",
    },
    {
      title: "Loki",
      poster:
        "https://image.tmdb.org/t/p/w500/voHUmluYmKyleFkTu3lOXQG702u.jpg",
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
