import Header from "../componets/Header";
import ReviewForm from "../componets/ReviewForm";

const Reviews = () => {
  return (
    <>
      <Header />
      <main className="reviews">

        <section className="reviews-header">
          <h1>Minhas avaliações</h1>

          <p>
            Registre sua opinião sobre os filmes e séries que você assistiu.
          </p>
        </section>

        <ReviewForm />

      </main>
    </>
  );
}

export default Reviews
