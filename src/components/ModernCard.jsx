import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";
import styled from "styled-components";

const CardBackground = styled.div`
  /* background-color: #8783d1; */
  background-color: ${(props) => props.color};
`;
const color = {
  black: "#202020",
  purple: "#8783d1",
  green: "#15E6CD",
  yellow: "#E6CD15",
};

const Title = styled.h1``;
const checkFontColor = (props) => {
  const darkBackgrounds = ["black"];
  if (darkBackgrounds.includes(props.bg)) {
    return "white";
  } else {
    return "#202020";
  }
};
const CardInfo = styled.div`
  color: ${checkFontColor};

  img {
    height: auto;
    object-fit: contain;
    object-position: center;
    max-height: 400px;
    width: 100%;
    padding: 20px;
  }
`;

export default class ModernCard extends Component {
  render() {
    if (this.props.gallery) {
      if (Array.isArray(this.props.extImg)) {
        return (
          <CardBackground color={color[`${this.props.color}`]}>
            <Container>
              <Row className='pt-5 pb-5 gx-5'>
                {this.props.extImg.map((photo) => (
                  <CardInfo className='col-12 col-md-6 col-lg-4 d-flex p-0'>
                    <img src={`${photo}`} alt='' loading='lazy' />
                  </CardInfo>
                ))}
              </Row>
            </Container>
          </CardBackground>
        );
      } else {
        return (
          <CardBackground color={color[`${this.props.color}`]}>
            <Container>
              <Row>
                <CardInfo className='col-12 col-md-6 col-lg-4 d-flex p-0'>
                  {this.props.extImg ? <img src={this.props.extImg} alt='' loading='lazy' /> : null}
                </CardInfo>
              </Row>
            </Container>
          </CardBackground>
        );
      }
    } else {
      if (this.props.text) {
        if (Array.isArray(this.props.text)) {
          var content = this.props.text.map((element) => <p>{element}</p>);
        } else {
          content = this.props.text;
        }
      }
      return (
        <CardBackground color={color[`${this.props.color}`]}>
          <Container>
            <Row className='pt-5 pb-5'>
              <CardInfo bg={this.props.color} className='col-12 col-md-6 col-lg-6'>
                {this.props.name ? <Title>{this.props.name}</Title> : null}
                {content ? <p>{content}</p> : null}
                {this.props.img ? (
                  <img src={require(`../images/${this.props.img}`)} alt='' loading='lazy' />
                ) : null}
              </CardInfo>
              <CardInfo bg={this.props.color} className='col-12 col-md-6 col-lg-6'>
                {this.props.extImg ? <img src={this.props.extImg} alt='' loading='lazy' /> : null}
                {this.props.iframe ? this.props.iframe : null}
              </CardInfo>
            </Row>
          </Container>
        </CardBackground>
      );
    }
  }
}
