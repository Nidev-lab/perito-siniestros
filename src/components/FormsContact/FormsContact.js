import React from 'react';
import PropTypes from 'prop-types';

const FormsContact = ({ title, btnAction }) => {
  return (
    <div className="col-md-6">
      <div className="p-md-5 mt-md-5">
        <h2 className="mb-4 fs-2 display-6">{title}</h2>
        <div className="mb-3">
          <label htmlFor="fullName" className="form-label">Nombre Completo</label>
          <input type="text" className="form-control" id="fullName" placeholder="Ingrese su nombre completo" />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Correo Electrónico</label>
          <input type="email" className="form-control" id="email" placeholder="Ingrese su correo electrónico" />
        </div>
        <div className="row justify-content-between">
          <div className="mb-3">
            <label htmlFor="tel" className="form-label">Teléfono</label>
            <input type="text" className="form-control" id="tel" placeholder="Ingrese su número de teléfono" />
          </div>
          <div className="mb-3">
            <label htmlFor="time" className="form-label">Horario de contacto</label>
            <input type="text" className="form-control" id="time" value="Lun. a Vie. 9hs-18hs y Sab. 9hs-12hs" disabled />
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="consult" className="form-label">Consulta</label>
          <textarea className="form-control" id="consult" rows="3" placeholder="Ingrese su consulta"></textarea>
        </div>
        <div className="text-lg-end text-sm-center">
          <button type="button" className="btn btn-primary px-4">{btnAction}</button>
        </div>
      </div>
    </div>
  );
};

FormsContact.propTypes = {
  btnAction: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default FormsContact;
