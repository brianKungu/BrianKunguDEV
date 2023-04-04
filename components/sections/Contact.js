import Link from "next/link";
import React from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import {BsStackOverflow} from "react-icons/bs"

export default function Contact() {
  return (
    <section className="contact-section sec-padding hidden">
      <div className="container">
        <div className="row">
          <div className="section-title">
            <h2>Contact me</h2>
          </div>
        </div>
        <div className="row flex">
          <div className="contact-form">
            <form>
              <div className="input-group">
                <input
                  type="text"
                  placeholder="Name"
                  className="input-control"
                  required
                />
              </div>
              <div className="input-group">
                <input
                  type="email"
                  placeholder="johndoe@gmail.com"
                  className="input-control"
                  required
                />
              </div>
              <div className="input-group">
                <input
                  type="text"
                  placeholder="Subject"
                  className="input-control"
                  required
                />
              </div>
              <div className="input-group">
                <textarea
                  placeholder="Message"
                  className="input-control"
                  required
                ></textarea>
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
              <p>example@gmail.com</p>
            </div>
            <div className="contact-info-item">
              <h3>phone</h3>
              <p>0759391973</p>
            </div>
            <div className="contact-info-item">
              <h3>follow me</h3>
              <div className="social-links">
                <Link href="https://www.linkedin.com/in/brian-kungu-b96679206/" passhref target="_blank">
                  <AiFillLinkedin />
                </Link>
                <Link href="https://stackoverflow.com/users/11424285/briankungu" passhref target="_blank">
                  <BsStackOverflow />
                </Link>
                <Link href="https://github.com/brianKungu" passhref target="_blank">
                  <AiFillGithub />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
