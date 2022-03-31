import React from 'react';

const Budget = () => {
  return (
    <div className="container d-flex">
        <div className="col-xl-5 col-12 m-5 card">
          <div className="card-title">
            <h2 className="mb-4 ps-2 card-title fs-1 display-6">MEDIOS DE CONTACTO</h2>
          </div>
          <div className="card-body">
              <span className="list-group-item">Correo electrónico: <i>perito.agomez@gmail.com</i></span>
            </div>
            <div className="card-footer">
              <span className="text-center p-3">Redes Sociales</span>
              <a href="/#" className="card-link text-decoration-none text-dark">Facebook</a>
              <a href="/#" className="card-link text-decoration-none text-dark">Instagram</a>
            </div>
          </div>
        <div className="col-xl-4 col-12 m-5">
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
              <input type="time" className="form-control" id="time" placeholder="Ingrese su número de teléfono" />
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="matter" className="form-label">Asunto</label>
          </div>
          <div className="mb-3">
            <label htmlFor="consult" className="form-label">Consulta</label>
            <textarea className="form-control" id="consult" rows="3" placeholder="Ingrese su consulta"></textarea>
          </div>
          <button type="button" className="btn btn-success">Enviar</button>
        </div>
    </div>
  );
};

export default Budget;
