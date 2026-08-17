import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a
                href="mailto:vaibhav.andhere06@gmail.com"
                data-cursor="disable"
              >
                vaibhav.andhere06@gmail.com
              </a>
            </p>
            <h4>Phone</h4>
            <p>
              <a href="tel:+19793268430" data-cursor="disable">
                +1 (979) 326-8430
              </a>
            </p>
            <h4>Location</h4>
            <p style={{ opacity: 0.85, marginTop: "5px" }}>Austin, TX 78758</p>
          </div>
          <div className="contact-box">
            <h4>Connect</h4>
            <a
              href="https://www.linkedin.com/in/vaibhavandhere"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
            <a
              href="mailto:vaibhav.andhere06@gmail.com"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Email Directly <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              BIM & Digital Delivery <br /> by <span>Vaibhav Andhere</span>
            </h2>
            <h5>
              <MdCopyright /> 2024 - 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
