import React from 'react';
import { useState } from 'react';
import PropsTypes from 'prop-types'; 

export const CounterApp = ({value}) => {

  // cuando cambia el estado el componente se vuelve a ejecutar
  // API...FETCH

  console.log('Render');

  const [ counter, setCounter ] = useState( value );

  const handleAdd = () =>{
    //console.log(event);
    setCounter((c) => c + 1 );
  }

  const handleSubstract = () => setCounter(counter - 1 );


  const handleReset = () => setCounter( value );

  return (
    //fragmento
    <>
        <h1>CounterApp</h1>
        <h2> { counter } </h2>

        {/* <button onClick={ (event) => handleAdd (event, 'hola') }> */}
        < button onClick={ handleAdd }> +1 </button>
        < button onClick={ handleSubstract }> -1 </button>
        < button onClick={ handleReset }> Reset </button>
    </>
  )
}
CounterApp.propTypes = {
    value: PropsTypes.number.isRequired
}