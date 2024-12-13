import "../../styles/pagesStyle/contact.scss";

function Contact() {
  return (
    <section className="bg-contact">
      <div className="container">
        <div className="d-block d-md-flex justify-end align-items-center pt-5 ">
          <div className="card-contact col-6 ">
            <div className="d-flex flex-column gap-4">
              <h1 className="pages-title text-light glow-title ">CONTATTAMI</h1>

              {/* cv */}
              <div className="mb-3">
                <a
                  href={`${import.meta.env.BASE_URL}cv.pdf`}
                  download="CV-Federico-Maiocchi"
                  className="btn btn-cv"
                >
                  <i className="fa-solid fa-download me-3"></i>
                  Scarica CV
                </a>
              </div>

              {/* mail */}
              <div className="item-card-contact">
                <h3 className="item-title mb-3">MAIL</h3>
                <div className="bg-mail">
                  <a
                    href="mailto:maiocchifederico@gmail.com"
                    className="item-link"
                  >
                    maiocchifederico@gmail.com
                  </a>
                </div>
              </div>

              {/* social */}
              <div className="item-card-contact">
                <h3 className="item-title-social mb-3">SOCIAL</h3>
                <ul className="social flex gap-5">
                  {/* linkedin */}
                  <li>
                    <a
                      className="item-link"
                      href="https://www.linkedin.com/in/federico-maiocchi/"
                    >
                      <i className="icon-social fa-brands fa-linkedin"></i>
                    </a>
                  </li>

                  {/* github */}
                  <li>
                    <a
                      className="item-link"
                      href="https://github.com/Federico-Maiocchi"
                    >
                      <i className="icon-social fa-brands fa-square-github"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
