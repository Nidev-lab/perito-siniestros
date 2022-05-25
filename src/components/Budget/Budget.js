import React from 'react';
import { FormsContact } from '../FormsContact';

const Budget = () => {
  return (
    <div className="container d-md-flex" data-aos="zoom-in" data-aos-duration="500">
      <div className="col-md-6 mt-5 d-lg-flex text-center flex-column border-end">
        <h2 className="m-md-5 card-title fs-1 text-center">MEDIOS DE CONTACTO</h2>
        <div className="d-flex justify-content-center flex-column ms-4">
          <div className="d-lg-flex mt-md-4">
            <p className="ms-lg-5">Correo electrónico:</p>
            <p className="ms-lg-4 fst-italic">info@elgeniodelsiniestro.com</p>
          </div>
          <div className="ps-lg-5 d-sm-flex align-items-center">
            <span className="me-md-5">Redes Sociales:</span>
            <div className="d-flex justify-content-center align-items-center flex-column text-center">
              <a className="text-decoration-none text-dark" target="_blank" rel="noreferrer" href="https://www.facebook.com/El-Genio-del-siniestro-115072344542198/">
                <i className="bi bi-facebook mx-2 fs-5"></i>
                <span>Facebook</span>
              </a>
              <a className="text-decoration-none text-dark" target="_blank" rel="noreferrer" href="https://www.instagram.com/geniodelsiniestro" >
                <i className="bi bi-instagram mx-2 fs-5"></i>
                <span>Instagram</span>
              </a>
              <a className="text-decoration-none text-dark" href="/#">
                <i className="bi bi-whatsapp mx-2 fs-5"></i>
                <span>Whatsapp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <FormsContact className="col-md-6" formTopic='Solicitar presupuesto' title="Solicitar presupuesto" btnAction="Deseo Mi Presupuesto!" />
    </div>
  );
};

export default Budget;
