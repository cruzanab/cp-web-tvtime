import React from 'react'

const MovieCard = ({titulo, poster}) => {
  return (
    <div className="movie-card">
      <img
        src={poster}
        alt={titulo}
      />
      <p>{titulo}</p>
    </div>
  )
}

export default MovieCard
