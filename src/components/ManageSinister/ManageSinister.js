import React from 'react';

const ManageSinister = () => {
  return (
    <div className='container'>
      <h2 className='text-center m-4'>Deseo Gestionar un siniestro</h2>
      <form className='row g-3 needs-validation' noValidate>
        <div>
          <h5>Datos del tercero</h5>
        </div>
        <div className='col-md-5'>
          <label htmlFor='validacionCia' className='form-label'>Compañia de seguro</label>
          <input type='text' className='form-control' id='validationCia' required />
          <div className='valid-feedback'>Completo!</div>
        </div>
        <div className='col-md-5'>
          <label htmlFor='validacionCobertura' className='form-label'>Cobertura</label>
          <input type='text' className='form-control' id='validationCobertura' required />
          <div className='valid-feedback'>Completo!</div>
        </div>
        <div className='col-md-5'>
          <label htmlFor='validacionPoliza' className='form-label'>Poliza de seguros</label>
          <input type='text' className='form-control' id='validacionPoliza' required />
          <div className='valid-feedback'>Completo!</div>
        </div>
        <hr/>
        <div className='col-md-3'>
          <label htmlFor='validacionSiniestro' className='form-label'>Número de siniestro</label>
          <input type='text' className='form-control' id='validacionSiniestro' required />
          <div className='valid-feedback'>Completo!</div>
        </div>
        <div className='col-md-3'>
          <label htmlFor='validationCustom01' className='form-label'>Número de denuncia</label>
          <input type='text' className='form-control' id='validacionSiniestro' required />
          <div className='valid-feedback'>Completo!</div>
        </div>
        <hr/>
        <div className='col-md-5'>
          <label htmlFor='validacionNombre' className='form-label'>Nombre</label>
          <input type='text' className='form-control' id='validacionNombre' required />
          <div className='valid-feedback'>Completo!</div>
        </div>
        <div className='col-md-5'>
          <label htmlFor='validacionNombre' className='form-label'>Apellido</label>
          <input type='text' className='form-control' id='validacionNombre' required />
          <div className='valid-feedback'>Completo!</div>
        </div>
        <div className='col-md-3'>
          <label htmlFor='validacionDoc' className='form-label'>Documento</label>
          <input type='text' className='form-control' id='validacionDoc' required />
          <div className='valid-feedback'>Completo!</div>
        </div>
        <div className='col-md-3'>
          <label htmlFor='validacionDom' className='form-label'>Domicilio</label>
          <input type='text' className='form-control' id='validacionDom' required />
          <div className='valid-feedback'>Completo!</div>
        </div>
        <div className='col-md-3'>
          <label htmlFor='validacionTelefono' className='form-label'>Telefono de contacto</label>
          <input type='text' className='form-control' id='validacionTelefono' required />
          <div className='valid-feedback'>Completo!</div>
        </div>
        <div className='col-md-5'>
          <label htmlFor='validacionMarca' className='form-label'>Marca del auto</label>
          <input type='text' className='form-control' id='validacionMarca' required />
          <div className='valid-feedback'>Completo!</div>
        </div>
        <div className='col-md-5'>
          <label htmlFor='validacionModelo' className='form-label'>Modelo del vehiculo</label>
          <input type='text' className='form-control' id='validacionModelo' required />
          <div className='valid-feedback'>Completo!</div>
        </div>
        <hr/>
        <div>
          <h5>Datos del solicitante</h5>
        </div>
        <div className='col-md-5'>
          <label htmlFor='validacionNombre' className='form-label'>Nombre</label>
          <input type='text' className='form-control' id='validacionNombre' required />
          <div className='valid-feedback'>Completo!</div>
        </div>
        <div className='col-md-5'>
          <label htmlFor='validacionNombre' className='form-label'>Apellido</label>
          <input type='text' className='form-control' id='validacionNombre' required />
          <div className='valid-feedback'>Completo!</div>
        </div>
        <div className='col-md-3'>
          <label htmlFor='validacionDoc' className='form-label'>Documento</label>
          <input type='text' className='form-control' id='validacionDoc' required />
          <div className='valid-feedback'>Completo!</div>
        </div>
        <div className='col-md-3'>
          <label htmlFor='validacionDom' className='form-label'>Domicilio</label>
          <input type='text' className='form-control' id='validacionDom' required />
          <div className='valid-feedback'>Completo!</div>
        </div>
        <div className='col-md-3'>
          <label htmlFor='validacionTelefono' className='form-label'>Telefono de contacto</label>
          <input type='text' className='form-control' id='validacionTelefono' required />
          <div className='valid-feedback'>Completo!</div>
        </div>
        <div className='col-md-5'>
          <label htmlFor='validacionCia' className='form-label'>Compañia de seguro</label>
          <input type='text' className='form-control' id='validacionCia' required />
          <div className='valid-feedback'>Completo!</div>
        </div>
        <div className='col-md-5'>
          <label htmlFor='validacionCobertura' className='form-label'>Cobertura</label>
          <input type='text' className='form-control' id='validacionCobertura' required />
          <div className='valid-feedback'>Completo!</div>
        </div>
        <div className='col-md-5'>
          <label htmlFor='validacionPoliza' className='form-label'>Poliza de seguros</label>
          <input type='text' className='form-control' id='validacionPoliza' required />
          <div className='valid-feedback'>Completo!</div>
        </div>
        <hr/>
        <div className='col-md-7 me-3'>
          <label htmlFor='validacionComentario' className='form-label'>Cuentanos lo sucedido</label>
          <textarea className='form-control' id='validacionComentario' rows='3' required></textarea>
        </div>
        <div className='col-md-3 ms-3'>
          <label className='form-label'>Horario de contacto</label>
          <input type='time' className='form-control' disabled />
        </div>
        <div className='col-12 m-3'>
          <button className='btn btn-primary' type='submit'>Submit form</button>
        </div>
      </form>
    </div>
  );
};

export default ManageSinister;
