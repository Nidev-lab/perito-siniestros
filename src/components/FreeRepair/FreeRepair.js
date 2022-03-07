import React from 'react';

const FreeRepair = () => {
  return (
    <div className="container">
      <h3 className='mt-4'>Deseo Reparar mi auto sin costo</h3>
      <div className='row'>
        <div className='col-12'>
          <h2 className='text-center my-5'>IMAGEN</h2>
        </div>
        <div className='col-12'>
          <p>Tené en cuenta que el seguro del tercero va a responder sólo en el caso en que
          su asegurado (quien te chocó) tenga su póliza vigente al momento del siniestro y
          sea el responsable de la ocurrencia del accidente y haya denunciado el mismo ante
          la compañía.</p>
        </div>
      </div>
      <div className='row'>
        <div className='col-xl-6'>
          <h2 className='text-center my-5'>IMAGEN</h2>
        </div>
        <div className='col-xl-6'>
          <p>Si el culpable del accidente automovilístico es el conductor del otro vehículo
          (comúnmente llamando `el tercero`), los daños materiales y las lesiones que hayas
          sufrido, deberían ser indemnizados por la aseguradora de quien te chocó...</p>
          <p>... siempre y cuando, el tercero tenga un segundo contratado, con cobertura al día
          y haya realizando la denuncia administrativa en su compañía de seguro.</p>
        </div>
        <div className='col-xl-12'>
          <p>Te brindamos el mejor asesoramiento!. Contamos con presupuesto originales con
            firma responsable de un taller registrado brindando siempre valores actualizados
            en el mercado.</p>
        </div>
      </div>
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
        <div className='col-12 col-md-6'>
          <button className='btn btn-success w-100 mb-5' type="button">Click aquí para mas info</button>
        </div>
      </div>
    </div>
  );
};

export default FreeRepair;
