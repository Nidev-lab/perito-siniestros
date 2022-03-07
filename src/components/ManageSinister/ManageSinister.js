import React from 'react';

const ManageSinister = () => {
  return (
    <div className='pt-4 container' id="siniestro">
      <div className='d-flex justify-content-between row'>
        <h3>Deseo Gestionar mi Siniestro </h3>
        <div className='col-xl-6 d-flex align-items-center justify-content-center'>
          <h1 className='my-5'>IMAGEN</h1>
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
          <p>Detené el auto, apagá el motor y encendé las balizas.
           Tené en cuenta que abandonar el lugar es un delito</p>
          <p>Si alguna persona se lastimó, ya sea en tu auto como en algún otro involucrado,
            llamá de inmediato al servicio de emergencias médicas (107),
            y comunicate también con la policía (911) y los bomberos (100).</p>
          <p>Realizá la denuncia del siniestro en tu seguro.</p>
        </section>
      </div>
      <section className='mt-4'>
        <h5 className='col-xl-6'>Solicitá los datos del tercero</h5>
        <ul>
          <li>Patente del vehículo del tercero.</li>
          <li>Compañía de seguro del vehículo del tercero y número de póliza.</li>
          <li>Marca y modelo del vehículo del tercero.</li>
          <li>Nombre y apellido del titular del vehículo.</li>
          <li>Nombre y apellido del conductor del vehículo.</li>
          <li>Datos de contacto del tercero: teléfono, celular y domicilio.</li>
        </ul>
      </section>
      <section className='my-4'>
        <h5 className='col-xl-6'>Registrá los datos generales</h5>
        <ul>
          <li>Fecha y hora del siniestro.</li>
          <li>Lugar del siniestro.</li>
          <li>Tomá fotos de los daños de tu auto.</li>
          <li>Tomá fotos del lugar del siniestro
          (si es posible que se vean ambos vehículos en la misma toma).</li>
        </ul>
        <div className='col-12 col-md-6 my-5'>
          <button className='btn btn-success w-100' type="button">Solicitar asesoramiento</button>
        </div>
      </section>
    </div>
  );
};

export default ManageSinister;
