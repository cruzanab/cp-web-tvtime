import Header from "../componets/Header";
import LibaryList from "../componets/LibaryList";

const MyLibrary = () => {

  return (
    <>
      <Header />
      <main className="library">

        <section className="library-header">
          <h1>Minha biblioteca</h1>

          <p>
            Aqui estão os filmes e séries que você já assistiu.
          </p>
        </section>

        <section className="library-content">

          <h2>Assistidos</h2>

          <LibaryList />
        </section>

      </main>
    </>
    )
}

export default MyLibrary
