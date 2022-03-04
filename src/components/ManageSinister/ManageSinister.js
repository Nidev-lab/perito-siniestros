import React from 'react';

const ManageSinister = () => {
  return (
    <div className='pt-4 container'>
      <div className='d-flex justify-content-between row me-0 ms-0'>
        <h3>Deseo Gestionar mi Siniestro </h3>
        <div className='col-xl-6 d-flex align-items-center justify-content-center'>
          <h1>IMAGEN</h1>
        </div>
        <section className='col-xl-6'>
          <p>Un accidente de auto es siempre una experiencia difícil.
           A veces, el miedo y el estrés nos impiden reaccionar adecuadamente.
           Por ese motivo, es muy importante saber de antemano qué pasos debemos seguir si pasamos
           por una situación así. Si hacemos lo adecuado, va a ser mucho más fácil resolver
           la situación</p>
          <p>En primer lugar, tomate unos segundos para recuperar la calma.
           Comprobá que los pasajeros de tu auto estén sanos y salvos.
           Si todos se encuentran bien, seguí estos pasos:</p>
           <ul>
            <li>Detené el auto, apagá el motor y encendé las balizas.
           Tené en cuenta que abandonar el lugar es un delito</li>
            <li>Si alguna persona se lastimó, ya sea en tu auto como en algún otro involucrado,
            llamá de inmediato al servicio de emergencias médicas (107),
            y comunicate también con la policía (911) y los bomberos (100).</li>
            <li>Realizá la denuncia del siniestro en tu seguro.</li>
           </ul>
        </section>
      </div>
      <section className='mt-4'>
        <p className='col-xl-6 text-center text-decoration-underline'>Solicitá los datos del tercero</p>
        <ul>
          <li>Patente del vehículo del tercero.</li>
          <li>Compañía de seguro del vehículo del tercero y número de póliza.</li>
          <li>Marca y modelo del vehículo del tercero.</li>
          <li>Nombre y apellido del titular del vehículo.</li>
          <li>Nombre y apellido del conductor del vehículo.</li>
          <li>Datos de contacto del tercero: teléfono, celular y domicilio.</li>
        </ul>
      </section>
      <section className='row justify-content-evenly m-0 mt-4'>
        <div className='col-xl-6 p-0'>
          <p className='text-center text-decoration-underline'>Registrá los datos generales</p>
          <ul>
          <li>Fecha y hora del siniestro.</li>
          <li>Lugar del siniestro.</li>
          <li>Tomá fotos de los daños de tu auto.</li>
          <li>Tomá fotos del lugar del siniestro
          (si es posible que se vean ambos vehículos en la misma toma).</li>
          </ul>
        </div>
        <div className='col-xl-6 p-0 my-3'>
          <button className='btn btn-success' type="button">Solicitar asesoramiento</button>
        </div>
      </section>
    </div>
  );
};

export default ManageSinister;
