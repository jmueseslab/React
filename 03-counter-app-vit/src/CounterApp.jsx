import React from 'react'
import PropsTypes from 'prop-types'; 

export const CounterApp = ({value}) => {

  function handleAdd (event) {
    console.log(event)
  }

  return (
    //fragmento
    <>
        <h1>CounterApp</h1>
        <h2> { value } </h2>

        <button onClick={ handleAdd }>
          +1
        </button>
    </>
  )
}
CounterApp.propTypes = {
    value: PropsTypes.number.isRequired
}