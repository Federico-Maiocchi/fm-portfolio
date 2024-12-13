import "../../styles/navbar/navbar.scss";
import { NavLink, useNavigate } from "react-router-dom";
import { useRef } from "react";

function Navbar() {
  const offcanvasRef = useRef(null);
  const navigate = useNavigate();

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

  // Funzione per gestire la navigazione tra le rotte
  const handleLinkClick = (route) => {
    navigate(route);

    // Chiudi manualmente l'offcanvas
    if (offcanvasRef.current) {
      const bsOffcanvas = bootstrap.Offcanvas.getInstance(offcanvasRef.current);
      if (bsOffcanvas) {
        bsOffcanvas.hide();
      }
    }
  };

  return (
    <>
      <nav>
        <div className="container-fluid">
          <div className="d-flex justify-content-between align-items-center">
            {/* title site */}
            <div>
              <NavLink to="/" end>
                <h2>Federico Maiocchi</h2>
              </NavLink>
            </div>
            {/* hamburger menu */}
            <div className="d-sm-block d-md-none">
              <div className="hamburger-menu">
                <a
                  data-bs-toggle="offcanvas"
                  href="#offcanvasExample"
                  aria-controls="offcanvasExample"
                >
                  <i className="fa-solid fa-bars"></i>
                </a>
              </div>
            </div>

            {/* lista rotte */}
            <div className="d-none d-md-block">
              <ul className="list-reset d-flex align-items-center gap-4">
                {/* home */}
                <li>
                  <NavLink
                    to="/"
                    end
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    <p>Home</p>
                  </NavLink>
                </li>
                {/* about */}
                <li onClick={scrollToAbout}>
                  <div className="about-nav">
                    <p>About</p>
                  </div>
                </li>
                {/* progetti */}
                <li>
                  <NavLink
                    to="/projects"
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    <p>Progetti</p>
                  </NavLink>
                </li>
                {/* contatti */}
                <li>
                  <NavLink
                    to="/contact"
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    <p>Contattami</p>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      {/* Offcanvas */}
      <div
        className="offcanvas offcanvas-start custom-offcanvas"
        tabIndex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
        ref={offcanvasRef} // Riferimento React
      >
        <div className="offcanvas-header">
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <ul className="list-reset flex-column gap-4">
            {/* home */}
            <li onClick={() => handleLinkClick("/")}>
              <p>Home</p>
            </li>
            {/* progetti */}
            <li onClick={() => handleLinkClick("/projects")}>
              <p>Progetti</p>
            </li>
            {/* contattami */}
            <li onClick={() => handleLinkClick("/contact")}>
              <p>Contattami</p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
