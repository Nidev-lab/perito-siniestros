import React from 'react';

const FreeRepair = () => {
  return (
    <div>
      <h1>Repará tu auto sin costo</h1>
      <div className='d-flex justify-content-center aling-center'>
        <div className='d-flex flex-column w-75'>
          <img src="..." alt="img" />
          <div className=''>
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
        <p className='text-center'>¿Sabías que podés vender tu auto chocado?</p>
        <button className='btn btn-success' type="button">Click aquí para mas info</button>
      </div>
    </div>
  );
};

export default FreeRepair;
