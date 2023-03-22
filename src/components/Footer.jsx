import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";


const SocialLink = styled.a`
  color: ${props => props.color} !important;
  padding: 4px;

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
                <FontAwesomeIcon icon={["fab", "facebook"]} />
              </SocialLink>
              <SocialLink href='#twi' className='me-4 link-secondary' color={"#2D9BF0"}>
                <FontAwesomeIcon icon={["fab", "twitter"]} />
              </SocialLink>
              <SocialLink href='#spo' className='me-4 link-secondary' color={"#F82502"}>
                <FontAwesomeIcon icon={["fab", "youtube"]} />
              </SocialLink>
              <SocialLink href='#ins' className='me-4 link-secondary' color={"#C0245E"}>
                <FontAwesomeIcon icon={["fab", "instagram"]} />
              </SocialLink>
              <SocialLink href='#face' className='me-4 link-secondary' color={"black"}>
                <FontAwesomeIcon icon={["fab", "apple"]} />
              </SocialLink>
              <SocialLink href='#face' className='me-4 link-secondary' color={"#1CD761"}>
                <FontAwesomeIcon icon={["fab", "spotify"]} />
              </SocialLink>
            </div>
          </section>
          <section className=''>
            <div className='container text-center text-md-start mt-5'>
              <div className='row mt-3'>
                <div className='col-md-3 col-lg-4 col-xl-3 mx-auto mb-4'>
                  <h6 className='text-uppercase fw-bold mb-4'> MENDA LERENDA </h6>
                </div>

                <div className='col-md-3 col-lg-2 col-xl-2 mx-auto mb-4'>
                  {/* <!-- Links --> */}
                  <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
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
                  <h6 className='text-uppercase fw-bold mb-4'>Contacto</h6>
                  <p>
                    <FontAwesomeIcon icon={["fas", "home"]} /> Miranda de Ebro, 09200
                  </p>
                  <p>
                    <FontAwesomeIcon icon={["fas", "envelope"]} /> E-mail
                  </p>
                  <p>
                    <FontAwesomeIcon icon={["fas", "phone"]} /> Pablo: +34 664 292 833
                  </p>
                  <p>
                    <FontAwesomeIcon icon={["fas", "phone"]} /> Garci: +34 617 146 287
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
