import React, { useState } from "react";
import "./Contact.css";
import { MdEmail } from "react-icons/md";
import { BsLinkedin, BsWhatsapp } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const handleChanges = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        "service_zegyr97",
        "template_5gx4gys",
        {
          from_name: form.name,
          to_name: "Mohmmad Jamil Akhtar",
          from_email: form.email,
          to_email: "mdjamilakhtar793@gmail.com",
          message: form.message,
        },
        "FjERI1kG4h7n0mI30"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank You . I will get back to you as soon as possible.");
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.log(error);
        }
      );
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me.</h2>
      <div className="container contact-container">
        <div className="contact-options">
          <article className="contact-option">
            <MdEmail className="contact-icons" />
            <h4>Email</h4>
            <h5>mdjamilakhtar793@gmail.com</h5>
            <a
              href="mailto:mdjamilakhtar793@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Send Email
            </a>
          </article>
          <article className="contact-option">
            <BsLinkedin className="contact-icons" />
            <h4>LinkedIn</h4>
            <h5>mdjamilakhtar786</h5>
            <a
              href="https://www.linkedin.com/in/mdjamilakhtar786"
              target="_blank"
              rel="noreferrer"
            >
              Connect Me.
            </a>
          </article>

          <article className="contact-option">
            <BsWhatsapp className="contact-icons" />
            <h4>WhatsApp</h4>
            <h5>+91-7033246878</h5>
            <a
              href="https://api.whatsapp.com/send?phone=917033246878"
              target="_blank"
              rel="noreferrer"
            >
              Send Message
            </a>
          </article>
        </div>
        <form ref={formRef} onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChanges}
            placeholder="Enter Your Name"
            required
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChanges}
            placeholder="Enter your Email"
            required
          />
          <textarea
            name="message"
            value={form.message}
            onChange={handleChanges}
            rows="7"
            placeholder="Enter Yoyr Message........"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            {loading ? "Loading...." : "Send Query"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
