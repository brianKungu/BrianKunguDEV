import Image from "next/image";
import React from "react";
import * as Scroll from "react-scroll";
import { Link } from "react-scroll";
export default function Header() {
  return (
    <>
      {/* Header start */}
      <header className="header">
        <div className="container">
          <div className="row">
            <button type="button" className="nav-toggler float-right">
              <span></span>
            </button>
            <nav className="nav">
              <div className="nav-inner capitalize ">
                <ul>
                  <li>
                    <Link
                      href="header"
                      className="nav-item"
                      spy={true}
                      smooth={true}
                      offset={50}
                      duration={500}
                      passHref
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="about"
                      className="nav-item"
                      spy={true}
                      smooth={true}
                      offset={50}
                      duration={500}
                      passHref
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="portfolio"
                      className="nav-item"
                      spy={true}
                      smooth={true}
                      offset={50}
                      duration={500}
                      passHref
                    >
                      Portfolio
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="contact"
                      className="nav-item"
                      spy={true}
                      smooth={true}
                      offset={50}
                      duration={500}
                      passHref
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </header>
      {/* Header end */}
      <section id="header" className="flex items-center">
        <div className="container">
          <div className="grid md:grid-cols-2 items-center">
            <div className="home-text">
              <p>Hello, I&apos;m</p>
              <h1>Brian Kung&apos;u</h1>
              <h2>frontend web developer</h2>
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                passHref
                className="btn"
              >
                Get to know me
              </Link>
              <Link
                to="portfolio"
                className="btn"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                portfolio
              </Link>
            </div>
            <div className="home-img">
              <div className="img-box">
                <Image
                  src="/images/testimage2.png"
                  width={360}
                  height={360}
                  priority
                  alt="profile image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
