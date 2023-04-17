import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import {
  FaApple,
  FaEnvelope,
  FaFacebook,
  FaHome,
  FaInstagram,
  FaPhone,
  FaPhoneAlt,
  FaSpotify,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { Col, Container, Row } from "react-bootstrap";

const SocialLink = styled.a`
  font-size: 20px;
  color: ${(props) => props.color} !important;
  padding: 4px;
`;
const FooterTitle = styled.h6`
  font-family: var(--font-dxsitrus);
`;

const FooterContainer = styled.div`
  min-height: 500px;
  background-color: #141414;
  p {
    color: white;
    font-family: var(--font-roboto);
  }
  h6 {
    font-family: var(--font-dxsitrus);
  }
`;
const FooterSection = styled.div`
  h6 {
    font-size: calc(1.2rem + 1vw);
  }
  display: flex;
  justify-content: ;
  align-items: ${(props) => props.align};
  flex-direction: column;
  padding: 30px 0px 30px 0px;

  @media (max-width: 992px) {
    align-items: center;
  }
`;

export default class Footer extends Component {
  render() {
    return (
      <>
        <FooterContainer>
          <Container>
            <Row>
              <Col lg={6} className=''>
                <FooterSection>
                  <h6>MENDA LERENDA</h6>
                  <p> mendalerendacontacto@gmail.com </p>
                  <p> +34 664 292 833 </p>
                  <p> +34 617 146 287 </p>
                </FooterSection>
              </Col>
              <Col lg={6}>
                <FooterSection align={"flex-end"}>
                  <div>
                    <SocialLink
                      target='_blank'
                      href='https://twitter.com/mendalerenda__?s=20'
                      className='me-4 link-secondary'
                      color={"#2D9BF0"}>
                      <FaTwitter />
                    </SocialLink>
                    <SocialLink
                      target='_blank'
                      href='https://www.youtube.com/channel/UCq4gAcyctpsPZqVtEG3nRXA'
                      className='me-4 link-secondary'
                      color={"#F82502"}>
                      <FaYoutube />
                    </SocialLink>
                    <SocialLink
                      target='_blank'
                      href='https://instagram.com/mendalerenda_?igshid=YmMyMTA2M2Y=applew '
                      className='me-4 link-secondary'
                      color={"#C0245E"}>
                      <FaInstagram />
                    </SocialLink>
                    <SocialLink
                      target='_blank'
                      href='https://music.apple.com/us/artist/menda-lerenda/1515026644'
                      className='me-4 link-secondary'
                      color={"white"}>
                      <FaApple />
                    </SocialLink>
                    <SocialLink
                      target='_blank'
                      href='https://open.spotify.com/artist/4lAJspyHzaPknkPilMELFu?si=-9XLj3RYR12KSfivALAB_Q'
                      className='me-4 link-secondary'
                      color={"#1CD761"}>
                      <FaSpotify />
                    </SocialLink>
                  </div>
                </FooterSection>
              </Col>
            </Row>
          </Container>
        </FooterContainer>
      </>
    );
  }
}
