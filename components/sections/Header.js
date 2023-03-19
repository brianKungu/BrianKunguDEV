import Image from "next/image";
import React from "react";
// import Link from "next/link";
import * as Scroll from "react-scroll";
import { Link } from "react-scroll";
export default function Header() {
  return (
    <section id="header" className="flex items-center hidden-sec">
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
              class="btn"
            >
              Get to know me
            </Link>
            <Link to="#" class="btn">
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
  );
}
