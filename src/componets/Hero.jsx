import bannerInterstelar from "../assets/bannerInterstelar.webp"

const Hero = () => {
    return (
        <section
            className="hero"
            style={{ backgroundImage: `url(${bannerInterstelar})` }}
        >
            <div className="hero-content">

                <p className="hero-type">FILME</p>

                <h1>Interestelar</h1>

                <p className="hero-description">
                    Em um futuro próximo, a Terra enfrenta uma crise ambiental
                    sem precedentes. Um grupo de exploradores viaja através de
                    um buraco de minhoca em busca de um novo lar para a humanidade.
                </p>

                <div className="hero-buttons">
                    <button className="button-primary">
                        ▶ Assistir
                    </button>

                    <button className="button-secondary">
                        + Minha lista
                    </button>
                </div>

            </div>
        </section>
    )
}

export default Hero
