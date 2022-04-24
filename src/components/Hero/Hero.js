import React from 'react';
import carousel1 from '../../assets/img/carousel-1.png';
import carousel2 from '../../assets/img/carousel-2.png';
import carousel3 from '../../assets/img/carousel-3.png';
import logoHero from '../../assets/img/hero.png';
import listItem from '../../assets/img/item.png';
import './hero.css';

const Carousel = () => {
  return (
    <div className="hero-container" data-aos="zoom-in" data-aos-duration="500">
      <div id="carousel-controls" className="carousel slide carousel-height" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={carousel1} className="d-block w-100" alt="image" />
          </div>
          <div className="carousel-item">
            <img src={carousel2} className="d-block w-100" alt="image" />
          </div>
          <div className="carousel-item">
            <img src={carousel3} className="d-block w-100" alt="image" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="carousel-controls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carousel-controls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="d-md-flex justify-content-evenly my-5 box-info-hero">
        <div className="col-md-5 text-center m-4 m-md-0 mt-5 ">
          <div className="d-flex justify-content-center flex-column">
            <p className="fw-normal">Un accidente de tránsito es siempre una experiencia difícil. A veces, el miedo y el estrés nos impiden reaccionar adecuadamente. Por ese motivo, es muy importante saber de antemano, qué pasos debemos seguir.</p>
            <p className="fw-normal"><b>Hacer lo adecuado nos ayuda a resolver más fácil la situación.</b></p>
          </div>
          <img src={logoHero} width='150' />
        </div>
        <div className="col-md-5 m-4 m-md-0 mt-5 box-suggestion">
          <h5>Sugerencias</h5>
            <div className="ms-2 m-1" data-aos="fade-down" data-aos-delay="100">
              <img src={listItem} className="pe-2"/>
              <span className="fw-normal">Comprobá que los pasajeros de tu auto no tengan lesiones.</span>
            </div>
            <div className="ms-2 m-1" data-aos="fade-down" data-aos-delay="200">
              <img src={listItem} className="pe-2"/>
              <span className="fw-normal">Tomate unos segundos para recuperar la calma.</span>
            </div>
            <div className="ms-2 m-1" data-aos="fade-down" data-aos-delay="300">
              <img src={listItem} className="pe-2"/>
              <span className="fw-normal">Apagá el motor y encendé las balizas.</span>
            </div>
            <div className="ms-2 m-1" data-aos="fade-down" data-aos-delay="400">
              <img src={listItem} className="pe-2"/>
              <span className="fw-normal">Corrobora que los pasajeros del otro vehículo se encentren bien. Llamá a emergencias si es necesario.</span>
            </div>
            <div className="ms-2 m-1" data-aos="fade-down" data-aos-delay="500">
              <img src={listItem} className="pe-2"/>
              <span className="fw-normal">Tené a mano <i>carnet de manejo, documentos del vehículo, DNI y Poliza de tu seguro o bien tarjeta de circulacion</i>. Pedí lo mismo al otro conductor.</span>
            </div>
            <div className="ms-2 m-1" data-aos="fade-down" data-aos-delay="600">
              <img src={listItem} className="pe-2"/>
              <span className="fw-normal">Tomá nota de la hora, fecha, lugar de ocurrencia, sentido de circulación de los vehículos y fotos del siniestro.</span>
            </div>
            <div className="ms-2 m-1" data-aos="fade-down" data-aos-delay="700">
              <img src={listItem} className="pe-2"/>
              <span className="fw-normal">Una vez en tu domicilio realiza la denuncia al 0800 de tu compañía, recordá que tenes 48 hs para realizarla.</span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
