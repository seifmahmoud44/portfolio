import React, { useRef, useState } from "react";
import { FiPhoneCall } from "react-icons/fi";
import { ImWhatsapp } from "react-icons/im";
import { FaLinkedinIn } from "react-icons/fa";
import { AiOutlineGithub } from "react-icons/ai";
import emailjs from "@emailjs/browser";
import cv from "./cv.pdf";
import { FiDownloadCloud } from "react-icons/fi";

const Contact = () => {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [done, setDone] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_l3b3gzz",
        "template_nivpobe",
        form.current,
        "CnsobyU_iI9dnqpyF"
      )
      .then(
        (result) => {
          console.log(result.text);
          setName("");
          setEmail("");
          setMessage("");
          setDone(true);
        },
        (error) => {
          console.log(error.text);
          setDone(false);
        }
      );
  };
  return (
    <div className="contact">
      <div className="contact-links">
        <a href={cv} download className="item" rel="noreferrer">
          <FiDownloadCloud />
          <h3>CV</h3>
        </a>
        <a href="tel:+201024404781" className="item" rel="noreferrer">
          <FiPhoneCall />
          <h3>Call Me</h3>
        </a>
        <a
          href="https://wa.me/+201024404781"
          target="_blank"
          className="item"
          rel="noreferrer"
        >
          <ImWhatsapp />
          <h3>WhatsAPP</h3>
        </a>
        <a
          href="https://www.linkedin.com/in/seif-mahmoud97"
          target="_blank"
          className="item"
          rel="noreferrer"
        >
          <FaLinkedinIn />
          <h3>LinkedIn</h3>
        </a>
        <a
          className="item"
          href="https://github.com/seifmahmoud44"
          target="_blank"
          rel="noreferrer"
        >
          <AiOutlineGithub />
          <h3>GitHub</h3>
        </a>
      </div>
      <div className="wow">
        <form action="" ref={form} onSubmit={sendEmail}>
          <h1 className="message">LEAVE A MESSAGE</h1>
          <input
            type="text"
            placeholder="Name"
            required
            name="user_name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <input
            type="email"
            placeholder="Email"
            required
            name="user_email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <textarea
            id=""
            cols="30"
            rows="7"
            placeholder="Message"
            name="message"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />
          <button className={done && "active"} type="submit">
            {done ? "THANK YOU!" : "SEND"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
