import React from 'react';
import { FormsContact } from '../FormsContact';

const FreeRepair = () => {
  return (
    <div className="container d-md-flex" data-aos="zoom-in" data-aos-duration="500">
      <div className="col-md-6 mt-5 border-end">
        <h2 className="m-md-5 card-title fs-1 text-center">Deseo Reparar mi auto sin costo</h2>
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
      <FormsContact className="col-md-6" title="Solicitar reparación sin costo" btnAction="Deseo Mi Reparación!"/>
    </div>
  );
};

export default FreeRepair;
