import React from 'react';

const FreeRepair = () => {
  return (
    <div className="container">
      <h2 className="m-md-5 fs-1 display-6 text-center">Deseo Reparar mi auto sin costo</h2>
      <div className="row">
        <div className="col-sm-12 col-md-6 p-lg-5 border-end">
          <div className='my-4'>
            <h5>Condiciones</h5>
            <div>
              <p>Para que podamos reparar tu vehículo el tercero (quien te chocó),
                tiene que cumplir con lo siguiente:</p>
              <ul>
                <li>Haber realizado la denuncia administrativa en su seguro.</li>
                <li>Contar con cobertura al momento del siniestro.</li>
                <li>Ser el responsable del accidente.</li>
              </ul>
            </div>
          </div>
          <div className='my-4'>
            <h5>Documentacion necesaria:</h5>
            <ul>
              <li>Copia de Cédula Verde y Registro de conducir.</li>
              <li>Copia de DNI del titular.</li>
              <li>Denuncia Administrativa en tu seguro.</li>
              <li>Certificado de cobertura a la fecha del siniestro emitido por tu seguro.</li>
              <li>Fotos de los daños (una que se vea la patente).</li>
            </ul>
          </div>
          <div className='my-4'>
            <p className='my-5'>¿Sabías que podés vender tu auto chocado?</p>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 p-md-5">
          <h2 className="mb-4 fs-2 display-6">Solicitar reparación</h2>
          <div className="col-12 mb-3">
            <label htmlFor="fullName" className="form-label">Nombre Completo</label>
            <input type="text" className="form-control" id="fullName" placeholder="Ingrese su nombre completo" />
          </div>
          <div className="col-12 mb-3">
            <label htmlFor="email" className="form-label">Correo Electrónico</label>
            <input type="email" className="form-control" id="email" placeholder="Ingrese su correo electrónico" />
          </div>
          <div className="row justify-content-between">
            <div className="col-12 col-lg-6 mb-3">
              <label htmlFor="tel" className="form-label">Teléfono</label>
              <input type="tel" className="form-control" id="tel" placeholder="Ingrese su número de teléfono" />
            </div>
            <div className="col-md-8 col-lg-9 mb-3">
              <label htmlFor="time" className="form-label">Horario de contacto</label>
              <input type="text" className="form-control text-center" id="time" value="Lun. a Vie. 09hs-18s y Sab. 9hs-12hs" placeholder="Ingrese su número de teléfono" disabled />
            </div>
          </div>
          <div className="col-12 mb-3">
            <label htmlFor="consult" className="form-label">Consulta</label>
            <textarea className="form-control" id="consult" rows="3" placeholder="Ingrese su consulta"></textarea>
          </div>
          <div className="text-lg-end text-sm-center">
            <button type="button" className="btn btn-primary px-4">Solicitar reparación</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreeRepair;
