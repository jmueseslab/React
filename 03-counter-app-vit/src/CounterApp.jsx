import React from 'react'
import PropsTypes from 'prop-types'; 

export const CounterApp = ({value}) => {

  const handleAdd = () =>{
    console.log('+1');
    value = 1000;
  }

  return (
    //fragmento
    <>
        <h1>CounterApp</h1>
        <h2> { value } </h2>

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