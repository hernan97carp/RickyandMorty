import Image from "../images/personalImage.jpg";
import { Link } from "react-router-dom";
import "../components/stylesheet/about.css";
const About = () => {
  return (
    <div className="conteinerAbout">
      <div className="conteinerText">
        <p>
          Soy Desarrollador Web Full-Stack, con pasión por el Front-End y los
          estilos. En busca de nuevos desafíos y proyectos para aplicar los
          conocimientos adquiridos y, sobre todo, seguir aprendiendo cada día
          más sobre el mundo IT. Realicé el bootcamp de Soy Henry, con más de
          800 horas, donde además de crear proyectos, pude desarrollar
          habilidades blandas, como la capacidad de adaptación, la motivación, y
          el trabajo en equipo, entre muchas otras. ¡Me gusta mucho el diseño,
          me considero una persona detallista y emprendedora!
        </p>
      </div>

      <div className="personalCard">
        <div className="personalName">
          <h1>Hernan Esquivel</h1>
        </div>
        <div className="conteinerImage">
          <img src={Image} className="personalImage"></img>
        </div>
        <div className="personalDetails">
          <h2>age: 26</h2>
          <h2>country:Argentina</h2>
          <h2>job:Full-Stack Web Developer</h2>
        </div>
        <div className="personalLink">
          <button className="buttonLinks">
            <a
              href="https://www.linkedin.com/in/hernan-esquivel-a1048b247"
              rel="noopener noreferrer"
              target="_blank"
            >
              Linkedin
            </a>
          </button>
          <button className="buttonLinks">
            <a
              href="https://github.com/hernan97carp"
              rel="noopener noreferrer"
              target="_blank"
            >
              GitHub
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};
export default About;
