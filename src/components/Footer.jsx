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

const SocialLink = styled.a`
  color: ${(props) => props.color} !important;
  padding: 4px;
`;
const FooterTitle = styled.h6`
  font-family: var(--font-dxsitrus);
`;
export default class Footer extends Component {
  render() {
    return (
      <>
        <footer className='text-center text-lg-start text-muted'>
          <section className='container d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
            <div className='me-5 d-none d-lg-block'>
              <span>Conecta con nosotros en nuestras redes sociales:</span>
            </div>
            <div>
              <SocialLink href='#face' className='me-4 link-secondary' color={"#3E62A9"}>
                <FaFacebook />
              </SocialLink>
              <SocialLink href='#twi' className='me-4 link-secondary' color={"#2D9BF0"}>
                <FaTwitter />
              </SocialLink>
              <SocialLink href='#spo' className='me-4 link-secondary' color={"#F82502"}>
                <FaYoutube />
              </SocialLink>
              <SocialLink href='#ins' className='me-4 link-secondary' color={"#C0245E"}>
                <FaInstagram />
              </SocialLink>
              <SocialLink href='#face' className='me-4 link-secondary' color={"black"}>
                <FaApple />
              </SocialLink>
              <SocialLink href='#face' className='me-4 link-secondary' color={"#1CD761"}>
                <FaSpotify />
              </SocialLink>
            </div>
          </section>
          <section className=''>
            <div className='container text-center text-md-start mt-5'>
              <div className='row mt-3'>
                <div className='col-md-3 col-lg-4 col-xl-3 mx-auto mb-4'>
                  <FooterTitle className='text-uppercase fw-bold mb-4'> MENDA LERENDA </FooterTitle>
                </div>

                <div className='col-md-3 col-lg-2 col-xl-2 mx-auto mb-4'>
                  {/* <!-- Links --> */}
                  <FooterTitle className='text-uppercase fw-bold mb-4'>Useful links</FooterTitle>
                  <p>
                    <a href='#!' className='text-reset'>
                      Pricing
                    </a>
                  </p>
                  <p>
                    <a href='#!' className='text-reset'>
                      Settings
                    </a>
                  </p>
                  <p>
                    <a href='#!' className='text-reset'>
                      Orders
                    </a>
                  </p>
                  <p>
                    <a href='#!' className='text-reset'>
                      Help
                    </a>
                  </p>
                </div>
                <div className='col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4'>
                  <FooterTitle className='text-uppercase fw-bold mb-4'>Contacto</FooterTitle>

                  <p> mendalerendacontacto@gmail.com </p>
                  <p>
                    {" "}
                    <FaPhoneAlt /> +34 664 292 833{" "}
                  </p>
                  <p>
                    {" "}
                    <FaPhoneAlt /> +34 617 146 287{" "}
                  </p>
                </div>
              </div>
            </div>
          </section>
        </footer>
      </>
    );
  }
}
