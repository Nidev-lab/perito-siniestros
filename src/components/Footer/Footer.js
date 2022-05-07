import React from 'react';
import './footer.css';
import logo from '../../assets/img/logo.png';

const Footer = () => {
  return (
    <footer className="navbar-styles box-footer">
      <div className="text-center box-info">
        <span>Ante cualquier eventualidad no dudes en contactarnos. También nos
            encontrás en redes sociales</span>
      </div>
      <div className="d-md-flex align-items-center justify-content-around my-2 text-center">
        <div className="text-sm-center my-sm-2">
          <img src={logo} alt="logoFooter" width="200" />
        </div>
        <div className="d-sm-flex justify-content-center flex-column mt-3">
          <span className="text-center fw-bold">Redes Sociales</span>
          <div className="d-sm-flex justify-content-center m-sm-3 text-center box-social-icons">
            <a href="/#">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="/#">
              <i className="bi bi-instagram"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="container d-md-flex justify-content-between text-center box-info">
        <p className="fw-bold">Todos los derechos reservados © 2022 El Genio Del Siniestro</p>
        <p>
          Desarrollado por
          <a href="www.lagerdevs.com" className="card-link text-decoration-none text-dark fw-bold"> LagerDevs</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
