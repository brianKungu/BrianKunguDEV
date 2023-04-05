import Link from "next/link";
import React, { useRef } from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { BsStackOverflow } from "react-icons/bs";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  const successNotification = () => {
    toast.success("Message sent successfully", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  const errorNotification = () => {
    toast.warn("Oopps!! Something went wrong", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const form = useRef();
  const onSubmit = () => {
    try {
      emailjs.sendForm(
        "service_gh6mleu",
        "template_gbikoc1",
        form.current,
        "_nV0JNc8O0COQ0OXO"
      );
      successNotification();
      reset();
    } catch (error) {
      errorNotification();
    }
  };
  return (
    <section className="contact-section sec-padding" id="contact">
      <div className="container">
        <div className="row">
          <div className="section-title">
            <h2>Contact me</h2>
          </div>
        </div>
        <div className="row grid md:grid-cols-2">
          <div className="contact-form my-6 md:my-0">
            <form onSubmit={handleSubmit(onSubmit)} ref={form}>
              <div className="input-group">
                <input
                  type="text"
                  placeholder="John Doe"
                  className="input-control"
                  name="fullName"
                  {...register("fullName", {
                    required: "Kindly provide your Full Name!",
                  })}
                />
                {errors.fullName && (
                  <p className="error-message mt-4">
                    {errors.fullName.message}
                  </p>
                )}
              </div>
              <div className="input-group">
                <input
                  type="email"
                  name="email"
                  placeholder="johndoe@gmail.com"
                  className="input-control"
                  {...register("email", {
                    required: "Kindly provide your Email Address!",
                  })}
                />
                {errors.email && (
                  <p className="error-message mt-4">{errors.email.message}</p>
                )}
              </div>
              <div className="input-group">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  className="input-control"
                  {...register("subject", {
                    required: "Kindly provide a Subject to your Email!",
                  })}
                />
                {errors.subject && (
                  <p className="error-message mt-4">{errors.subject.message}</p>
                )}
              </div>
              <div className="input-group">
                <textarea
                  placeholder="Message"
                  name="message"
                  className="input-control"
                  {...register("message", {
                    required: "Kindly provide a Message to your Email!",
                  })}
                ></textarea>
                {errors.message && (
                  <p className="error-message mt-4">{errors.message.message}</p>
                )}
              </div>
              <div className="submit-btn">
                <button type="submit" className="btn">
                  send message
                </button>
              </div>
            </form>
          </div>
          <div className="contact-info capitalize">
            <div className="contact-info-item">
              <h3>Email</h3>
              <p className="lowercase">bkungu07@gmail.com</p>
            </div>
            <div className="contact-info-item">
              <h3>phone</h3>
              <p>+254 759391973</p>
            </div>
            <div className="contact-info-item">
              <h3>follow me</h3>
              <div className="social-links">
                <Link
                  href="https://www.linkedin.com/in/brian-kungu-b96679206/"
                  passhref
                  target="_blank"
                >
                  <AiFillLinkedin />
                </Link>
                <Link
                  href="https://stackoverflow.com/users/11424285/briankungu"
                  passhref
                  target="_blank"
                >
                  <BsStackOverflow />
                </Link>
                <Link
                  href="https://github.com/brianKungu"
                  passhref
                  target="_blank"
                >
                  <AiFillGithub />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      ></ToastContainer>
    </section>
  );
}
