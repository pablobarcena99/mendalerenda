import React from 'react'

export default function Galeria() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-6 col-lg-6">
          <img src={require('../images/shirt1.png')} alt="shirt"/>
        </div>
        <div className="col-12 col-md-6 col-lg-6">
          <img src={require('../images/shirt1.png')} alt="shirt"/>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-6 col-lg-6">
          <img src={require('../images/shirt1.png')} alt="shirt"/>
        </div>
        <div className="col-12 col-md-6 col-lg-6">
          <img src={require('../images/shirt1.png')} alt="shirt"/>
        </div>
      </div>
    </div>
  )
}
