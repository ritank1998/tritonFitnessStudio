/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";
import Button from "../GlobalComponents/Button";
import ContactBg from "../Image/contactBg.jpg";
import emailjs from 'emailjs-com';
import "../Contact/contact.css"

const sendEmail = async (fullName, email, subject, message) => {
  try {
      const templateParams = {
          from_name: fullName,
          to_email: email,
          subject: subject,
          message: message,
      };

      const result = await emailjs.send(
          'YOUR_SERVICE_ID',
          'YOUR_TEMPLATE_ID',
          templateParams,
          'YOUR_USER_ID'
      );

      console.log('Email sent!', result);
      return true;
  } catch (error) {
      console.error('Error sending email:', error);
      return false;
  }
};




const Form = ({ text }) => (
  
<div css={styles} className="formContainer">
  <form id="myForm">
    <input type="text" id="nameInput" placeholder="Your Name*" />
    <input type="text" id="numberInput" placeholder="Your Email*" />
    <input type="text" id="subjectInput" placeholder="Subject" />
    <textarea id="messageInput" cols="30" rows="10" placeholder="Message"></textarea>
    <button onclick="sendEmail(fullName, email, subject, message)" className="btn">SEND MESSAGE</button>
  </form>
</div>

);

const styles = css`
  width: 100%;
  padding: 80px;
  min-height: 60vh;
  display: flex;
  background: url('${ContactBg}') no-repeat center/cover;
  form {
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    background: #fff;
    padding: 40px;
    border-radius: 6px;
    input,
    textarea {
      margin-bottom: 20px;
      padding: 14px;
      border: 1px solid #ddd;
      outline: none;
      color: #7a7a7a;
      &::placeholder {
        color: #7a7a7a;
      }
    }
    input {
      width: 47%;
      &:nth-child(3) {
        width: 100%;
      }
    }
    textarea {
      width: 100%;
    }
  }
  @media (max-width: 1200px) {
    padding: 80px 30px;
    form {
      max-width: 900px;
    }
  }
`;

export default Form;
