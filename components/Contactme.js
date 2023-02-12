import Image from "next/image";
import React, { useState, useRef } from "react";
import axios from "axios";
import { CgRadioCheck, CgCheckO } from "react-icons/cg";
import { RiSendPlaneFill } from "react-icons/ri";
import { IoCopyOutline, IoCopy } from "react-icons/io5";

function Contactme({ showContactme }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isProject, setIsProject] = useState(false);
  const [details, setDetails] = useState("");
  const [message, setMessage] = useState("");
  const [emailCopied, setEmailCopied] = useState(false);
  const [numberCopied, setNumberCopied] = useState(false);
  const nameRef = useRef(null);
  const messageRef = useRef(null);
  const projectRef = useRef(null);
  const emailRef = useRef(null);

  const sendEmail = (e) => {
    axios
      .post("http://localhost:3000/api/contact", {
        name: name,
        email: email,
        message: message,
        details: details,
      })
      .then((res) => {
        setName("");
        setEmail("");
        setIsProject(false);
        setDetails("");
        setMessage("");
        nameRef.current.value = "";
        emailRef.current.value = "";
        if (projectRef && projectRef.current) {
          projectRef.current.value = "";
        }
        if (messageRef && messageRef.current) {
          messageRef.current.value = "";
        }
      })
      .catch((err) => {
        console.log(err);
        setName("");
        setEmail("");
        setIsProject(false);
        setDetails("");
        setMessage("");
        nameRef.current.value = "";
        emailRef.current.value = "";
        projectRef.current.value = "";
        messageRef.current.value = "";
      });
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("ihab.nouidjem01@gmail.com");
    setEmailCopied(true);
    const interval = setInterval(() => {
      setEmailCopied(false);
    }, 5000);
    return () => clearInterval(interval);
  };
  const copyNumber = () => {
    navigator.clipboard.writeText("0699608119");
    setNumberCopied(true);
    const interval = setInterval(() => {
      setNumberCopied(false);
    }, 5000);
    return () => clearInterval(interval);
  };

  return (
    <div className="contact-me" id="contactMe">
      <div className="contact-me-img">
        <Image
          src="/images/pexels-daniel-putzer-633409 (1).jpg"
          alt="contact me"
          height={1500}
          width={1500}
          loading="lazy"
        ></Image>
      </div>
      <div
        className={
          showContactme === -1
            ? "contact-me-form hide-items"
            : showContactme === 0
            ? "contact-me-form"
            : showContactme === 1 && "contact-me-form animate-items"
        }
      >
        <h2 className="h2 white">CONTACT ME</h2>
        <div className="contact-input-container">
          <h5 className="h5 white">NAME</h5>
          <input
            type="text"
            className="contact-input"
            onChange={(e) => {
              setName(e.target.value);
            }}
            ref={nameRef}
          />
        </div>
        <div className="contact-input-container">
          <h5 className="h5 white">EMAIL</h5>
          <input
            type="email"
            className="contact-input"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            ref={emailRef}
          />
        </div>
        <div className="contact-checkbox">
          <i
            className="small-icon white"
            onClick={() => {
              setIsProject(!isProject);
              console.log(isProject);
            }}
          >
            {isProject ? <CgCheckO /> : <CgRadioCheck />}
          </i>
          <h6 className="h6 light-blue">
            {"you'd like to work on a project ?"}
          </h6>
        </div>
        {isProject ? (
          <div className="contact-input-container">
            <h5 className="h5 white">PROJECT DETAILS</h5>
            <textarea
              className="contact-textarea"
              onChange={(e) => {
                setDetails(e.target.value);
              }}
              ref={projectRef}
            ></textarea>
          </div>
        ) : (
          <div className="contact-input-container">
            <h5 className="h5 white">MESSAGE</h5>
            <textarea
              className="contact-textarea"
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              ref={messageRef}
            ></textarea>
          </div>
        )}
        <div className="flex-center">
          <button className="button" onClick={() => sendEmail()}>
            <h6 className="h6 black">send</h6>
            <i className="icon black">
              <RiSendPlaneFill />
            </i>
          </button>
        </div>
        <div className="contact-contactInfo">
          <h5 className="h5 white">CONTACT INFO</h5>
          <div className="contact-contactInfo-item">
            <h6 className="h6 white-75">ihab.nouidjem01@gmail.com</h6>
            <i className="small-icon white-75" onClick={copyEmail}>
              {emailCopied ? <IoCopy /> : <IoCopyOutline />}
            </i>
          </div>
          <div className="contact-contactInfo-item">
            <h6 className="h6 white-75">0699608119</h6>
            <i className="small-icon white-75" onClick={copyNumber}>
              {numberCopied ? <IoCopy /> : <IoCopyOutline />}
            </i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contactme;
