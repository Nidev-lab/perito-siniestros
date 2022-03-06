import React from 'react';

const FreeRepair = () => {
  return (
    <div id="reparacion">
      <h1>Repará tu auto sin costo</h1>
      <h3 className='container mt-4'>Deseo Reparar mi auto sin costo</h3>
      <div className='d-flex justify-content-center aling-center'>
        <div className='d-flex flex-column w-75'>
          <div>
            <h1 className='text-center'>IMAGEN</h1>
            <p className='text-center'>Tené en cuenta que el seguro del tercero va a responder sólo en el caso en que su
            asegurado (quien te chocó) tenga su póliza vigente al momento del siniestro y sea
            el responsable de la ocurrencia del accidente y haya denunciado el mismo
            ante la compañía.</p>
          </div>
        </div>
      </div>
      <div className='d-flex justify-content-evenly row me-0 ms-0'>
        <div className='col-xl-6'>
          <h1 className='text-center'>IMAGEN</h1>
        </div>
        <div className='col-xl-6'>
          <p>Si el culpable del accidente automovilístico es el conductor del otro vehículo
          (comúnmente llamando `el tercero`), los daños materiales y las lesiones que hayas
          sufrido, deberían ser indemnizados por la aseguradora de quien te chocó...</p>
          <p>... siempre y cuando, el tercero tenga un segundo contratado, con cobertura al día
          y haya realizando la denuncia administrativa en su compañía de seguro.</p>
        </div>
          <p className='text-center m-4'>Te brindamos el mejor asesoramiento!. Contamos con presupuesto originales con firma responsable de un taller registrado brindando siempre valores actualizados en el mercado.</p>
        <div>
          <h5 className='ms-5'>Condiciones</h5>
          <div className='ms-5 mt-4'>
            <p>Para que podamos reparar tu vehículo el tercero (quien te chocó),
            tiene que cumplir con lo siguiente:</p>
            <ul>
              <li>Haber realizado la denuncia administrativa en su seguro.</li>
              <li>Contar con cobertura al momento del siniestro.</li>
              <li>Ser el responsable del accidente.</li>
            </ul>
          </div>
        </div>
        <div>
          <h5 className='ms-5'>Documentacion necesaria:</h5>
            <ul className='ms-5 mt-4'>
              <li>Copia de Cédula Verde y Registro de conducir.</li>
              <li>Copia de DNI del titular.</li>
              <li>Denuncia Administrativa en tu seguro.</li>
              <li>Certificado de cobertura a la fecha del siniestro emitido por tu seguro.</li>
              <li>Fotos de los daños (una que se vea la patente).</li>
            </ul>
        </div>
        <p className='text-center mt-4'>¿Sabías que podés vender tu auto chocado?</p>
        <button className='btn btn-success w-50 mb-5' type="button">Click aquí para mas info</button>
      </div>
  );
};

export default FreeRepair;
