import React, { Component } from "react";
import styled from "styled-components";

const HeroSection = styled.div`
  height: 400px;
  background-color: #724e91;
  display: flex;
  padding: 20px;
  justify-content: flex-start;
  align-items: center;

  img {
    width: 100%;
    object-fit: contain;
  }
  h1 {
    font-size: calc(1.9rem + 1.5vw);
  }
`;
export default class Hero extends Component {
  render() {
    return (
      <HeroSection>
        <div className="container">
          {this.props.name ? <h1>{this.props.name}</h1> : null}
          {this.props.img ? <img src={require(`../images/${this.props.img}`)} alt='' /> : null}
        </div>
      </HeroSection>
    );
  }
}
