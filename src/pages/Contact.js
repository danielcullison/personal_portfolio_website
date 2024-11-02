import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../styles/Contact.css";

const Contact = () => {
  const form = useRef();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    const formData = new FormData(form.current);
    const name = formData.get("user_name");
    const email = formData.get("user_email");
    const message = formData.get("message");

    if (!name || !email || !message) {
      setError("All fields are required.");
      return;
    }
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    emailjs
      .sendForm(
        "service_64k1n4o",
        "template_ex3fj3t",
        form.current,
        "joC_iRT3c9BMcQRaw"
      )
      .then(
        () => {
          setSuccess("Your message has been sent!");
          form.current.reset();
        },
        (error) => {
          setError("Failed to send the message, please try again.");
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="contact-section">
      <h2 className="contact-title">Contact Me</h2>
      <form ref={form} className="contact-form" onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" className="form-input" />
        <label>Email</label>
        <input type="email" name="user_email" className="form-input" />
        <label>Message</label>
        <textarea name="message" className="form-textarea" />
        <input type="submit" value="Send" className="submit-button" />
      </form>
      <div className="message-container">
        {error && <p className="error-message">{error}</p>}
        {success && <p className="success-message">{success}</p>}
      </div>
    </div>
  );
};

export default Contact;
