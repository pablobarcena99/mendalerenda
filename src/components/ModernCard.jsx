import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";
import styled from "styled-components";

const CardBackground = styled.div`
  /* background-color: #8783d1; */
  background-color: ${(props) => props.color};
`;
const color = { black: "#141414", purple: "#8783d1", green: "#15E6CD", yellow: "#E6CD15" };
const Title = styled.h2`
  font-size: calc(1.9rem + 1vw);
  font-family: var(--font-dxsitrus);
`;
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
    object-position: right;
    max-height: 400px;
    width: 100%;
    padding: 20px;
    @media (max-width: 784px) {
      object-position: center;
    }
  }
  p {
    font-family: var(--font-roboto);
  }
`;

export default class ModernCard extends Component {
  render() {
    if (this.props.gallery) {
      if (Array.isArray(this.props.extImg)) {
        return (
          <CardBackground color={color[`${this.props.color}`]}>
            <Container>
              <Row className=''>
                {console.log(this.props.extImg)}
                {this.props.extImg.map((photo, i) => (
                  console.log(i),
                  <CardInfo key={i} className='col-12 col-md-6 col-lg-4 d-flex p-0'>
                    <img src={`${photo}`} alt='' loading='lazy' />
                  </CardInfo>
                ))}
              </Row>
            </Container>
          </CardBackground>
        );
      }
    } else {
      if (this.props.text) {
        if (Array.isArray(this.props.text)) {
          var content = this.props.text.map((element) => <p key={element.id}>{element.id}</p>);
        } else {
          content = <p>{this.props.text}</p>;
        }
      }
      return (
        <CardBackground color={color[`${this.props.color}`]}>
          <Container>
            <Row className='pt-5 pb-5'>
              <CardInfo bg={this.props.color} className='col-12 col-md-6 col-lg-6'>
                {this.props.name ? <Title>{this.props.name}</Title> : null}
                {content ? <div>{content}</div> : null}
                {this.props.img ? (
                  <img src={require(`/${this.props.img}`)} alt='' loading='lazy' />
                ) : null}
                {this.props.iframeLeft ? this.props.iframeLeft : null}
              </CardInfo>
              <CardInfo bg={this.props.color} className='col-12 col-md-6 col-lg-6'>
                {this.props.nameRight ? <Title>{this.props.nameRight}</Title> : null}

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
