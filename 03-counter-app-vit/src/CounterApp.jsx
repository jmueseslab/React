import React from 'react';
import { useState } from 'react';
import PropsTypes from 'prop-types'; 

export const CounterApp = ({value}) => {

  const [ counter, setCounter ] = useState( value );

  const handleAdd = () =>{
    //console.log(event);
    setCounter((c) => c + 1 );
  }

  return (
    //fragmento
    <>
        <h1>CounterApp</h1>
        <h2> { counter } </h2>

        {/* <button onClick={ (event) => handleAdd (event, 'hola') }> */}
        < button onClick={ handleAdd }>  
          +1
        </button>
    </>
  )
}
CounterApp.propTypes = {
    value: PropsTypes.number.isRequired
}