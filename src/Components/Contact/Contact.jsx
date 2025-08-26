import React, { useEffect, useRef, useState } from "react";
import "./Contact.css";
import "./contactmedia.css";
import AOS from "aos";
import "aos/dist/aos.css";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactPage = () => {
  const form = useRef();
  const [formState, setFormState] = useState({
    user_name: "",
    user_email: "",
    message: "",
    phone: "",
  });

  useEffect(() => {
    AOS.init({ duration: 1000, offset: 100, once: true });
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_y3pszja",
        "template_gvox88g",
        form.current,
        { publicKey: "pcKZLEkfZA8j_y_GC" }
      )
      .then(
        () => {
          toast.success("Message sent!");
          setFormState({ user_name: "", user_email: "", message: "", phone: "" });
        },
        (error) => {
          console.log("FAILED...", error.text);
          toast.error("Message failed to send.");
        }
      );
  };

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div data-aos="fade-up" className="contact-wrapper">
        {/* Left Info Panel */}
        <div className="contact-info">
          <div className="justci">
            <h2>
              Contact <span className="highlight">Us</span>
            </h2>
            <div className="info-section" data-aos="fade-right">
              <p>
                Either you have a complaint or you need to get back to us, <br />
                kindly message us here. Our team will reply you within 24 hrs.
              </p>

              <p>
                <strong>Address</strong>
                <br />
                No 23, Konda Area, adjacent Lolese House, <br />
                Ilobu, Osun State
              </p>

              <p>
                <strong>Contact</strong>
                <br />
                hello@gmail.com
                <br />
                +918273634532
              </p>
            </div>

            <div className="social-icons" data-aos="fade-right">
              <p>Up tilers : Good work to our clients</p>
            </div>
          </div>
        </div>

        {/* Right Form Card */}
        <div className="contact-form" data-aos="fade-right">
          <h3>Contact Form</h3>
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="user_name"
              placeholder="Name"
              value={formState.user_name}
              onChange={handleChange}
              required
            />
            <input
              type="number"
              name="phone"
              placeholder="Phone number"
              value={formState.phone}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="user_email"
              placeholder="Email"
              value={formState.user_email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Message"
              value={formState.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit" data-aos="fade-right">
              Send Message <span className="arrow">→</span>
            </button>
          </form>
        </div>
      </div>

      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
};

export default ContactPage;
