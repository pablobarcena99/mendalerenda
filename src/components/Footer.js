import React, { Component } from 'react'
import './Footer.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



export default class Footer extends Component {
  render() {
    return (
      <>
        <footer class="text-center text-lg-start bg-white text-muted">
          <section class="container d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
            <div class="me-5 d-none d-lg-block">
              <span>Get connected with us on social networks:</span>
            </div>
            <div>
              <a href="#face" class="me-4 link-secondary">
              <FontAwesomeIcon icon={['fab', 'facebook']} />
              </a>
              <a href="#twi" class="me-4 link-secondary">
              <FontAwesomeIcon icon={['fab', 'twitter']} />
              </a>
              <a href="#go" class="me-4 link-secondary">
              <FontAwesomeIcon icon={['fab', 'google']} />
              </a>
              <a href="#ins" class="me-4 link-secondary">
              <FontAwesomeIcon icon={['fab', 'instagram']} />
              </a>
              <a href="#spo" class="me-4 link-secondary">
              <FontAwesomeIcon icon={['fab', 'spotify']} />
              </a>
            </div>
          </section>
          <section class="">
            <div class="container text-center text-md-start mt-5">
              <div class="row mt-3">
                <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                  <h6 class="text-uppercase fw-bold mb-4"> MENDA LERENDA </h6>
                  <p>
                    Here you can use rows and columns to organize your footer content. Lorem ipsum
                    dolor sit amet, consectetur adipisicing elit.
                  </p>
                </div>
                {/* <!-- Grid column --> */}

                {/* <!-- Grid column --> */}
                <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                  {/* <!-- Links --> */}
                  <h6 class="text-uppercase fw-bold mb-4">
                    Products
                  </h6>
                  <p>
                    <a href="#!" class="text-reset">Angular</a>
                  </p>
                  <p>
                    <a href="#!" class="text-reset">React</a>
                  </p>
                  <p>
                    <a href="#!" class="text-reset">Vue</a>
                  </p>
                  <p>
                    <a href="#!" class="text-reset">Laravel</a>
                  </p>
                </div>
                {/* <!-- Grid column --> */}

                {/* <!-- Grid column --> */}
                <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                  {/* <!-- Links --> */}
                  <h6 class="text-uppercase fw-bold mb-4">
                    Useful links
                  </h6>
                  <p>
                    <a href="#!" class="text-reset">Pricing</a>
                  </p>
                  <p>
                    <a href="#!" class="text-reset">Settings</a>
                  </p>
                  <p>
                    <a href="#!" class="text-reset">Orders</a>
                  </p>
                  <p>
                    <a href="#!" class="text-reset">Help</a>
                  </p>
                </div>
                <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                  <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
                  <p><FontAwesomeIcon icon={['fas', 'home']} /> Miranda de Ebro, 09200</p>
                  <p>
                  <FontAwesomeIcon icon={['fas', 'envelope']}/> E-mail
                  </p>
                  <p><FontAwesomeIcon icon={['fas', 'phone']} /> + 01 234 567 88</p>
                  <p><FontAwesomeIcon icon={['fas', 'phone']} /> + 01 234 567 89</p>
                </div>
              </div>
            </div>
          </section>
        </footer>
      </>
    )
  }
}
