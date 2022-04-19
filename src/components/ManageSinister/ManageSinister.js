import React from 'react';

const ManageSinister = () => {
  return (
    <div className="container">
      <h2 className="text-center m-4">Deseo Gestionar un siniestro</h2>
      <form className="row g-3 needs-validation" noValidate data-aos="zoom-in" data-aos-duration="500">
        <div data-aos="fade-up">
          <h5>Datos del tercero</h5>
        </div>
        <div className="col-md-5" data-aos="fade-up">
          <label htmlFor="cia-tercero" className="form-label">Compañia de seguro</label>
          <input type="text" className="form-control" id="cia-tercero" required />
          <div className="valid-feedback">Completo!</div>
        </div>
        <div className="col-md-5" data-aos="fade-up">
          <label htmlFor="cobertura-tercero" className="form-label">Cobertura</label>
          <input type="text" className="form-control" id="cobertura-tercero" required />
          <div className="valid-feedback">Completo!</div>
        </div>
        <div className="col-md-5" data-aos="fade-up">
          <label htmlFor="poliza-tercero" className="form-label">Poliza de seguros</label>
          <input type="text" className="form-control" id="poliza-tercero" required />
          <div className="valid-feedback">Completo!</div>
        </div>
        <hr/>
        <div className="col-md-3" data-aos="fade-up">
          <label htmlFor="numero-siniestro" className="form-label">Número de siniestro</label>
          <input type="text" className="form-control" id="numero-siniestro" required />
          <div className="valid-feedback">Completo!</div>
        </div>
        <div className="col-md-3" data-aos="fade-up">
          <label htmlFor="numero-denuncia" className="form-label">Número de denuncia</label>
          <input type="text" className="form-control" id="numero-denuncia" required />
          <div className="valid-feedback">Completo!</div>
        </div>
        <hr/>
        <div className="col-md-5" data-aos="fade-up">
          <label htmlFor="nombre-tercero" className="form-label">Nombre</label>
          <input type="text" className="form-control" id="nombre-tercero" required />
          <div className="valid-feedback">Completo!</div>
        </div>
        <div className="col-md-5" data-aos="fade-up">
          <label htmlFor="apellido-tercero" className="form-label">Apellido</label>
          <input type="text" className="form-control" id="apellido-tercero" required />
          <div className="valid-feedback">Completo!</div>
        </div>
        <div className="col-md-3" data-aos="fade-up">
          <label htmlFor="documento-tercero" className="form-label">Documento</label>
          <input type="number" className="form-control" id="documento-tercero" required />
          <span id="doc" className="form-text">Ingresar número sin puntos</span>
          <div className="valid-feedback">Completo!</div>
        </div>
        <div className="col-md-3" data-aos="fade-up">
          <label htmlFor="domicilio-tercero" className="form-label">Domicilio</label>
          <input type="text" className="form-control" id="domicilio-tercero" required />
          <div className="valid-feedback">Completo!</div>
        </div>
        <div className="col-md-3" data-aos="fade-up">
          <label htmlFor="telefono-tercero" className="form-label">Telefono de contacto</label>
          <input type="number" className="form-control" id="telefono-tercero" required />
          <span id="tel" className="form-text">Con código de área sin el 0 ni el 15. Ej: 3816666666</span>
          <div className="valid-feedback">Completo!</div>
        </div>
        <div className="col-md-5" data-aos="fade-up">
          <label htmlFor="marca-tercero" className="form-label">Marca del auto</label>
          <input type="text" className="form-control" id="marca-tercero" required />
          <div className="valid-feedback">Completo!</div>
        </div>
        <div className="col-md-5" data-aos="fade-up">
          <label htmlFor="modelo-tercero" className="form-label">Modelo del vehiculo</label>
          <input type="text" className="form-control" id="modelo-tercero" required />
          <div className="valid-feedback">Completo!</div>
        </div>
        <hr/>
        <div data-aos="fade-up">
          <h5>Datos del solicitante</h5>
        </div>
        <div className="col-md-5" data-aos="fade-up">
          <label htmlFor="nombre-solicitante" className="form-label">Nombre</label>
          <input type="text" className="form-control" id="nombre-solicitante" required />
          <div className="valid-feedback">Completo!</div>
        </div>
        <div className="col-md-5" data-aos="fade-up">
          <label htmlFor="apellido-solicitante" className="form-label">Apellido</label>
          <input type="text" className="form-control" id="apellido-solicitante" required />
          <div className="valid-feedback">Completo!</div>
        </div>
        <div className="col-md-3" data-aos="fade-up">
          <label htmlFor="documento-solicitante" className="form-label">Documento</label>
          <input type="number" className="form-control" id="documento-solicitante" required />
          <span id="doc" className="form-text">Ingresar número sin puntos</span>
          <div className="valid-feedback">Completo!</div>
        </div>
        <div className="col-md-3" data-aos="fade-up">
          <label htmlFor="domicilio-solicitante" className="form-label">Domicilio</label>
          <input type="text" className="form-control" id="domicilio-solicitante" required />
          <div className="valid-feedback">Completo!</div>
        </div>
        <div className="col-md-3" data-aos="fade-up">
          <label htmlFor="telefono-solicitante" className="form-label">Telefono de contacto</label>
          <input type="number" className="form-control" id="telefono-solicitante" required />
          <span id="tel" className="form-text">Con código de área sin el 0 ni el 15. Ej: 3816666666</span>
          <div className="valid-feedback">Completo!</div>
        </div>
        <div className="col-md-5" data-aos="fade-up">
          <label htmlFor="cia-solicitante" className="form-label">Compañia de seguro</label>
          <input type="text" className="form-control" id="cia-solicitante" required />
          <div className="valid-feedback">Completo!</div>
        </div>
        <div className="col-md-5" data-aos="fade-up">
          <label htmlFor="cobertura-solicitante" className="form-label">Cobertura</label>
          <input type="text" className="form-control" id="cobertura-solicitante" required />
          <div className="valid-feedback">Completo!</div>
        </div>
        <div className="col-md-5" data-aos="fade-up">
          <label htmlFor="poliza-solicitante" className="form-label">Poliza de seguros</label>
          <input type="text" className="form-control" id="poliza-solicitante" required />
          <div className="valid-feedback">Completo!</div>
        </div>
        <hr/>
        <div className="col-md-7 me-3" data-aos="fade-up">
          <label htmlFor="comentario" className="form-label">Cuentanos lo sucedido</label>
          <textarea className="form-control" id="comentario" rows="3" required></textarea>
        </div>
        <div className="col-md-3 ms-3" data-aos="fade-up">
          <label className="form-label">Horario de contacto</label>
          <input type="text" className="form-control" value="Lun. a Vie. 9hs-18hs y Sab. 9hs-12hs" disabled />
        </div>
        <div className="col-12" data-aos="fade-up">
          <button className="btn btn-accept" type="submit">Enviar consulta</button>
        </div>
      </form>
    </div>
  );
};

export default ManageSinister;
