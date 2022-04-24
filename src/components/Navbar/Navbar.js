import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import Logo from '../../assets/img/logo.png';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light sticky-top navbar-styles">
      <div className="container-fluid navbar-logo mx-lg-5 col-lg-3 logo-box">
        <Link className="navbar-brand link-img" to="/">
          <img src={Logo} alt="El genio del siniestro" />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
      <div className="collapse navbar-collapse navbar-text" id="navbarContent">
        <span className="fw-bold text-start mx-lg-2 col-lg-3">¿Cual es tu deseo?</span>
        <div className="ms-lg-5 me-auto mb-2 mb-lg-0">
          <ul className="navbar-nav">
            <li className="nav-item p-2">
              <Link className="nav-link active text-center" to="/">Inicio</Link>
            </li>
            <li className="nav-item p-2">
              <Link className="nav-link text-center" to="/siniestro">Gestionar mi siniestro</Link>
            </li>
            <li className="nav-item p-2">
              <Link className="nav-link text-center" to="/reparar">Reparación sin costo</Link>
            </li>
            <li className="nav-item p-2">
              <Link className="nav-link text-center" to="/presupuesto">Presupuesto</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
