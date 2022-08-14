import React, { useRef, useState } from "react";
import Gmail from "../../images/gmail.png";
import LinkedIn from "../../images/linkedin.png";
import Twitter from "../../images/twitter.png";
import emailjs from "emailjs-com";
import "./styles.css";

function Contact() {
  const formRef = useRef();
  const [done, setdone] = useState(false);

  const handleSubmitForm = (e) => {
    e.preventDefault();
    setdone(true);
    console.log("submit", formRef);
    emailjs
      .sendForm(
        "service_2gnzee3",
        "template_jzbk9ow",
        formRef.current,
        "ogrosBiv2F7-bPNRU"
      )
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
  };
  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Connect ?</h1>
          <div className="c-info-items">
            <div className="c-info-item">
              <img src={Gmail} alt="Gmail" className="c-icon" />
              pujarini97@gmail.com
            </div>
            <div className="c-info-item">
              <img src={LinkedIn} alt="LinkedIn" className="c-icon" />
              <a
                href="https://twitter.com/pujarini_codeit"
                target="_blank"
                rel="noreferrer"
              >
                /pujarini-jena
              </a>
            </div>
            <div className="c-info-item">
              <img src={Twitter} alt="twitter" className="c-icon" />
              <a
                href="https://twitter.com/pujarini_codeit"
                target="_blank"
                rel="noreferrer"
              >
                /pujarini_codeit
              </a>
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>Contact me!</b>
            <br />
            Fill the form and connect with me directly
          </p>
          <form className="c-form" ref={formRef} onClick={handleSubmitForm}>
            <input type="text" placeholder="Name" name="user_name" />
            <input type="text" placeholder="Subject" name="user_sub" />
            <input type="text" placeholder="Email" name="user_email" />
            <textarea rows="3" placeholder="Message" name="user_message" />
            <button>Submit</button>
            {done && "I Will reach out to you soon"}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
