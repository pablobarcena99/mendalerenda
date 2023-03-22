import React, { Component } from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";

const HeroSection = styled.div`
  background-color: #e6cd15;
  min-height: calc(142px + 16vw);
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
const Image = styled.img`
  width: 100%;
  object-fit: contain;
  max-height: 120px;
`;
const Text = styled.h1`
  font-size: calc(1.9rem + 5vw);
  padding: 90px 0;
  margin: 0px;
`;
export default class Hero extends Component {
  render() {
    return (
      <HeroSection>
        <Container>
          {this.props.name ? <Text>{this.props.name}</Text> : null}
          {this.props.img ? <Image src={require(`/${this.props.img}`)} alt='' /> : null}
        </Container>
      </HeroSection>
    );
  }
}
