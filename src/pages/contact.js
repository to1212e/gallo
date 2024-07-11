import React from "react";
import "./contact.css";
import Navbar from "./Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <>
      <Navbar />

      

      <div id="Contact-info" className="ontoy">

        <div className="container mt-5">
          <div className="row">
            <div className="col">
              <h1 className="fw-bold display-1 text-center mt-2 pt-2 text-black">
                Contact Me
              </h1>
              <form className="contact-form">
                <div className="mb-3">
                  <label htmlFor="name" className="form-label text-black fw-bold">Name</label>
                  <input type="text" className="form-control" id="name" placeholder="Your Name" />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label text-black fw-bold">Email</label>
                  <input type="email" className="form-control" id="email" placeholder="Your Email" />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label text-black fw-bold">Message</label>
                  <textarea className="form-control" id="message" rows="3" placeholder="Your Message"></textarea>
                </div>
                <button type="submit" className="btn btn-primary fw-bold">Send Message</button>
              </form>

      <section id="contact" className="sisil py-5">
        <div className="container">
          <div className="card">
            <h2 className="text-center mb-5 text-black">My Social Media Accounts</h2>
           
                    <div className="social-icons text-center mt-4">
                      <a 
                        href="https://www.facebook.com/cecilgonzaga01"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="me-4 text-decoration-none"
                      >
                        <FontAwesomeIcon className="facebook" icon={faFacebook} size="3x" />
                      </a>
                      <a
                        href="https://www.instagram.com/sisil0666?igsh=MWsxZWZ1cXZ2MHN4bQ=="
                        target="_blank"
                        rel="noopener noreferrer"
                        className="me-4 text-decoration-none"
                      >
                        <FontAwesomeIcon className="instagram" icon={faInstagram} size="3x" />
                      </a>
                      <a
                        href="https://x.com/sisil_oreo06?t=1-YdatiVv1IH736S-wEovg&s=07"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="me-4 text-decoration-none"
                      >
                        <FontAwesomeIcon className="twitter" icon={faTwitter} size="3x" />
                      </a>
                      <a
                        href="https://www.tiktok.com/@cecilgonzaga.6"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="me-4 text-decoration-none"
                      >
                        <FontAwesomeIcon className="tiktok" icon={faTiktok} size="3x" />
                      </a>
                    </div>
                  </div>
                </div>
            
            
      
      </section>
      </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
