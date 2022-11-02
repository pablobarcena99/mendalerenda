import React, { Component } from "react";
import styled from "styled-components";

const HeroSection = styled.div`
  background-color: #724e91;
`;
const Image = styled.img`
  width: 100%;
  object-fit: contain;
  max-height: 120px;
`;
const Text = styled.h1`
  font-size: calc(1.9rem + 1.5vw);
  padding: 50px 0;
  margin: 0px;
`;
export default class Hero extends Component {
  render() {
    return (
      <HeroSection>
        <div className='container'>
          {this.props.name ? <Text>{this.props.name}</Text> : null}
          {this.props.img ? <Image src={require(`../images/${this.props.img}`)} alt='' /> : null}
        </div>
      </HeroSection>
    );
  }
}
