import React, { Component } from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  color: #ffffff;
  font-weight: bold;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  font-size: 1rem;

  img {
    max-width: auto;
    object-fit: contain;
    object-position: center;
    max-height: 400px;
    width: 100%;

  }

  iframe {
  }
`;
const Title = styled.h2`
  color: pink;
  display: flex;
`;

export default class GalleryCard extends Component {
  render() {
    if (this.props.text) {
      if (Array.isArray(this.props.text)) {
        var content = this.props.text.map((element) => <p>{element}</p>);
      } else {
        content = this.props.text;
      }
    }
    return (
      <div className='col-12 col-md-6 col-lg-4 d-flex p-0'>
        <StyledCard>
          {this.props.img ? (
            <img src={require(`/${this.props.img}`)} alt='' loading='lazy' />
          ) : null}
          {this.props.extImg ? <img src={this.props.extImg} alt='' loading='lazy' /> : null}
        </StyledCard>
      </div>
    );
  }
}
