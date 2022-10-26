import React, { Component } from 'react'
import './Footer.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class Footer extends Component {
  render() {
    return (
      <>
        <footer className="text-center text-lg-start bg-white text-muted">
          <section className="container d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
            <div className="me-5 d-none d-lg-block">
              <span>Get connected with us on social networks:</span>
            </div>
            <div>
              <a href="#face" className="me-4 link-secondary">
              <FontAwesomeIcon icon={['fab', 'facebook']} />
              </a>
              <a href="#twi" className="me-4 link-secondary">
              <FontAwesomeIcon icon={['fab', 'twitter']} />
              </a>
              <a href="#go" className="me-4 link-secondary">
              <FontAwesomeIcon icon={['fab', 'google']} />
              </a>
              <a href="#ins" className="me-4 link-secondary">
              <FontAwesomeIcon icon={['fab', 'instagram']} />
              </a>
              <a href="#spo" className="me-4 link-secondary">
              <FontAwesomeIcon icon={['fab', 'spotify']} />
              </a>
            </div>
          </section>
          <section className="">
            <div className="container text-center text-md-start mt-5">
              <div className="row mt-3">
                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold mb-4"> MENDA LERENDA </h6>
                  {/* <p>
                    Here you can use rows and columns to organize your footer content. Lorem ipsum
                    dolor sit amet, consectetur adipisicing elit.
                  </p> */}
                </div>

                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                  {/* <!-- Links --> */}
                  <h6 className="text-uppercase fw-bold mb-4">
                    Useful links
                  </h6>
                  <p>
                    <a href="#!" className="text-reset">Pricing</a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">Settings</a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">Orders</a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">Help</a>
                  </p>
                </div>
                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">Contacto</h6>
                  <p><FontAwesomeIcon icon={['fas', 'home']} /> Miranda de Ebro, 09200</p>
                  <p>
                  <FontAwesomeIcon icon={['fas', 'envelope']}/> E-mail
                  </p>
                  <p><FontAwesomeIcon icon={['fas', 'phone']} /> Pablo: +34 664 292 833</p>
                  <p><FontAwesomeIcon icon={['fas', 'phone']} /> Garci: +34 617 146 287</p>
                </div>
              </div>
            </div>
          </section>
        </footer>
      </>
    )
  }
}
