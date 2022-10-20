import React from 'react'

export default function Galeria() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-6 col-lg-6 section-2">
          <h2>
            Nuevas Camisetas
          </h2>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text. <br /> It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
          </p>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text. <br /> It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
          </p>
        </div>
        <div className="col-12 col-md-6 col-lg-6 section-2">
        <img src={require('../images/shirt1.png')} alt="shirt"/>
        </div>
      </div>
    </div>
  )
}
