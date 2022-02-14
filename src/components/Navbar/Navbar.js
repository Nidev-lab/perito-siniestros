import React from 'react';
import './navbar.css';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light container">
    <div className="container-fluid navbar-logo">
    <a className="navbar-brand" href="#">EL GENIO DEL SINIESTRO</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    </div>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item"><a className="nav-link active" aria-current="page" href="#">Inicio</a></li>
        <li className="nav-item"><a className="nav-link active" aria-current="page" href="#">¿Qué hacer ante un choque?</a></li>
        <li className="nav-item"><a className="nav-link active" aria-current="page" href="#">No tengo seguro</a></li>
        <li className="nav-item"><a className="nav-link active" aria-current="page" href="#">Presupuesto</a></li>
      </ul>
    </div>
  </nav>
  );
}

export default Navbar;
