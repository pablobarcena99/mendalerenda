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
  margin-bottom: 12px;
  border-radius: 20px;

  img {
    border-top-left-radius: 37px 140px;
    border-top-right-radius: 23px 130px;
    border-bottom-left-radius: 110px 19px;
    border-bottom-right-radius: 120px 24px;
    max-height: 500px;
    object-fit: cover;
    object-position: center;
    :hover {
      transform: translateY(-10px) rotate(1deg);
      box-shadow: 3px 15px 8px -10px rgba(0, 0, 0, 0.3);
    }
  }
`;
const Title = styled.h2`
  color: pink;
`;

export default class Card extends Component {
  render() {
    if (this.props.text) {
      if (Array.isArray(this.props.text)) {
        var content = this.props.text.map((element) => <p>{element}</p>);
      } else {
        content = this.props.text;
      }
    }

    return (
      <div className='col-12 col-md-6 col-lg-6 d-flex p-0 '>
        <StyledCard>
          <Title>{this.props.name ? this.props.name : null}</Title>
          {content ? <p>{content}</p> : null}
          {this.props.img ? <img src={require(`../images/${this.props.img}`)} alt='' /> : null}
          {this.props.extImg ? <img className="img-responsive" src={this.props.extImg} alt='' /> : null}
          {this.props.iframe ? this.props.iframe : null}
        </StyledCard>
      </div>
    );
  }
}
