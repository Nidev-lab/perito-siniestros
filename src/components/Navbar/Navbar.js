import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid navbar-logo col-lg-6">
        <a className="navbar-brand" href="/#">EL GENIO DEL SINIESTRO</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
      <div className="collapse navbar-collapse" id="navbarContent">
        <div className="d-flex flex-column me-auto mb-2 mb-lg-0">
          <span className="fw-light fst-italic text-decoration-underline p-2 text-center">¿Cuál es su deseo?</span>
          <ul className="navbar-nav">
            <li className="nav-item p-2">
              <Link className="nav-link text-center" to='/'>Inicio</Link>
            </li>
            <li className="nav-item p-2">
              <Link className="nav-link text-center" to="/siniestro">Deseo gestionar mi siniestro</Link>
            </li>
            <li className="nav-item p-2"><a className="nav-link text-center" aria-current="page" href="/#reparacion">Reparación sin costo</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
