import React from 'react'
import PropsTypes from 'prop-types'; 

export const CounterApp = ({value}) => {
  return (
    //fragmento
    <>
        <h1>CounterApp</h1>
        <h2>{value}</h2>
    </>
  )
}
CounterApp.propTypes = {
    value: PropsTypes.number.isRequired
}