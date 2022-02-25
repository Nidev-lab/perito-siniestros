import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className='container h-100 mt-4'>
      <div className='text-center pt-2'>
        <p>Lorem ipsum dolor sit amet et delectus accommodare his consul copiosae legendos </p>
      </div>
      <div className='row justify-content-around justify-content-sm-center justify-content-md-center align-items-center'>
       <div className='col-12 col-lg-6 mt-3 d-flex justify-content-center align-items-center'>
        <img className='w-25' src='https://upload.wikimedia.org/wikipedia/commons/a/ab/Logo_TV_2015.png' alt='logoFooter'/>
       </div>
       <div className='col-12 col-lg-6 mt-3 d-flex justify-content-center align-items-center'>
         <div className='mt-3'>
          <h3 className='text-center'>Redes Sociales</h3>
          <div className='d-flex'>
            <div className='my-3'>
              Facebook
            </div>
            <div className='my-3 mx-3'>
              instagram
            </div>
            <div className='my-3'>
              Whatsapp
            </div>
          </div>
         </div>
        </div>
        <div className='col-12 py-2 d-flex justify-content-center'>
          <strong>
            Todos los derechos reservados © 2022
          </strong>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
