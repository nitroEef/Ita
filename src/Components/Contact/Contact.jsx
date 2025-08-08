import React from "react";
import "./Contact.css";
import "./contactmedia.css";

const ContactPage = () => {
  return (
    <div className="contact-wrapper">
      {/* Left Info Panel */}
      <div className="contact-info">
        <div className="justci">
        <h2>
          Contact <span className="highlight">Us</span>
        </h2>
        <div className="info-section">
          <p>either you have a complain or you need to get back to us, <br>
          </br>kindluy message us here, outr team will reply you within 24 hrs</p>

          <p><strong>Address</strong><br />
            no 23, Konda Area, adjacent Lolese House, <br />
          Ilobu, Osun State</p>

          <p><strong>Contact</strong><br />
            hello@gmail.com<br />
            +918273634532</p>
        </div>

        <div className="social-icons">
   
          <p>Up tilers : Good work to our clients</p>
          </div>
        </div>

      </div>


      {/* Right Form Card */}
      <div className="contact-form">
        <h3>Contact Form</h3>
        <form>
          <input type="text" placeholder="name" required />
          <input type="number" placeholder="phone number" required />
          <input type="email" placeholder="email" required />

          <textarea placeholder="message" required></textarea>
          <button type="submit">
            Send Message <span className="arrow">→</span>
          </button>
        </form>
      </div>
      
    </div>
  );
};

export default ContactPage;
