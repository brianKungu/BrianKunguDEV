import Navbar from "components/layout/Navbar";
import Image from "next/image";
import React from "react";
import * as Scroll from "react-scroll";
import { Link } from "react-scroll";
import { useSelector, useDispatch } from "react-redux";
import { openNav, closeNav } from "@/redux/features/navSlice";

export default function Header() {
  const navStatus = useSelector((state) => state.nav.value);
  console.log(navStatus);
  const dispatch = useDispatch();
  const displayNav = () => {
    dispatch(openNav());
  };

  const hideNav = () => {
    dispatch(closeNav());
  };
  return (
    <>
      {/* Header start */}
      <div className=" sticky top-0 z-10">
        <header className="header">
          <div className="container">
            <div className="row">
              <button
                type="button"
                className="nav-toggler float-right"
                onClick={displayNav}
              >
                <span></span>
              </button>
              {navStatus && <Navbar />}
            </div>
          </div>
        </header>
      </div>

      {/* Header end */}
      <section id="header" className="flex items-center">
        <div className="container">
          <div className="grid md:grid-cols-2 items-center my-6 md:my-0">
            <div className="home-text text-center md:text-left">
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
            <div className="home-img flex-1">
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
