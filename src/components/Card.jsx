import React from "react";

export default function Card(props) {
  return (
    <div className="col-12 col-md-6 col-lg-6 d-flex">
      <div className="section-2">
        <h2>{props.name}</h2>
        <p>{props.text}</p>
      </div>
    </div>
  );
}
