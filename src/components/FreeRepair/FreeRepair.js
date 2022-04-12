import React from 'react';
import { Forms } from '../Forms';

const FreeRepair = () => {
  return (
    <div className="container d-md-flex">
      <div className="col-md-6">
      <h2 className="m-md-5 fs-1 display-6 text-center">Deseo Reparar mi auto sin costo</h2>
        <div className="border-md-end">
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
      </div>
      <Forms className="col-md-6" tittle="Solicitar reparación sin costo" btnAction="Deseo una reparación sin costo!"/>
    </div>
  );
};

export default FreeRepair;
