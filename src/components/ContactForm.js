import React, { useState } from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const [form, setForm] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .send("service_w1v087f", "template_9ltimss", form, "Stf7T_tRCxolhbkqs")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form className="contact-form" onSubmit={sendEmail}>
      <input type="hidden" name="contact_number" />
      <label>Name</label>
      <input type="text" name="user_name" required onChange={handleChange} />
      <label>Email</label>
      <input type="email" name="user_email" required onChange={handleChange} />
      <label>Message</label>
      <textarea name="message" required onChange={handleChange} />
      <input type="submit" value="Send" />
    </form>
  );
};

export default ContactForm;
