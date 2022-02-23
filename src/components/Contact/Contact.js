import React from 'react';

const Contact = () => {
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
          <label htmlFor="fullName" className="form-label">Nombre Completo</label>
          <input type="text" className="form-control" id="fullName" placeholder="Ingrese su nombre completo" />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Correo Electrónico</label>
          <input type="email" className="form-control" id="email" placeholder="Ingrese su correo electrónico" />
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
  );
};

export default Contact;
