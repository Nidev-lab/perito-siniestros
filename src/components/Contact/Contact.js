import React from 'react';
import './contact.css';

function Contact() {
  return (
    <div className='d-flex justify-content-evenly row m-0'>
      <div className='col-xl-5 col-lg-12'>
        <h2>DATOS DE CONTACTO</h2>
        <div className="card">
          <ul className="list-group list-group-flush p-2">
            <li className="list-group-item">Dirección: </li>
            <li className="list-group-item">Teléfono: (+54) 381 6974855</li>
            <li className="list-group-item">Correo electrónico: <a href="/#">perito.agomez@gmail.com</a></li>
          </ul>
          <span className='d-flex justify-content-center p-3'>Redes Sociales</span>
          <div className="card-body d-flex justify-content-evenly">
            <a href="/#" className="card-link text-decoration-none text-dark">Facebook</a>
            <a href="/#" className="card-link text-decoration-none text-dark">Instagram</a>
          </div>
        </div>
      </div>
      <div className='col-xl-5 col-lg-12'>
        <h2>FORMULARIO DE CONTACTO</h2>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">Nombre</label>
          <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Ingrese su nombre completo" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">Correo Electrónico</label>
          <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Ingrese su correo electrónico" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">Asunto</label>
          <select className="form-select" aria-label="Default select example">
            <option selected>Seleccione el motivo de su consulta</option>
            <option value="1">Presupuesto</option>
            <option value="2">No tengo seguro</option>
            <option value="3">Otras</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">Consulta</label>
          <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Ingrese su consulta'></textarea>
        </div>
        <button type="button" className="btn btn-success">Enviar</button>
      </div>
    </div>
  );
}

export default Contact;
