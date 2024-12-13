import "../../styles/footer/footer.scss";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="py-3">
      <div className="container">
        {/* Struttura flexibile per mobile e desktop */}
        <div className="d-flex flex-column flex-md-row align-items-center justify-content-between">
          {/* Sezione Copyright */}
          <div className="order-2 order-md-1 text-center text-md-start mt-3 mt-md-0">
            <p className="copyright m-0">
              Copyright <i className="fa-regular fa-copyright"></i>
              <span className="strong-word"> Federico Maiocchi's Portfolio</span> 2024
            </p>
          </div>
          {/* Sezione Social */}
          <div className="order-1 order-md-2 text-center text-md-end">
            <ul className="d-flex justify-content-center justify-content-md-end gap-3 p-0 m-0">
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
              {/* contact */}
              <li>
                <Link to="/contact">
                  <i className="icon-social fa-solid fa-square-envelope"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
