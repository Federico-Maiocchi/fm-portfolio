import "../../styles/card/card.scss";
import { useState, useEffect } from "react";

function CardItem({
  title,
  description,
  image,
  technologies,
  isVisited,
  style,
  className,
}) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let interval;

    // Se l'immagine è un array con più di un elemento, inizia lo scorrimento automatico
    if (isHovered && Array.isArray(image) && image.length > 1) {
      interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === image.length - 1 ? 0 : prevIndex + 1
        );
      }, 1000); // Cambia l'immagine ogni 1.5 secondi
    }

    // Pulizia: cancella l'intervallo quando l'utente esce dall'hover
    return () => {
      clearInterval(interval);
    };
  }, [isHovered, image]);

  // Funzione per gestire l'hover
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setCurrentImageIndex(0); // Resetta l'indice quando l'hover termina
  };

  // Determina l'immagine da mostrare
  const displayedImage =
    Array.isArray(image) && image.length > 1
      ? image[currentImageIndex]
      : image[0]; // Se c'è una sola immagine, mostra sempre quella

  // Funzione per determinare il colore del badge
  const getBadgeColor = (technology) => {

    switch (technology) {
      case "Html":
        return "#e34f26"; // Arancione
      case "Css":
        return "#2965f1"; // Blu
      case "Javascript":
        return "#e4c419"; // Giallo
      case "Axios":
        return "#2c3e50"; // Grigio scuro
      case "Sass":
        return "#bf4080"; // Rosa
      case "Bootstrap":
        return "#7511f6"; // Viola scuro
      case "Vue.Js":
        return "#3fb17f"; // Verde scuro
      case "React.Js":
        return "#7fcaff"; // Azzurro
      case "Redux":
        return "#764abc"; // Viola scuro (Redux specifico)
      case "Node.Js":
        return "#68a063"; // Verde
      case "Leaflet":
        return "#68a063"; // Verde
      case ".Net":
        return "#4122aa"; // Viola
      case "Asp.MVC":
        return "#4122aa"; // Viola
      case "AdminLTE 3":
        return "#2c3e50"; // Grigio scuro
      case "PHP":
        return "#777bb4"; // Viola bluastro
      case "Laravel":
        return "#ff2d20"; // Rosso acceso
      case "C#":
        return "#4122aa"; // Rosso scuro (C#)
      default:
        return "#888888"; // Grigio
    }
  };

  //Troncare il testo dopo tot caratteri nella descrizione
  const truncateText = (text, maxLength) => {
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  };

  return (
    <>
      <div
        className={`project-card ${className || ""}`} // Usa className o una stringa vuota
        style={style} // Aggiunge style per l'animazione dinamica
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* immagine progetto */}
        <div>
          <img className="img-project" src={displayedImage} alt={title} />
        </div>

        {/* corpo della carta */}
        <div className="project-card-body">
          {/* titolo */}
          <div>
            <h3 className="project-card-title">{title}</h3>
          </div>
          {/* descrizione */}
          <p className="project-card-description text-center">
            {truncateText(description, 250)}
          </p>
          {/* lista tecnologie */}
          <ul className="text-center py-3">
            {technologies.map((technology) => (
              <li
                key={technology}
                className="tech-badge"
                style={{ backgroundColor: getBadgeColor(technology) }} // Colore dinamico per ogni tecnologia
              >
                {technology}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default CardItem;
