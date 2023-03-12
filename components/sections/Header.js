import Image from "next/image";
import React from "react";

export default function Header() {
  return (
    <section id="header" className="flex items-center">
      <div className="container">
        <div className="grid md:grid-cols-2 items-center">
          <div className="home-text">
            <p>Hello, I'm</p>
            <h1>Brian Kung'u</h1>
            <h2>frontend web developer</h2>
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
