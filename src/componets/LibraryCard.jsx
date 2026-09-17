import React from 'react'

const LibraryCard = ({titulo, poster, nota}) => {
  return (
      <div className="library-card">

          <img
              src={poster}
              alt={titulo}
          />

          <h3>{titulo}</h3>

          <p className="movie-rating">
              Minha nota: {"★".repeat(nota)}
              {"☆".repeat(5 - nota)}
          </p>
      </div>
  )
}

export default LibraryCard
