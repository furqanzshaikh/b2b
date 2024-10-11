"use client"
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import ReCAPTCHA from "react-google-recaptcha";
import Link from 'next/link';


const ContactForm = () => {
  const [captchaValue, setCaptchaValue] = useState(null);
  const [isChecked, setIsChecked] = useState(false);


  const handleForm = (event) => {
    event.preventDefault()
    if (!isChecked) {
      toast.error("Please agree the conditions!", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }
    if (captchaValue == null) {
      toast.error("Please verify that you are not a robot", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }
    event.target.reset()
    toast.success("Thanks For Your Message")
  }
  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
  };
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
      <form className="contact-form contact-form" onSubmit={handleForm}>
        <div className="row">
          <div className="col-lg-12">
            <div className="form-group">
              <input className="form-control" id="name" name="name" placeholder="Name" type="text" autoComplete='off' required />
              <span className="alert-error"></span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="form-group">
              <input className="form-control" id="email" name="email" placeholder="Email*" type="email" autoComplete='off' required />
              <span className="alert-error"></span>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group">
              <input className="form-control" id="phone" name="phone" placeholder="Phone" type="text" autoComplete='off' required />
              <span className="alert-error"></span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="form-group comments">
              <textarea className="form-control" id="comments" name="comments" placeholder="Tell Us About Project *" autoComplete='off' required></textarea>
            </div>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-center" >
          <div className='checkbox'>
          <input
          
            type="checkbox"
            value={isChecked}
            aria-label="Checkbox for following text input"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          </div>
          <div className='text-div'>
          <p className="form-control" style={{margin:0}}>
            By clicking I agree to receive communications from{" "}
            <Link href={"/"}>Digiintel.com</Link>. Please click here to
            take a look at our{" "}
            <Link href={"/privacy-policy"}>Privacy Policy</Link>.
          </p>
          </div>
          
        </div>
        <div className='mt-4'>
          <ReCAPTCHA className='pb-4'

            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
            onChange={handleCaptchaChange}
          />
        </div>


        <div className="row">

          <div className="col-lg-12">

            <button type="submit" name="submit" id="submit">
              <i className="fa fa-paper-plane"></i> Get in Touch
            </button>
          </div>
        </div>
        <div className="col-lg-12 alert-notification">
          <div id="message" className="alert-msg"></div>
        </div>

      </form>
    </>
  );
};

export default ContactForm;