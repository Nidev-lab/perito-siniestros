import React from 'react';
import { FormsContact } from '../FormsContact';
import { Card } from '../Card';
import Img1 from '../../assets/Ejemplos/izquierda.png';
import Img2 from '../../assets/Ejemplos/derecho.png';
import Img3 from '../../assets/Ejemplos/frente.png';
import Img4 from '../../assets/Ejemplos/trasera.png';
import Img5 from '../../assets/Ejemplos/interior.png';
import Img6 from '../../assets/Ejemplos/kilometro.png';
import Img7 from '../../assets/Ejemplos/tarjeta.png';

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
          <div className="d-flex flex-wrap">
            <Card info="Foto del auto del lado lateral izquierdo" infoAlt="Lateral izquierdo del auto" image={Img1} />
            <Card info="Foto del auto del lado lateral derecho" infoAlt="Lateral derecho del auto" image={Img2} />
            <Card info="Foto del auto del lado frontal" infoAlt="Lado frontal del auto" image={Img3} />
            <Card info="Foto del auto del lado trasero" infoAlt="Lado trasero del auto" image={Img4} />
            <Card info="Foto del parabrisa desde el interior" infoAlt="Parabrisa desde el interior del auto" image={Img5} />
            <Card info="Foto del cuenta km, con los kilómetros totales" infoAlt="Cuenta km, con los kilometros reales" image={Img6} />
            <Card info="Foto de la cédula Verde o Azul, del lado de los datos del vehículo" infoAlt="Cédula Azul o Verde" image={Img7} />
          </div>
        </div>
        <div className='my-4'>
          <p className='my-5'>¿Sabías que podés vender tu auto chocado?</p>
        </div>
      </div>
      <FormsContact className="col-md-6" formTopic='Reparacion sin costo' title="Solicitar reparación sin costo" btnAction="Deseo Mi Reparación!"/>
    </div>
  );
};

export default FreeRepair;
