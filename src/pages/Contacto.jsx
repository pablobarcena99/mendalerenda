import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Card from "../components/Card";
import Hero from "../components/Hero";

export default function Contacto() {
  return (

    <>
    <Hero name="CONTACTO"/>
      <div className='container'>
        <div className='row'>
          <Card
            text={[
              [<FontAwesomeIcon icon={["fas", "phone"]} />, " 664 29 28 33 Pablo"],
              [<FontAwesomeIcon icon={["fas", "envelope"]} />, " mendalerendacontacto@gmail.com"],
            ]}
          />
        </div>
      </div>
    </>
  );
}
