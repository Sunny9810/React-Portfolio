import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "../style/Contact.css";

function Contact() {
    // Set initial state for name, email, message, and form errors
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [nameError, setNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [messageError, setMessageError] = useState(false);
    const [messageSent, setMessageSent] = useState(false);

     // Handle name input changes
  const handleNameChange = (e) => {
    setName(e.target.value);
    setNameError(false);
  };

  // Handle email input changes
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError(false);
  };

  // Handle message input changes
  const handleMsgChange = (e) => {
    setMessage(e.target.value);
    setMessageError(false);
  };

  
  // Validate email format using regex
  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    let valid = true;

    // Validate input fields and set errors if necessary
    if (name.length <= 5) {
      setNameError(true);
      valid = false;
    }
    if (!validateEmail(email)) {
      setEmailError(true);
      valid = false;
    }
    if (message.length < 150) {
      setMessageError(true);
      valid = false;
    }

     // If all fields are valid, log form data and reset inputs
     if (valid) {
        console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
        setName("");
        setEmail("");
        setMessage("");
        setMessageSent(true);
      }
    };


