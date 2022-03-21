import React from 'react';
import carousel1 from '../../assets/img/carousel-1.png';
import carousel2 from '../../assets/img/carousel-2.png';
import carousel3 from '../../assets/img/carousel-3.png';
import logo from '../../assets/img/logo.jpeg';

const Carousel = () => {
  return (
    <div className='hero-container'>
      <div id='carousel-controls' className='carousel slide carousel-height' data-bs-ride='carousel'>
        <div className='carousel-inner'>
          <div className='carousel-item active'>
            <img src={carousel1} className='d-block w-100' alt='image' />
          </div>
          <div className='carousel-item'>
            <img src={carousel2} className='d-block w-100' alt='image' />
          </div>
          <div className='carousel-item'>
            <img src={carousel3} className='d-block w-100' alt='image' />
          </div>
        </div>
        <button className='carousel-control-prev' type='button' data-bs-target='#carousel-controls' data-bs-slide='prev'>
          <span className='carousel-control-prev-icon' aria-hidden='true'></span>
          <span className='visually-hidden'>Previous</span>
        </button>
        <button className='carousel-control-next' type='button' data-bs-target='#carousel-controls' data-bs-slide='next'>
          <span className='carousel-control-next-icon' aria-hidden='true'></span>
          <span className='visually-hidden'>Next</span>
        </button>
      </div>
      <div className='d-flex container flex-wrap mt-4'>
        <div className='col-md-6 d-flex flex-column align-items-center'>
          <img src={logo} width='90' />
          <div className='d-flex flex-column align-items-center'>
            <span className='fw-normal p-3 text-center'>Un accidente de tránsito es siempre una experiencia difícil. A veces, el miedo y el estrés nos impiden reaccionar adecuadamente. Por ese motivo, es muy importante saber de antemano, qué pasos debemos seguir.</span>
            <span className='fw-normal p-3 text-center'>Hacer lo adecuado nos ayuda a resolver más fácil la situación</span>
          </div>
        </div>
        <div className='col-md-6 ps-5'>
          <span className='fw-normal'>En primer lugar, tomate unos segundos para recuperar la calma, comprobá que los pasajeros de tu auto no tengan lesiones. Si todos se encuentran bien, seguí estos pasos:</span>
          <ul>
            <li className='fw-normal'>Apagá el motor y encendé las balizas.</li>
            <li className='fw-normal'>Corrobora que los pasajeros del otro vehículo se encentren bien. En el caso de ser necesario comunicate con urgencias y/o policía.</li>
            <li className='fw-normal'>Tene a mano, carnet de manejo, documentos del vehículo, DNI y Poliza de tu seguro o bien tarjeta de circulacion.(Pedí lo mismo al otro conductor). Toma fotos del siniestro.</li>
            <li className='fw-normal'>Toma nota de: Hora, fecha, lugar de ocurrencia, sentido de circulación de los vehículos. Datos del conductor en el coso de no ser el titular.</li>
            <li className='fw-normal'>Una vez en tu domicilio realiza la denuncia al 0800 de tu compañía. Recorda que tenes 48 hs para realizarla.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
