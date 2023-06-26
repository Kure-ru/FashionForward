import { Link } from "react-router-dom";
import "../styles/homepage.css";

const Homepage = () => {
  return (
    <>
      <section className="discount_container">
        <h1>JUSQU'À -30% DE REMISE SUPPLÉMENTAIRE SUR LES SOLDES!</h1>
        <p>C'est l'heure des soldes... </p>
        <p>
          Code <strong>FASHION</strong>
        </p>
      </section>
      <div className="image_container">
        <img
          src="assets/hero.jpg"
          alt="femmes à l'extérieur portant des vestes orange et blanches"
        />
        <div className="image_subtitle">
          <Link to={"/shop"}>
            <span>Voir la boutique</span>{" "}
          </Link>
        </div>
      </div>
    </>
  );
};

export default Homepage;
