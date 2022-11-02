import React, { Component } from "react";
import Card from "../components/Card";
import Hero from "../components/Hero";

export default class Eventos extends Component {
  render() {
    return (
      <>
        <Hero name="EVENTOS"/>
        <div className='container'>
          <div className='row'>
            <Card name='Concierto La madre gastropub' text='17/12/2022' />
          </div>
          <div className='row'>
            <Card name='Concierto La madre gastropub' text='17/12/2022' />
          </div>
          <div className='row'>
            <Card name='Concierto La madre gastropub' text='17/12/2022' />
          </div>
        </div>
      </>

    );
  }
}
