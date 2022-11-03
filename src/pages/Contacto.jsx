import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import Hero from "../components/Hero";
import ModernCard from "../components/ModernCard";

export default function Contacto() {
  return (
    <>
      <Hero name='CONTACTO' />
      <ModernCard
        color='purple'
        name='Correo Electronico'
        text={[[<FontAwesomeIcon icon={["fas", "envelope"]} />, " mendalerendacontacto@gmail.com"]]}
      />
      <ModernCard
        name='Teléfono'
        text={[
          [<FontAwesomeIcon icon={["fas", "phone"]} />, " 664 29 28 33 Pablo"],
          [<FontAwesomeIcon icon={["fas", "phone"]} />, " 664 29 28 33 Pablo"],
        ]}
        color='green'
      />
    </>
  );
}
