import React from 'react';
import './footer.css';
import logo from '../../assets/img/logo.png';

const Footer = () => {
  return (
    <footer className='container h-100 mt-4'>
      <div className='text-center pt-2'>
        <p>Antes cualquier eventualidad no dudes en contactarnos. También nos
          encontrás en redes sociales</p>
      </div>
      <div className='row justify-content-around justify-content-sm-center justify-content-md-center align-items-center'>
        <div className='col-12 col-lg-6 mt-3 d-flex justify-content-center align-items-center'>
          <img src={logo} width='400' alt='logoFooter' />
        </div>
        <div className='col-12 col-lg-6 mt-3 d-flex justify-content-center align-items-center'>
          <div className='mt-3'>
            <h3 className='text-center'>Redes Sociales</h3>
            <div className='d-flex justify-content-around my-3'>
              <a href=''>
                <i className='bi bi-facebook fs-1 text-black'></i>
              </a>
              <a href=''>
                <i className='bi bi-instagram fs-1 text-black'></i>
              </a>
            </div>
          </div>
        </div>
        <div className='col-12 py-2 d-flex justify-content-center'>
          <p className='fw-bold m-4'>Todos los derechos reservados © 2022
            <a href='www.lagerdevs.com' className='card-link text-decoration-none text-dark'>LagerDevs</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
