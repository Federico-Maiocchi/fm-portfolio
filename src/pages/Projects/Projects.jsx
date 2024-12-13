import "../../styles/pagesStyle/projects.scss";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CardItem from "../../components/card/CardItem";

function Projects() {
  //progetti
  const projects = useSelector((state) => state.projects.value);
  // console.log(projects)

  //ordinare in modo decrescente
  const sortedProjects = [...projects].sort((a, b) => b.id - a.id);

  return (
    <div className="bg-projects text-light">
      <div className="container">
        <h1 className="pages-title glow-title text-center">PROGETTI</h1>
        <div className="row">
          {sortedProjects.map((project, index) => (
            <div className="col-12 col-md-6 col-lg-4 mb-5" key={project.id}>
              <Link to={`/projects/${project.slug}`} key={project.slug}>
                <CardItem
                  className="my-dynamic-class"
                  style={{
                    animationDelay: `${index * 0.2}s`, // Ritardo crescente basato sull'indice
                  }}
                  title={project.title}
                  image={project.image}
                  isVisited={project.isVisited}
                  description={project.description}
                  technologies={project.technologies}
                ></CardItem>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
