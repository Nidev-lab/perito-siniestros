import React from 'react';

function ManageSinister() {
  return (
    <div>
      <div className='d-flex justify-content-evenly row m-0'>
        <div className='col-xl-6'>
          <h1 className='text-center'>IMAGEN</h1>
        </div>
        <div className='col-xl-6'>
          <p>Un accidente de auto es siempre una experiencia difícil.
           A veces, el miedo y el estrés nos impiden reaccionar adecuadamente.
           Por ese motivo, es muy importante saber de antemano qué pasos debemos seguir si pasamos
           por una situación así. Si hacemos lo adecuado, va a ser mucho más fácil resolver
           la situación</p>
          <p>En primer lugar, tomate unos segundos para recuperar la calma.
           Comprobá que los pasajeros de tu auto estén sanos y salvos.
           Si todos se encuentran bien, seguí estos pasos:</p>
          <p>• Detené el auto, apagá el motor y encendé las balizas.
           Tené en cuenta que abandonar el lugar es un delito</p>
          <p>• Si alguna persona se lastimó, ya sea en tu auto como en algún otro involucrado,
           llamá de inmediato al servicio de emergencias médicas (107),
           y comunicate también con la policía (911) y los bomberos (100).</p>
          <p>• Realizá la denuncia del siniestro en tu seguro.</p>
        </div>
      </div>
      <div>
        <p className='col-xl-6 text-center text-decoration-underline'>Solicitá los datos del tercero</p>
        <p>• Patente del vehículo del tercero.</p>
        <p>• Compañía de seguro del vehículo del tercero y número de póliza.</p>
        <p>• Marca y modelo del vehículo del tercero.</p>
        <p>• Nombre y apellido del titular del vehículo.</p>
        <p>• Nombre y apellido del conductor del vehículo.</p>
        <p>• Datos de contacto del tercero: teléfono, celular y domicilio.</p>
      </div>
      <div className='d-flex justify-content-evenly row m-0'>
        <div className='col-xl-6'>
          <p className='text-center text-decoration-underline'>Registrá los datos generales</p>
          <p>• Fecha y hora del siniestro.</p>
          <p>• Lugar del siniestro.</p>
          <p>• Tomá fotos de los daños de tu auto.</p>
          <p>• Tomá fotos del lugar del siniestro
          (si es posible que se vean ambos vehículos en la misma toma).</p>
        </div>
        <div className='col-xl-6'>
          <button className='btn btn-success' type="button">Solicitar asesoramiento</button>
        </div>
      </div>
    </div>
  );
}

export default ManageSinister;
