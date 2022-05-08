import React from "react";

/**
 * Contiene el footer de la página
 *
 * @version 1.0.0
 * @author Lorena Castro <Lcastro0398@gmail.com>
 * @since 1.0.0
 */
const Footer = () => (
  <div>
    <footer className="text-center text-white">
      <div className="container pt-4">
        <section className="mb-4">
          <a
            className="btn btn-link btn-floating btn-lg text-dark m-1"
            href="https://www.linkedin.com/in/alorenacastro/"
            role="button"
            data-mdb-ripple-color="dark"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            className="btn btn-link btn-floating btn-lg text-dark m-1"
            href="https://github.com/Lcastro98"
            role="button"
            data-mdb-ripple-color="dark"
          >
            <i className="fab fa-github"></i>
          </a>
        </section>
      </div>
      <div className="text-center text-dark p-3">
        © 2022 Copyright: Lorena Castro
      </div>
    </footer>
  </div>
);

export default Footer;
