"use client";

import React, { useState } from "react";
import styles from "../styles/contact.module.css";
import toast, { Toaster } from "react-hot-toast";
import { FaSquarePhone } from "react-icons/fa6";
import { IoMailOutline } from "react-icons/io5";
import { FaHome } from "react-icons/fa";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errors = {};
    if (!name.trim()) {
      errors.name = "Name is required";
    }
    if (!email.includes("@")) {
      errors.email = "Email must be valid";
    }
    if (!email.trim()) {
      errors.email = "Email is required";
    }
    if (!message.trim()) {
      errors.message = "Message is required";
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      setName("");
      setEmail("");
      setMessage("");
      toast.success("Messsage sended. Thank you!", {
        icon: "👏",
        iconTheme: {
          primary: "#000",
          secondary: "#fff",
        },
      });
    }
  };

  const handleInputChange = (e, setter) => {
    const { name, value } = e.target;
    setter(value);
    if (errors[name]) {
      setErrors((prevErrors) => {
        const newErrors = { ...prevErrors };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  return (
    <div className={styles.container}>
      <Toaster />
      <div className={styles.formContainer}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <h2>Send me a message</h2>
          <div className={styles.formGroup}>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              value={name}
              onChange={(e) => handleInputChange(e, setName)}
            />
            {errors.name && <p className={styles.error}>{errors.name}</p>}
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => handleInputChange(e, setEmail)}
            />
            {errors.email && <p className={styles.error}>{errors.email}</p>}
            <textarea
              id="message"
              name="message"
              placeholder="Your Message"
              value={message}
              onChange={(e) => handleInputChange(e, setMessage)}
            ></textarea>
            {errors.message && <p className={styles.error}>{errors.message}</p>}
            <button type="submit" className={styles.button}>
              Send
            </button>
          </div>
        </form>
      </div>
      <div className={styles.textContainer}>
        <h4>Contact</h4>
        <h2>Contact Me</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
          dolorum, exercitationem soluta minus repellendus distinctio ut
          accusamus unde ducimus cum.
        </p>
        <div className={styles.icons}>
          <FaSquarePhone className={styles.icon} />
          <IoMailOutline className={styles.icon} />
          <FaHome className={styles.icon} />
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
