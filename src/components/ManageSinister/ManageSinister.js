import React from 'react';

const ManageSinister = () => {
  return (
    <div className='container'>
      <h2 className='m-md-5 fs-1 display-6 text-center'>Deseo Gestionar un siniestro</h2>
      <form className='row g-3 needs-validation' noValidate>
        <div>
          <h5>Datos del tercero</h5>
        </div>
        <div className='col-md-5'>
          <label htmlFor='cia-tercero' className='form-label'>Compañia de seguro</label>
          <input type='text' className='form-control' id='cia-tercero' required />
          <div className='valid-feedback'>Completo!</div>
        </div>
        <div className='col-md-5'>
          <label htmlFor='cobertura-tercero' className='form-label'>Cobertura</label>
          <input type='text' className='form-control' id='cobertura-tercero' required />
          <div className='valid-feedback'>Completo!</div>
        </div>
        <div className='col-md-5'>
          <label htmlFor='poliza-tercero' className='form-label'>Poliza de seguros</label>
          <input type='text' className='form-control' id='poliza-tercero' required />
          <div className='valid-feedback'>Completo!</div>
        </div>
        <hr/>
        <div className='col-md-3'>
          <label htmlFor='numero-siniestro' className='form-label'>Número de siniestro</label>
          <input type='text' className='form-control' id='numero-siniestro' required />
          <div className='valid-feedback'>Completo!</div>
        </div>
        <div className='col-md-3'>
          <label htmlFor='numero-denuncia' className='form-label'>Número de denuncia</label>
          <input type='text' className='form-control' id='numero-denuncia' required />
          <div className='valid-feedback'>Completo!</div>
        </div>
        <hr/>
        <div className='col-md-5'>
          <label htmlFor='nombre-tercero' className='form-label'>Nombre</label>
          <input type='text' className='form-control' id='nombre-tercero' required />
          <div className='valid-feedback'>Completo!</div>
        </div>
        <div className='col-md-5'>
          <label htmlFor='apellido-tercero' className='form-label'>Apellido</label>
          <input type='text' className='form-control' id='apellido-tercero' required />
          <div className='valid-feedback'>Completo!</div>
        </div>
        <div className='col-md-3'>
          <label htmlFor='documento-tercero' className='form-label'>Documento</label>
          <input type='text' className='form-control' id='documento-tercero' required />
          <div className='valid-feedback'>Completo!</div>
        </div>
        <div className='col-md-3'>
          <label htmlFor='domicilio-tercero' className='form-label'>Domicilio</label>
          <input type='text' className='form-control' id='domicilio-tercero' required />
          <div className='valid-feedback'>Completo!</div>
        </div>
        <div className='col-md-3'>
          <label htmlFor='telefono-tercero' className='form-label'>Telefono de contacto</label>
          <input type='text' className='form-control' id='telefono-tercero' required />
          <div className='valid-feedback'>Completo!</div>
        </div>
        <div className='col-md-5'>
          <label htmlFor='marca-tercero' className='form-label'>Marca del auto</label>
          <input type='text' className='form-control' id='marca-tercero' required />
          <div className='valid-feedback'>Completo!</div>
        </div>
        <div className='col-md-5'>
          <label htmlFor='modelo-tercero' className='form-label'>Modelo del vehiculo</label>
          <input type='text' className='form-control' id='modelo-tercero' required />
          <div className='valid-feedback'>Completo!</div>
        </div>
        <hr/>
        <div>
          <h5>Datos del solicitante</h5>
        </div>
        <div className='col-md-5'>
          <label htmlFor='nombre-solicitante' className='form-label'>Nombre</label>
          <input type='text' className='form-control' id='nombre-solicitante' required />
          <div className='valid-feedback'>Completo!</div>
        </div>
        <div className='col-md-5'>
          <label htmlFor='apellido-solicitante' className='form-label'>Apellido</label>
          <input type='text' className='form-control' id='apellido-solicitante' required />
          <div className='valid-feedback'>Completo!</div>
        </div>
        <div className='col-md-3'>
          <label htmlFor='documento-solicitante' className='form-label'>Documento</label>
          <input type='text' className='form-control' id='documento-solicitante' required />
          <div className='valid-feedback'>Completo!</div>
        </div>
        <div className='col-md-3'>
          <label htmlFor='domicilio-solicitante' className='form-label'>Domicilio</label>
          <input type='text' className='form-control' id='domicilio-solicitante' required />
          <div className='valid-feedback'>Completo!</div>
        </div>
        <div className='col-md-3'>
          <label htmlFor='telefono-solicitante' className='form-label'>Telefono de contacto</label>
          <input type='text' className='form-control' id='telefono-solicitante' required />
          <div className='valid-feedback'>Completo!</div>
        </div>
        <div className='col-md-5'>
          <label htmlFor='cia-solicitante' className='form-label'>Compañia de seguro</label>
          <input type='text' className='form-control' id='cia-solicitante' required />
          <div className='valid-feedback'>Completo!</div>
        </div>
        <div className='col-md-5'>
          <label htmlFor='cobertura-solicitante' className='form-label'>Cobertura</label>
          <input type='text' className='form-control' id='cobertura-solicitante' required />
          <div className='valid-feedback'>Completo!</div>
        </div>
        <div className='col-md-5'>
          <label htmlFor='poliza-solicitante' className='form-label'>Poliza de seguros</label>
          <input type='text' className='form-control' id='poliza-solicitante' required />
          <div className='valid-feedback'>Completo!</div>
        </div>
        <hr/>
        <div className='col-md-7 me-md-3'>
          <label htmlFor='comentario' className='form-label'>Cuentanos lo sucedido</label>
          <textarea className='form-control' id='comentario' rows='3' required></textarea>
        </div>
        <div className='col-md-4 ms-md-3'>
          <label className='form-label'>Horario de contacto</label>
          <input type='text' className='form-control text-center' value='Lun. a Vie. 9hs-18hs y Sab. 9hs-12hs' disabled />
        </div>
        <div className='col-12 m-md-3'>
          <button className='btn btn-primary' type='submit'>Enviar consulta</button>
        </div>
      </form>
    </div>
  );
};

export default ManageSinister;
