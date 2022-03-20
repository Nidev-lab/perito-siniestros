import React from 'react';

const ManageSinister = () => {
  return (
    <div className='container'>
      <h2 className='text-center m-4'>Deseo Gestionar un siniestro</h2>
      <htmlFor className='row g-3 needs-validation' noValidate>
        <div>
          <h5>Datos del tercero</h5>
        </div>
        <div className='col-md-5'>
          <label htmlFor='validationCustom01' className='form-label'>Compañia de seguro</label>
          <input type='text' className='form-control' id='validationCustom0' required />
          <div className='valid-feedback'>Completo!</div>
        </div>
        <div className='col-md-5'>
          <label htmlFor='validationCustom01' className='form-label'>Cobertura</label>
          <input type='text' className='form-control' id='validationCustom0' required />
          <div className='valid-feedback'>Completo!</div>
        </div>
        <div className='col-md-5'>
          <label htmlFor='validationCustom01' className='form-label'>Poliza de seguros</label>
          <input type='text' className='form-control' id='validationCustom0' required />
          <div className='valid-feedback'>Completo!</div>
        </div>
        <hr/>
        <div className='col-md-3'>
          <label htmlFor='validationCustom01' className='form-label'>Número de siniestro</label>
          <input type='text' className='form-control' id='validationCustom0' required />
          <div className='valid-feedback'>Completo!</div>
        </div>
        <div className='col-md-3'>
          <label htmlFor='validationCustom01' className='form-label'>Número de denuncia</label>
          <input type='text' className='form-control' id='validationCustom0' required />
          <div className='valid-feedback'>Completo!</div>
        </div>
        <hr/>
        <div className='col-md-5'>
          <label htmlFor='validationCustom01' className='form-label'>Nombre</label>
          <input type='text' className='form-control' id='validationCustom0' required />
          <div className='valid-feedback'>Completo!</div>
        </div>
        <div className='col-md-5'>
          <label htmlFor='validationCustom01' className='form-label'>Apellido</label>
          <input type='text' className='form-control' id='validationCustom0' required />
          <div className='valid-feedback'>Completo!</div>
        </div>
        <div className='col-md-3'>
          <label htmlFor='validationCustom01' className='form-label'>Documento</label>
          <input type='text' className='form-control' id='validationCustom0' required />
          <div className='valid-feedback'>Completo!</div>
        </div>
        <div className='col-md-3'>
          <label htmlFor='validationCustom01' className='form-label'>Domicilio</label>
          <input type='text' className='form-control' id='validationCustom0' required />
          <div className='valid-feedback'>Completo!</div>
        </div>
        <div className='col-md-3'>
          <label htmlFor='validationCustom01' className='form-label'>Telefono de contacto</label>
          <input type='text' className='form-control' id='validationCustom0' required />
          <div className='valid-feedback'>Completo!</div>
        </div>
        <div className='col-md-5'>
          <label htmlFor='validationCustom01' className='form-label'>Marca del auto</label>
          <input type='text' className='form-control' id='validationCustom0' required />
          <div className='valid-feedback'>Completo!</div>
        </div>
        <div className='col-md-5'>
          <label htmlFor='validationCustom01' className='form-label'>Modelo del vehiculo</label>
          <input type='text' className='form-control' id='validationCustom0' required />
          <div className='valid-feedback'>Completo!</div>
        </div>
        <hr/>
        <div>
          <h5>Datos del solicitante</h5>
        </div>
        <div className='col-md-5'>
          <label htmlFor='validationCustom01' className='form-label'>Nombre</label>
          <input type='text' className='form-control' id='validationCustom0' required />
          <div className='valid-feedback'>Completo!</div>
        </div>
        <div className='col-md-5'>
          <label htmlFor='validationCustom01' className='form-label'>Apellido</label>
          <input type='text' className='form-control' id='validationCustom0' required />
          <div className='valid-feedback'>Completo!</div>
        </div>
        <div className='col-md-3'>
          <label htmlFor='validationCustom01' className='form-label'>Documento</label>
          <input type='text' className='form-control' id='validationCustom0' required />
          <div className='valid-feedback'>Completo!</div>
        </div>
        <div className='col-md-3'>
          <label htmlFor='validationCustom01' className='form-label'>Domicilio</label>
          <input type='text' className='form-control' id='validationCustom0' required />
          <div className='valid-feedback'>Completo!</div>
        </div>
        <div className='col-md-3'>
          <label htmlFor='validationCustom01' className='form-label'>Telefono de contacto</label>
          <input type='text' className='form-control' id='validationCustom0' required />
          <div className='valid-feedback'>Completo!</div>
        </div>
        <div className='col-md-5'>
          <label htmlFor='validationCustom01' className='form-label'>Compañia de seguro</label>
          <input type='text' className='form-control' id='validationCustom0' required />
          <div className='valid-feedback'>Completo!</div>
        </div>
        <div className='col-md-5'>
          <label htmlFor='validationCustom01' className='form-label'>Cobertura</label>
          <input type='text' className='form-control' id='validationCustom0' required />
          <div className='valid-feedback'>Completo!</div>
        </div>
        <div className='col-md-5'>
          <label htmlFor='validationCustom01' className='form-label'>Poliza de seguros</label>
          <input type='text' className='form-control' id='validationCustom0' required />
          <div className='valid-feedback'>Completo!</div>
        </div>
        <hr/>
        <div className='col-md-7 me-3'>
          <label htmlFor='validationCustom01' className='form-label'>Cuentanos lo sucedido</label>
          <textarea className='form-control' id='validationCustom0' rows='3' required></textarea>
        </div>
        <div className='col-md-3 ms-3'>
          <label htmlFor='validationCustom01' className='form-label'>Horario de contacto</label>
          <input type='time' className='form-control' id='validationCustom0' disabled />
        </div>
        <div className='col-12 m-3'>
          <button className='btn btn-primary' type='submit'>Submit form</button>
        </div>
      </htmlFor>
    </div>
  );
};

export default ManageSinister;
