import React from 'react';
import { Footer } from '../Footer';
import { Navbar } from '../Navbar';

const Budget = () => {
  return (
    <>
    <Navbar />
    <div className='container' id='contacto'>
      <div className='d-flex justify-content-between row m-0 pt-4'>
        <div className='col-xl-5 col-12 p-0'>
          <h2 className='mb-4'>DATOS DE CONTACTO</h2>
          <div className="card">
            <ul className="list-group list-group-flush p-2">
              <li className="list-group-item">Correo electrónico: <a href="/#">perito.agomez@gmail.com</a></li>
            </ul>
            <span className='text-center p-3'>Redes Sociales</span>
            <div className="card-body d-flex justify-content-evenly">
              <a href="/#" className="card-link text-decoration-none text-dark">Facebook</a>
              <a href="/#" className="card-link text-decoration-none text-dark">Instagram</a>
            </div>
          </div>
        </div>
        <div className='col-xl-5 col-12'>
          <h2 className='mb-4'>SOLICITUD DE PRESUPUESTO</h2>
          <div className="mb-3">
            <label htmlFor="fullName" className="form-label">Nombre Completo</label>
            <input type="text" className="form-control" id="fullName" placeholder="Ingrese su nombre completo" />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Correo Electrónico</label>
            <input type="email" className="form-control" id="email" placeholder="Ingrese su correo electrónico" />
          </div>
          <div className='row justify-content-between'>
            <div className='col-lg-6 mb-3'>
              <label htmlFor="tel" className="form-label">Teléfono</label>
              <input type="tel" className="form-control" id="tel" placeholder="Ingrese su número de teléfono" />
            </div>
            <div className='col-lg-4 mb-3'>
              <label htmlFor="time" className="form-label">Horario de contacto</label>
              <input type="time" className="form-control" id="time" placeholder="Ingrese su número de teléfono" />
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="matter" className="form-label">Asunto</label>
            <select className="form-select" aria-label="Default select example" defaultValue={'default'}>
              <option value="default" disabled>Seleccione el motivo de su consulta</option>
              <option value="1">Presupuesto</option>
              <option value="2">No tengo seguro</option>
              <option value="3">Otras</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="consult" className="form-label">Consulta</label>
            <textarea className="form-control" id="consult" rows="3" placeholder='Ingrese su consulta'></textarea>
          </div>
          <button type="button" className="btn btn-success">Enviar</button>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Budget;
