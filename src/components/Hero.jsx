import React, { Component } from 'react'
import styled from 'styled-components'

const HeroSection = styled.div`
  height: 20rem;
  padding:20px 0 20px 0;

`;
export default class Hero extends Component {
  render() {
    return (
      <HeroSection>
        <h1>Bienvenido</h1>
      </HeroSection>
    )
  }
}
