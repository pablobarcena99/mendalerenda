import React, { Component } from "react";
import Card from "../components/Card";
import Hero from "../components/Hero";
import ModernCard from "../components/ModernCard";

export default class Eventos extends Component {
  render() {
    return (
      <>
        <Hero name='EVENTOS' />
        <ModernCard name='Concierto La madre gastropub' text='17/12/2022' color='purple' />
        <ModernCard name='Concierto La madre gastropub' text='17/12/2022' color='black' />
        <ModernCard name='Concierto La madre gastropub' text='17/12/2022' color='green' />
      </>
    );
  }
}
