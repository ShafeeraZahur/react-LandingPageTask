import React from 'react';

// import { imgdata } from "./imageData";

import Testimonials1 from './Testimonials1.jpg';
import Testimonials2 from './Testimonials2.jpg';
import Testimonials3 from './Testimonials3.jpg';
import Bgshowcase1 from './Bgshowcase1.jpg';
import Bgshowcase2 from './Bgshowcase2.jpg';
import Bgshowcase3 from './Bgshowcase3.jpg';
//import Bgmasthead from './Bgmasthead.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
// import {Container} from 'react-bootstrap';
import "./css/styles.css";



function LandingPage(){
    return(
        <>
        {/* <div>
    <Container>
      <figure className="position-relative">
        <img src={Bgmasthead} alt="a latte" className="img-fluid" />
        <figcaption>
          A latte in the morning.
        </figcaption>
      </figure> 
    </Container>
    </div> */}

        <meta charSet="utf-8" />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1, shrink-to-fit=no"
  />
  <meta name="description" content="" />
  <meta name="author" content="" />
  <title>Landing Page - Start Bootstrap Theme</title>
  {/* Favicon*/}
  <link rel="icon" type="image/x-icon" href="assets/favicon.ico" />
  {/* Bootstrap icons*/}
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"
    rel="stylesheet"
    type="text/css"
  />
  {/* Google fonts*/}
  <link
    href="https://fonts.googleapis.com/css?family=Lato:300,400,700,300italic,400italic,700italic"
    rel="stylesheet"
    type="text/css"
  />
  {/* Core theme CSS (includes Bootstrap)*/}
  <link href="css/styles.css" rel="stylesheet" />
        {/* Navigation*/}
  <nav className="navbar navbar-light bg-light static-top">
    <div className="container">
      <a className="navbar-brand" href="#!">
        Start Bootstrap
      </a>
      <a className="btn btn-primary" href="#signup">
        Sign Up
      </a>
    </div>
  </nav>
  {/* Masthead*/}
  <header className="masthead">
    <div className="container position-relative">
        {/* <img src={Bgmasthead}
        alt="..."
        /> */}
        
      <div className="row justify-content-center">
        <div className="col-xl-6">
          <div className="text-center ">
            {/* Page heading*/}
            <h1 className="mb-5">
              Generate more leads with a professional landing page!
            </h1>
            {/* Signup form*/}
            {/* * * * * * * * * * * * * * * **/}
            {/* * * SB Forms Contact Form * **/}
            {/* * * * * * * * * * * * * * * **/}
            {/* This form is pre-integrated with SB Forms.*/}
            {/* To make this form functional, sign up at*/}
            {/* https://startbootstrap.com/solution/contact-forms*/}
            {/* to get an API token!*/}
            <form
              className="form-subscribe"
              id="contactForm"
              data-sb-form-api-token="API_TOKEN"
            >
              {/* Email address input*/}
              <div className="row">
                <div className="col">
                  <input
                    className="form-control form-control-lg"
                    id="emailAddress"
                    type="email"
                    placeholder="Email Address"
                    data-sb-validations="required,email"
                  />
                  <div
                    className="invalid-feedback text-white"
                    data-sb-feedback="emailAddress:required"
                  >
                    Email Address is required.
                  </div>
                  <div
                    className="invalid-feedback text-white"
                    data-sb-feedback="emailAddress:email"
                  >
                    Email Address Email is not valid.
                  </div>
                </div>
                <div className="col-auto">
                  <button
                    className="btn btn-primary btn-lg disabled"
                    id="submitButton"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </div>
              {/* Submit success message*/}
              {/**/}
              {/* This is what your users will see when the form*/}
              {/* has successfully submitted*/}
              <div className="d-none" id="submitSuccessMessage">
                <div className="text-center mb-3">
                  <div className="fw-bolder">Form submission successful!</div>
                  <p>To activate this form, sign up at</p>
                  <a
                    className="text-white"
                    href="https://startbootstrap.com/solution/contact-forms"
                  >
                    https://startbootstrap.com/solution/contact-forms
                  </a>
                </div>
              </div>
              {/* Submit error message*/}
              {/**/}
              {/* This is what your users will see when there is*/}
              {/* an error submitting the form*/}
              <div className="d-none" id="submitErrorMessage">
                <div className="text-center text-danger mb-3">
                  Error sending message!
                </div>
              </div>
            </form>
          </div>
        </div>
      
      </div>
      
    </div>
  </header>
  {/* Icons Grid*/}
  <section className="features-icons bg-light text-center">
    <div className="container">
      <div className="row">
        <div className="col-lg-4">
          <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
            <div className="features-icons-icon d-flex">
              <i className="bi-window m-auto text-primary" />
            </div>
            <h3>Fully Responsive</h3>
            <p className="lead mb-0">
              This theme will look great on any device, no matter the size!
            </p>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
            <div className="features-icons-icon d-flex">
              <i className="bi-layers m-auto text-primary" />
            </div>
            <h3>Bootstrap 5 Ready</h3>
            <p className="lead mb-0">
              Featuring the latest build of the new Bootstrap 5 framework!
            </p>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="features-icons-item mx-auto mb-0 mb-lg-3">
            <div className="features-icons-icon d-flex">
              <i className="bi-terminal m-auto text-primary" />
            </div>
            <h3>Easy to Use</h3>
            <p className="lead mb-0">
              Ready to use with your own content, or customize the source files!
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Image Showcases*/}
  <section className="showcase">
    <div className="container-fluid p-0">
      <div className="row g-0">
        <div
          className="col-lg-6 order-lg-2 text-white showcase-img">
            <img
            src={Bgshowcase1}
            alt="..."
            />
          </div>


        
        <div className="col-lg-6 order-lg-1 my-auto showcase-text">
          <h2 >Fully Responsive Design</h2>
          <p className="lead mb-0">
            When you use a theme created by Start Bootstrap, you know that the
            theme will look great on any device, whether it's a phone, tablet,
            or desktop the page will behave responsively!
          </p>
        </div>
      </div>
      <div className="row g-0">
        <div
          className="col-lg-6">
           <img
            src={Bgshowcase2}
            alt="..."
            /> 
          </div>
          
        
        <div className="col-lg-6 my-auto showcase-text">
          <h2 className='leadheading'>Updated For Bootstrap 5</h2>
          <p className="leadsecond mb-0">
            Newly improved, and full of great utility classes, Bootstrap 5 is
            leading the way in mobile responsive web development! All of the
            themes on Start Bootstrap are now using Bootstrap 5!
          </p>
        </div>
      </div>
      <div className="row g-0">
        <div
          className="col-lg-6 order-lg-2 text-white showcase-img">
            <img
            src={Bgshowcase3}
            alt="..."
            />
            </div>
        <div className="col-lg-6 order-lg-1 my-auto showcase-text">
          <h2 >Easy to Use &amp; Customize</h2>
          <p className="lead mb-0">
            Landing Page is just HTML and CSS with a splash of SCSS for users
            who demand some deeper customization options. Out of the box, just
            add your content and images, and your new landing page will be ready
            to go!
          </p>
        </div>
      </div>
    </div>
  </section>
  {/* Testimonials*/}
  <section className="testimonials text-center bg-light">
    <div className="container">
      <h2 className="mb-5">What people are saying...</h2>
      <div className="row">
        <div className="col-lg-4">
          <div className="testimonial-item mx-auto mb-5 mb-lg-0">
            <img
              className="img-fluid rounded-circle mb-3"
              src={Testimonials1}
              alt="..."
            />
            <h5>Margaret E.</h5>
            <p className="font-weight-light mb-0">
              "This is fantastic! Thanks so much guys!"
            </p>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="testimonial-item mx-auto mb-5 mb-lg-0">
            <img
              className="img-fluid rounded-circle mb-3"
              src={Testimonials2}
              alt="..."
            />
            <h5>Fred S.</h5>
            <p className="font-weight-light mb-0">
              "Bootstrap is amazing. I've been using it to create lots of super
              nice landing pages."
            </p>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="testimonial-item mx-auto mb-5 mb-lg-0">
            <img
              className="img-fluid rounded-circle mb-3"
              src={Testimonials3}
              alt="..."
            />
            <h5>Sarah W.</h5>
            <p className="font-weight-light mb-0">
              "Thanks so much for making these free resources available to us!"
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Call to Action*/}
  <section className="call-to-action text-white text-center" id="signup">
    <div className="container position-relative">
      <div className="row justify-content-center">
        <div className="col-xl-6">
          <h2 className="mb-4">Ready to get started? Sign up now!</h2>
          {/* Signup form*/}
          {/* * * * * * * * * * * * * * * **/}
          {/* * * SB Forms Contact Form * **/}
          {/* * * * * * * * * * * * * * * **/}
          {/* This form is pre-integrated with SB Forms.*/}
          {/* To make this form functional, sign up at*/}
          {/* https://startbootstrap.com/solution/contact-forms*/}
          {/* to get an API token!*/}
          <form
            className="form-subscribe"
            id="contactFormFooter"
            data-sb-form-api-token="API_TOKEN"
          >
            {/* Email address input*/}
            <div className="row">
              <div className="col">
                <input
                  className="form-control form-control-lg"
                  id="emailAddressBelow"
                  type="email"
                  placeholder="Email Address"
                  data-sb-validations="required,email"
                />
                <div
                  className="invalid-feedback text-white"
                  data-sb-feedback="emailAddressBelow:required"
                >
                  Email Address is required.
                </div>
                <div
                  className="invalid-feedback text-white"
                  data-sb-feedback="emailAddressBelow:email"
                >
                  Email Address Email is not valid.
                </div>
              </div>
              <div className="col-auto">
                <button
                  className="btn btn-primary btn-lg disabled"
                  id="submitButton"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </div>
            {/* Submit success message*/}
            {/**/}
            {/* This is what your users will see when the form*/}
            {/* has successfully submitted*/}
            <div className="d-none" id="submitSuccessMessage">
              <div className="text-center mb-3">
                <div className="fw-bolder">Form submission successful!</div>
                <p>To activate this form, sign up at</p>
                <a
                  className="text-white"
                  href="https://startbootstrap.com/solution/contact-forms"
                >
                  https://startbootstrap.com/solution/contact-forms
                </a>
              </div>
            </div>
            {/* Submit error message*/}
            {/**/}
            {/* This is what your users will see when there is*/}
            {/* an error submitting the form*/}
            <div className="d-none" id="submitErrorMessage">
              <div className="text-center text-danger mb-3">
                Error sending message!
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
  {/* Footer*/}
  <footer className="footer bg-light">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 h-100 text-center text-lg-start my-auto">
          <ul className="list-inline mb-2">
            <li className="list-inline-item">
              <a href="#!">About</a>
            </li>
            <li className="list-inline-item">⋅</li>
            <li className="list-inline-item">
              <a href="#!">Contact</a>
            </li>
            <li className="list-inline-item">⋅</li>
            <li className="list-inline-item">
              <a href="#!">Terms of Use</a>
            </li>
            <li className="list-inline-item">⋅</li>
            <li className="list-inline-item">
              <a href="#!">Privacy Policy</a>
            </li>
          </ul>
          <p className="text-muted small mb-4 mb-lg-0">
            © Your Website 2023. All Rights Reserved.
          </p>
        </div>
        <div className="col-lg-6 h-100 text-center text-lg-end my-auto">
          <ul className="list-inline mb-0">
            <li className="list-inline-item me-4">
              <a href="#!">
                <i className="bi-facebook fs-3" />
              </a>
            </li>
            <li className="list-inline-item me-4">
              <a href="#!">
                <i className="bi-twitter fs-3" />
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#!">
                <i className="bi-instagram fs-3" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
        </>
    )

}
export default LandingPage