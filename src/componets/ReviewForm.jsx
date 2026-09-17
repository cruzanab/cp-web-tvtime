import { useState } from "react";

const ReviewForm = () => {
    const [rating, setRating] = useState(0);
    const [opinion, setOpinion] = useState("");

    const handleSubmit = () => {
        alert("Avaliação salva!");
    };
    
  return (
      <section className="review-form">

          <h2>Interestelar</h2>

          <div className="review-movie">

              <img
                  src="https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg"
                  alt="Interestelar"
              />

              <div className="review-content">

                  <h3>Minha nota</h3>

                  <div className="stars">

                      {[1, 2, 3, 4, 5].map((star) => (
                          <button
                              key={star}
                              onClick={() => setRating(star)}
                          >
                              {star <= rating ? "★" : "☆"}
                          </button>
                      ))}

                  </div>

                  <h3>Minha opinião</h3>

                  <textarea
                      placeholder="Escreva o que você achou..."
                      value={opinion}
                      onChange={(event) => setOpinion(event.target.value)}
                  />

                  <button
                      className="save-button"
                      onClick={handleSubmit}
                  >
                      Salvar avaliação
                  </button>

              </div>

          </div>

      </section>
  )
}

export default ReviewForm
