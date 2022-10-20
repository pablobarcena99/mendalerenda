import React from 'react'
import Card from '../components/Card'

export default function Contacto() {
  return (
    <div className="container">
      <div className="row">
        <Card name="Contacto" text={["telefono", "direccion"]}/>
      </div>
    </div>
  )
}
