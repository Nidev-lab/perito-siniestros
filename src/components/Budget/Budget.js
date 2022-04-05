import React from 'react';

const Budget = () => {
  return (
    <div className="container d-md-flex">
      <div className="col-md-6 mt-5 d-flex flex-column border-end">
        <h2 className="m-md-5 card-title fs-1 display-6">MEDIOS DE CONTACTO</h2>
        <div className="d-flex flex-column ms-4">
          <div className="d-lg-flex mt-md-4">
            <p className="ms-lg-5">Correo electrónico:</p>
            <p className="ms-lg-4 fst-italic">perito.agomez@gmail.com</p>
          </div>
          <div className="ps-lg-5 d-sm-flex">
            <span className="me-md-5">Redes Sociales:</span>
            <div className="d-flex text-center">
              <a href="/#" className="card-link text-decoration-none text-dark">
                {/* <i className="fa-brands fa-facebook-square me-1"></i> */}
                <i className="bi bi-facebook me-1 bg-secondary"></i>
                Facebook
              </a>
              <a href="/#" className="card-link text-decoration-none text-dark">
                {/* <i className="fa-brands fa-instagram-square me-1"></i> */}
                <i className="bi bi-instagram bg-secondary"></i>
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-6 p-5 mt-5">
        <h2 className="mb-4 fs-2 display-6">Solicitud de presupuesto</h2>
        <div className="mb-3">
          <label htmlFor="fullName" className="form-label">Nombre Completo</label>
          <input type="text" className="form-control" id="fullName" placeholder="Ingrese su nombre completo" />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Correo Electrónico</label>
          <input type="email" className="form-control" id="email" placeholder="Ingrese su correo electrónico" />
        </div>
        <div className="row justify-content-between">
          <div className="col-lg-6 mb-3">
            <label htmlFor="tel" className="form-label">Teléfono</label>
            <input type="tel" className="form-control" id="tel" placeholder="Ingrese su número de teléfono" />
          </div>
          <div className="col-lg-4 mb-3">
            <label htmlFor="time" className="form-label">Horario de contacto</label>
            <input type="time" className="form-control" id="time" placeholder="Ingrese su número de teléfono" disabled />
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="consult" className="form-label">Consulta</label>
          <textarea className="form-control" id="consult" rows="3" placeholder="Ingrese su consulta"></textarea>
        </div>
        <div className="text-lg-end text-sm-center">
          <button type="button" className="btn btn-primary px-4">Solicitar presupuesto</button>
        </div>
      </div>
    </div>
  );
};

export default Budget;
