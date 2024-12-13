import "../../styles/pagesStyle/project.scss";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";

function Project() {
  // const { projectID } = useParams();
  // Trova il progetto corrispondente ID
  // const project = useSelector((state) =>
  //   state.projects.value.find((project) => project.id == projectID.toString())
  // );

  
  const { slug } = useParams();
  const navigate = useNavigate();
  
  // Trova il progetto corrispondente slug
  const project = useSelector((state) =>
    state.projects.value.find((project) => project.slug === slug)
  );

  // Tecnologie progetto
  const technologies = project.technologies;
  // console.log(technologies);

  // Stato per l'indice dell'immagine attuale
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Funzione per tornare indietro
  const handleGoBack = () => {
    navigate(-1);
  };

  // Funzione per passare all'immagine successiva
  const handleNextImage = () => {
    if (Array.isArray(project.image) && project.image.length > 1) {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === project.image.length - 1 ? 0 : prevIndex + 1
      );
    }
  };
  // Funzione per passare all'immagine precedente
  const handlePrevImage = () => {
    if (Array.isArray(project.image) && project.image.length > 1) {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? project.image.length - 1 : prevIndex - 1
      );
    }
  };
  // Determina l'immagine da mostrare
  const displayedImage = Array.isArray(project.image)
    ? project.image[currentImageIndex]
    : project.image;

  // Funzione per determinare il colore del badge
  const getBadgeColor = (technology) => {
    // console.log(technology);
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

  return (
    <>
      <section className="bg-project py-4">
        <div className="container">
          <button onClick={handleGoBack} className="btn btn-standard">
            <i className="fa-solid fa-chevron-left me-3"></i>Lista Progetti
          </button>

          <div className="project-container">
            <div className="project-header">
              <h1 className="project-title mb-5">{project.title}</h1>
            </div>
            <div className="project-body d-block d-md-flex flex-column gap-3">
              {/* mobile */}
              <div className="d-block d-md-none col-12">
                <div className="carousel-container mb-5">
                  {/* Immagine visualizzata */}
                  <figure>
                    <img
                      src={displayedImage}
                      alt={project.title}
                      className="project-image-mobile "
                    />
                  </figure>
                  <div className="d-flex justify-between align-center">
                    {/* Freccia per immagine precedente */}
                    <div>
                      {Array.isArray(project.image) &&
                        project.image.length > 1 && (
                          <button
                            onClick={handlePrevImage}
                            className="carousel-button carousel-button-left"
                          >
                            &#9664;
                          </button>
                        )}
                    </div>
                    {/* Freccia per immagine successiva */}
                    <div>
                      {Array.isArray(project.image) &&
                        project.image.length > 1 && (
                          <button
                            onClick={handleNextImage}
                            className="carousel-button carousel-button-right"
                          >
                            &#9654;
                          </button>
                        )}
                    </div>
                  </div>
                </div>
              </div>
              {/* standard */}
              <div className="d-none d-md-block col-12 mb-5">
                <div className="carousel-container d-block d-md-flex justify-between align-center">
                  {/* Freccia per immagine precedente */}
                  <div>
                    {Array.isArray(project.image) &&
                      project.image.length > 1 && (
                        <button
                          onClick={handlePrevImage}
                          className="carousel-button carousel-button-left"
                        >
                          &#9664;
                        </button>
                      )}
                  </div>

                  {/* Immagine visualizzata */}
                  <figure className="project-image ">
                    <img src={displayedImage} alt={project.title} />
                  </figure>

                  {/* Freccia per immagine successiva */}
                  <div>
                    {Array.isArray(project.image) &&
                      project.image.length > 1 && (
                        <button
                          onClick={handleNextImage}
                          className="carousel-button carousel-button-right"
                        >
                          &#9654;
                        </button>
                      )}
                  </div>
                </div>
              </div>
              <div className="col-12 ">
                <div className="mb-5">
                  <div className="d-block d-md-flex align-items-center">
                    <div className="col-12 col-md-2">
                      <h3 className="project-body-subtitle p-0 m-0">
                        Tecnologie :
                      </h3>
                    </div>
                    <div className="col-12 col-md-10">
                      <ul>
                        {technologies.map((technology) => (
                          <li
                            key={technology}
                            className="tech-badge"
                            style={{
                              backgroundColor: getBadgeColor(technology),
                            }} // Colore dinamico per ogni tecnologia
                          >
                            {technology}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="d-block d-md-flex">
                    <div className="col-12 col-md-2">
                      <h3 className="project-body-subtitle p-0 m-0">
                        Descrizione :
                      </h3>
                    </div>
                    <div className="col-12 col-md-10">
                      <p className="project-description">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Project;
