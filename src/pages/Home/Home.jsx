import "../../styles/pagesStyle/home.scss";
import imgHome from "../../assets/img-hero.jpg";
import imgAbout from "../../assets/code.jpeg";
import imgHobby from "../../assets/guitar.jpg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function Home() {
  const quote =
    "Mi dedico a costruire applicazioni funzionali e coinvolgenti, combinando logica e design. Nel tempo libero, trasformo emozioni in canzoni, perché per me ogni problema ha bisogno di una soluzione...e di una melodia.";
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  const navigate = useNavigate();

  // Funzione per animare il testo
  useEffect(() => {
    if (currentIndex < quote.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + quote[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 35); // Velocità di scrittura in millisecondi
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, quote]);

  // Funzione per scrollare verso la sezione "About"
  const scrollToAbout = () => {
    // Se non siamo nella home, naviga a "/" prima di scrollare
    if (window.location.pathname !== "/") {
      navigate("/"); // Naviga alla home
      setTimeout(() => {
        const aboutSection = document.getElementById("about");
        if (aboutSection) {
          aboutSection.scrollIntoView({ behavior: "smooth" });
        }
      }, 100); // Aspetta un breve istante per garantire il rendering della home
    } else {
      // Se siamo già nella home, scrolla direttamente
      const aboutSection = document.getElementById("about");
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  // Intersection Observer per animazioni su scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          }
        });
      },
      {
        threshold: 0.2, // Trigger quando il 20% della sezione è visibile
      }
    );

    const sections = document.querySelectorAll(".section");
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      // Cleanup observer
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <>
      <div className="home">
        {/* HERO */}
        <section className="hero section">
          <div className="container py-5">
            {/* Sezione immagine e titolo */}
            <div className="d-flex flex-column flex-md-row h-100">
              {/* job title / name / descr */}
              <div className="col-12 mb-3 col-md-8 mb-md-0 col-lg-6 p-0 text-center text-md-start">
                <div className="d-flex flex-column justify-content-around h-100">
                  {/* job title */}
                  <h2 className="title-job mb-5">FULL STACK WEB DEVELOPER</h2>
                  {/* name */}
                  <h1 className="name mb-5 text-center text-md-start">
                    Federico Maiocchi
                  </h1>
                  {/* description */}
                  <div className="d-flex align-items-start gap-2 typing-container">
                    {/* <i className="fa-solid fa-terminal terminal-icon"></i> */}
                    <i className="fa-solid fa-chevron-right terminal-icon"></i>
                    <p className="m-0 p-0 typing-text">
                      {displayedText}
                      <span className="blinking-cursor"></span>
                    </p>
                  </div>
                </div>
              </div>

              {/* social / img hero */}
              <div className="col-12 col-md-8 col-lg-6 p-0">
                <div className="d-block d-md-flex gap-3">
                  {/* list social */}
                  <div className="col-12 col-md-1 mb-5 mb-md-0">
                    <ul className="d-flex justify-content-center flex-md-column gap-3">
                      {/* linkedin */}
                      <li>
                        <a href="https://www.linkedin.com/in/federico-maiocchi/">
                          <i className="icon-social fa-brands fa-linkedin"></i>
                        </a>
                      </li>
                      {/* github */}
                      <li>
                        <a href="https://github.com/Federico-Maiocchi">
                          <i className="icon-social fa-brands fa-square-github"></i>
                        </a>
                      </li>
                      {/* mail */}
                      <li>
                        <Link to="/contact">
                          <i className="icon-social fa-solid fa-square-envelope"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  {/* img hero / cv */}
                  <div className="col-11">
                    {/* img */}
                    <img
                      className="img-home mb-4"
                      src={imgHome}
                      alt="Profile"
                    />
                    {/* cv */}
                    <div className="d-flex justify-content-center">
                      <a
                        href="/public/cv.pdf"
                        download="CV-Federico-Maiocchi"
                        className="btn btn-cv"
                      >
                        <i className="fa-solid fa-download me-3"></i>
                        Scarica CV
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* button route */}
            <div className="d-flex gap-5 mt-5">
              {/* about */}
              <button className="btn btn-standard" onClick={scrollToAbout}>
                <i className="fa-solid fa-chevron-down me-3"></i>About
              </button>
              {/* projects */}
              <Link to="/projects">
                <button className="btn btn-standard">
                  <i className="fa-regular fa-folder-open me-3"></i>Progetti
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section className="about section" id="about">
          <div className="container ">
            <div className="d-block d-md-flex align-items-center justify-content-between gap-5">
              <div className="col-12 col-md-3">
                <img src={imgAbout} alt="" className="img-about mb-5 mb-md-0" />
              </div>
              <div className="col-12 col-md-8">
                <h1 className="text-center text-md-start pages-title glow-title">
                  ABOUT ME
                </h1>

                <p className="desc-about text-center text-md-start mb-5 ">
                  Sono uno sviluppatore web appassionato di creare soluzioni
                  digitali che uniscono estetica, funzionalità e performance.
                  Con una formazione{" "}
                  <span className="strong-word">full-stack</span>, ho imparato a
                  progettare e costruire applicazioni web moderne, da semplici
                  landing page a complessi sistemi back-end. La mia curiosità
                  per la tecnologia mi ha spinto a esplorare sia il{" "}
                  <span className="strong-word">front-end</span> che il{" "}
                  <span className="strong-word">back-end</span>, imparando a
                  utilizzare framework potenti come{" "}
                  <span className="strong-word">React.js</span>,
                  <span className="strong-word"> Vue.js</span>,
                  <span className="strong-word"> Laravel</span>, e
                  <span className="strong-word"> .NET</span>. Ogni progetto che
                  affronto rappresenta una sfida stimolante e un'opportunità per
                  imparare e crescere, sia lavorando in team che da solo.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section className="skills section">
          <div className="container">
            <div className="d-block d-md-flex justify-content-between align-items-center">
              <div className="col-12 col-md-8">
                <h1 className="text-center pages-title glow-title">SKILLS</h1>
                <ul className="dev-skills d-flex flex-wrap justify-content-center flex-md-row mb-5">
                  <li className="dev-skill-item col-5 col-md-3">Html</li>
                  <li className="dev-skill-item col-5 col-md-3">Css</li>
                  <li className="dev-skill-item col-5 col-md-3">JavaScript</li>
                  <li className="dev-skill-item col-5 col-md-3">Bootstrap</li>
                  <li className="dev-skill-item col-5 col-md-3">Sass</li>
                  <li className="dev-skill-item col-5 col-md-3">React/Redux</li>
                  <li className="dev-skill-item col-5 col-md-3">Vue.Js</li>
                  <li className="dev-skill-item col-5 col-md-3">PHP</li>
                  <li className="dev-skill-item col-5 col-md-3">Laravel</li>
                  <li className="dev-skill-item col-5 col-md-3">MySql</li>
                  <li className="dev-skill-item col-5 col-md-3">.NET</li>
                  <li className="dev-skill-item col-5 col-md-3">Asp.MVC</li>
                  <li className="dev-skill-item col-5 col-md-3">MSSQL</li>
                </ul>

                {/* Sezione bottoni */}
                <div>
                  <div className="d-flex justify-content-center gap-5 mb-5">
                    <Link to="/projects">
                      <button className="btn btn-standard">
                        <i className="fa-regular fa-folder-open me-3"></i>
                        Progetti
                      </button>
                    </Link>

                    <Link to="/contact">
                      <button className="btn btn-standard">
                        <i className="fa-solid fa-envelope me-3"></i>Contattami
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* HOBBYS */}
        <section className="hobby section">
          <div className="container">
            <div className="d-block d-md-flex align-items-center justify-content-between gap-5">
              <div className="col-12 col-md-3">
                <img className="img-hobby mb-5 mb-md-0" src={imgHobby} alt="" />
              </div>
              <div className="col-12 col-md-8">
                <h1 className="text-center text-md-start pages-title glow-title">
                  HOBBY
                </h1>
                <p className="desc-hobby text-center text-md-start mb-5">
                  Quando non smanetto con il codice, mi dedico alla{" "}
                  <span className="strong-word">musica</span>: ho imparato a
                  suonare la chitarra come autodidatta e negli ultimi anni mi
                  sono divertito a comporre e cantare le mie canzoni. La
                  <span className="strong-word"> musica</span> è una delle mie
                  più grandi passioni, e credo che la stessa creatività che
                  metto nelle note mi aiuti a trovare soluzioni originali anche
                  nello sviluppo delle app.
                </p>
                <p className="desc-hobby text-center text-md-start">
                  Amante dei <span className="strong-word">videogiochi</span> da
                  sempre, ho sviluppato riflessi pronti, strategie vincenti e
                  una sana dipendenza dal 'livello successivo'. Questa passione
                  mi insegna ogni giorno a pensare fuori dagli schemi e a
                  trovare soluzioni creative... e sì, anche a non mollare mai al
                  primo 'Game Over'.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
