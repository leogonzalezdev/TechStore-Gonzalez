import { useEffect, useState } from 'react';
import './Boton.css'

export const Boton = () => {

    let [clicks, setClicks] = useState(0);

    const aumentar = () => setClicks(clicks + 1);

    const disminuir = () => setClicks(clicks - 1);

    useEffect( () => {
    
      console.log('Actualizado');
    
    }, [clicks] );

    return(

      <>

        <button className='btn' onClick={aumentar}>Sumar +</button>
        <button className='btn' onClick={disminuir}>Restar -</button>
        <p>Clicks: {clicks}</p>
        <p>Fecha y Hora: {new Date().toLocaleString()}</p>

      </>

    );
}