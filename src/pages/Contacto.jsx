import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import Hero from "../components/Hero";
import ModernCard from "../components/ModernCard";

export default function Contacto() {
  return (
    <>
      <Hero name='CONTACTO' />
      <ModernCard
        text={[
          [<FontAwesomeIcon icon={["fas", "phone"]} />, " 664 29 28 33 Pablo"],
          [<FontAwesomeIcon icon={["fas", "envelope"]} />, " mendalerendacontacto@gmail.com"],
        ]}
        color='green'
      />
    </>
  );
}
