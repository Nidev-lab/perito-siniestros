import { React, useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import Alert from '../Alert/Alert';
import Spinner from '../Spinner/Spinner';

const ManageSinister = () => {
  const [statusEmail, setStatusEmail] = useState({});
  const [statusSpinner, setStatusSpinner] = useState(false);
  const form = useRef();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    emailjs.sendForm(
      process.env.REACT_APP_SERVICES_EMAILJS,
      'template_a7ymbvx',
      form.current,
      process.env.REACT_APP_PUBLIC_KEY_EMAILJS,
    )
      .then((result) => {
        if (result.text === 'OK') {
          setStatusEmail({
            msg: 'El mensaje se envió correctamente!',
            type: 'success',
          });
          setStatusSpinner(false);
          document.getElementById('reset').reset();
        }
      }, (error) => {
        setStatusEmail({
          error,
          msg: 'Ups...parece que algo salió mal, intenta mas tarde!',
          type: 'danger',
        });
        setStatusSpinner(false);
      });
  };

  return (
    <div className="container">
      <h2 className="text-center m-4">Deseo Gestionar un siniestro</h2>
      <form className="row g-3 needs-validation" ref={form} id="reset" data-aos="zoom-in" data-aos-duration="500" onSubmit={ handleSubmit }>
        <div data-aos="fade-up">
          <h5>Datos del tercero</h5>
        </div>
        <div className="col-md-6" data-aos="fade-up">
          <label htmlFor="cia-tercero" className="form-label">Compañia de seguro</label>
          <input type="text" className="form-control" id="cia-tercero" name="cia-tercero" required />
          <div className="valid-feedback">Completo!</div>
        </div>
        <div className="col-md-6" data-aos="fade-up">
          <label htmlFor="cobertura-tercero" className="form-label">Cobertura</label>
          <input type="text" className="form-control" id="cobertura-tercero" name="cobertura-tercero" required />
          <div className="valid-feedback">Completo!</div>
        </div>
        <div className="col-md-12" data-aos="fade-up">
          <label htmlFor="poliza-tercero" className="form-label">Poliza de seguros</label>
          <input type="text" className="form-control" id="poliza-tercero" name="poliza-tercero" required />
          <div className="valid-feedback">Completo!</div>
        </div>
        <hr/>
        <div className="col-md-6" data-aos="fade-up">
          <label htmlFor="numero-siniestro" className="form-label">Número de siniestro</label>
          <input type="text" className="form-control" id="numero-siniestro" name="numero-siniestro" required />
          <div className="valid-feedback">Completo!</div>
        </div>
        <div className="col-md-6" data-aos="fade-up">
          <label htmlFor="numero-denuncia" className="form-label">Número de denuncia</label>
          <input type="text" className="form-control" id="numero-denuncia" name="numero-denuncia" required />
          <div className="valid-feedback">Completo!</div>
        </div>
        <hr/>
        <div className="col-md-6" data-aos="fade-up">
          <label htmlFor="nombre-tercero" className="form-label">Nombre</label>
          <input type="text" className="form-control" id="nombre-tercero" name="nombre-tercero" required />
          <div className="valid-feedback">Completo!</div>
        </div>
        <div className="col-md-6" data-aos="fade-up">
          <label htmlFor="apellido-tercero" className="form-label">Apellido</label>
          <input type="text" className="form-control" id="apellido-tercero" name="apellido-tercero" required />
          <div className="valid-feedback">Completo!</div>
        </div>
        <div className="col-md-4" data-aos="fade-up">
          <label htmlFor="documento-tercero" className="form-label">Documento</label>
          <input type="number" className="form-control" id="documento-tercero" name="documento-tercero" required />
          <span id="doc" className="form-text">Ingresar número sin puntos</span>
          <div className="valid-feedback">Completo!</div>
        </div>
        <div className="col-md-4" data-aos="fade-up">
          <label htmlFor="domicilio-tercero" className="form-label">Domicilio</label>
          <input type="text" className="form-control" id="domicilio-tercero" name="domicilio-tercero" required />
          <div className="valid-feedback">Completo!</div>
        </div>
        <div className="col-md-4" data-aos="fade-up">
          <label htmlFor="telefono-tercero" className="form-label">Telefono de contacto</label>
          <input type="number" className="form-control" id="telefono-tercero" name="telefono-tercero" required />
          <span id="tel" className="form-text">Con código de área sin el 0 ni el 15. Ej: 1131111111</span>
          <div className="valid-feedback">Completo!</div>
        </div>
        <div className="col-md-6" data-aos="fade-up">
          <label htmlFor="marca-tercero" className="form-label">Marca del auto</label>
          <input type="text" className="form-control" id="marca-tercero" name="marca-tercero" required />
          <div className="valid-feedback">Completo!</div>
        </div>
        <div className="col-md-6" data-aos="fade-up">
          <label htmlFor="modelo-tercero" className="form-label">Modelo del vehiculo</label>
          <input type="text" className="form-control" id="modelo-tercero" name="modelo-tercero" required />
          <div className="valid-feedback">Completo!</div>
        </div>
        <hr/>
        <div data-aos="fade-up">
          <h5>Datos del solicitante</h5>
        </div>
        <div className="col-md-6" data-aos="fade-up">
          <label htmlFor="nombre-solicitante" className="form-label">Nombre</label>
          <input type="text" className="form-control" id="nombre-solicitante" name="nombre-solicitante" required />
          <div className="valid-feedback">Completo!</div>
        </div>
        <div className="col-md-6" data-aos="fade-up">
          <label htmlFor="apellido-solicitante" className="form-label">Apellido</label>
          <input type="text" className="form-control" id="apellido-solicitante" name="apellido-solicitante" required />
          <div className="valid-feedback">Completo!</div>
        </div>
        <div className="col-md-4" data-aos="fade-up">
          <label htmlFor="documento-solicitante" className="form-label">Documento</label>
          <input type="number" className="form-control" id="documento-solicitante" name="documento-solicitante" required />
          <span id="doc" className="form-text">Ingresar número sin puntos</span>
          <div className="valid-feedback">Completo!</div>
        </div>
        <div className="col-md-4" data-aos="fade-up">
          <label htmlFor="domicilio-solicitante" className="form-label">Domicilio</label>
          <input type="text" className="form-control" id="domicilio-solicitante" name="domicilio-solicitante" required />
          <div className="valid-feedback">Completo!</div>
        </div>
        <div className="col-md-4" data-aos="fade-up">
          <label htmlFor="telefono-solicitante" className="form-label">Telefono de contacto</label>
          <input type="number" className="form-control" id="telefono-solicitante" name="telefono-solicitante" required />
          <span id="tel" name="tel" className="form-text">Con código de área sin el 0 ni el 15. Ej: 1131111111</span>
          <div className="valid-feedback">Completo!</div>
        </div>
        <div className="col-md-6" data-aos="fade-up">
          <label htmlFor="cia-solicitante" className="form-label">Compañia de seguro</label>
          <input type="text" className="form-control" id="cia-solicitante" name="cia-solicitante" required />
          <div className="valid-feedback">Completo!</div>
        </div>
        <div className="col-md-6" data-aos="fade-up">
          <label htmlFor="cobertura-solicitante" className="form-label">Cobertura</label>
          <input type="text" className="form-control" id="cobertura-solicitante" name="cobertura-solicitante" required />
          <div className="valid-feedback">Completo!</div>
        </div>
        <div className="col-md-12" data-aos="fade-up">
          <label htmlFor="poliza-solicitante" className="form-label">Poliza de seguros</label>
          <input type="text" className="form-control" id="poliza-solicitante" name="poliza-solicitante" required />
          <div className="valid-feedback">Completo!</div>
        </div>
        <hr/>
        <div className="col-md-8" data-aos="fade-up">
          <label htmlFor="comentario" className="form-label">Cuentanos lo sucedido</label>
          <textarea className="form-control" id="comentario" name="comentario" rows="3" required></textarea>
        </div>
        <div className="col-md-4" data-aos="fade-up">
          <label className="form-label">Horario de contacto</label>
          <input type="text" className="form-control" value="Lun. a Vie. 9hs-18hs y Sab. 9hs-12hs" disabled />
        </div>
        <div className="col-12 mb-3" data-aos="fade-up">
          <button className="me-2 btn btn-accept" type="submit" onClick={ () => setStatusSpinner(true) }>Enviar consulta</button>
          {
            statusSpinner && <Spinner />
          }
        </div>
      </form>
      {
        statusEmail.type === 'success'
          && <Alert type={statusEmail.type} msg={statusEmail.msg}/>
      }
      <Alert msg="Información importante: cada caso es analizado por un equipo de peritos, en caso de ser necesario un tipo de gestión especial, nos contactaremos para una entrevista." type="danger"/>
    </div>
  );
};

export default ManageSinister;
