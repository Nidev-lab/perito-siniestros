import { React, useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import PropTypes from 'prop-types';
import Alert from '../Alert/Alert';

const FormsContact = ({ title, btnAction }) => {
  const [statusEmail, setStatusEmail] = useState({});
  const form = useRef();

  const handleSubmit = (evt) => {
    evt.preventDefault();

    emailjs.sendForm('service_wod3n1o', 'template_8ki752q', form.current, 'Tiz3khlYsRSA7kxEo')
      .then((result) => {
        if (result.text === 'OK') {
          setStatusEmail({
            msg: 'El mensaje se envió correctamente!',
            type: 'success',
          });
          document.getElementById('reset').reset();
        }
      }, (error) => {
        setStatusEmail({
          error,
          msg: 'Ups...parece que algo salió mal, intenta mas tarde!',
          type: 'danger',
        });
      });
  };

  return (
    <div className="col-md-6">
      <form ref={form} className="p-md-5 mt-md-5" id='reset' onSubmit={ handleSubmit }>
        <h2 className="mb-4 fs-2 display-6">{title}</h2>
        <div className="mb-3">
          <label htmlFor="fullName" className="form-label">Nombre Completo</label>
          <input type="text" className="form-control" name='nombre' id="fullName" placeholder="Ingrese su nombre completo"/>
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Correo Electrónico</label>
          <input type="email" className="form-control" name='email' id="email" placeholder="Ingrese su correo electrónico"/>
        </div>
        <div className="row justify-content-between">
          <div className="mb-3">
            <label htmlFor="tel" className="form-label">Teléfono</label>
            <input type="text" className="form-control" id="tel" name='telefono' placeholder="Ingrese su número de teléfono"/>
          </div>
          <div className="mb-3">
            <label htmlFor="time" className="form-label">Horario de contacto</label>
            <input type="text" className="form-control" id="time" name='fecha' value="Lun. a Vie. 9hs-18hs y Sab. 9hs-12hs" disabled/>
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="consult" className="form-label">Consulta</label>
          <textarea className="form-control" id="consult" name='mensaje' rows="3" placeholder="Ingrese su consulta"></textarea>
        </div>
        <div className="text-lg-end text-sm-center">
          <button type="submit" className="btn btn-primary px-4">{btnAction}</button>
        </div>
      </form>
      {
        statusEmail.type === 'success'
          && <Alert type={statusEmail.type} msg={statusEmail.msg}/>
      }
    </div>
  );
};

FormsContact.propTypes = {
  btnAction: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default FormsContact;
