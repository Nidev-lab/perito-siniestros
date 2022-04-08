import React from 'react';
import { Forms } from '../Forms';

const Budget = () => {
  return (
    <div className="container d-md-flex">
      <div className="col-md-6 mt-5 d-lg-flex text-center flex-column border-end">
        <h2 className="m-md-5 card-title fs-1 display-6">MEDIOS DE CONTACTO</h2>
        <div className="d-flex flex-column ms-4">
          <div className="d-lg-flex mt-md-4">
            <p className="ms-lg-5">Correo electrónico:</p>
            <p className="ms-lg-4 fst-italic">perito.agomez@gmail.com</p>
          </div>
          <div className="ps-lg-5 d-sm-flex align-items-center">
            <span className="me-md-5">Redes Sociales:</span>
            <div className="d-flex justify-content-evenly text-center">
              <a href="/#" className="card-link text-decoration-none text-dark">
                <i className="bi bi-facebook me-1 fs-5"></i>
                Facebook
              </a>
              <a href="/#" className="card-link text-decoration-none text-dark">
                <i className="bi bi-instagram me-1 fs-5"></i>
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
      <Forms className="col-md-6" />
    </div>
  );
};

export default Budget;
