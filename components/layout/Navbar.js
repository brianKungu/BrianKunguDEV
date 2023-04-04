import React from "react";
import { Link } from "react-scroll";
import { useDispatch } from "react-redux";
import { closeNav } from "@/redux/features/navSlice";

export default function Navbar() {
  const dispatch = useDispatch();

  const hideNav = () => {
    dispatch(closeNav());
  };
  return (
    <nav className="nav">
      <div className="nav-inner capitalize" onClick={hideNav}>
        <ul>
          <li>
            <Link
              to="header"
              className="nav-item"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              passHref
              onClick={hideNav}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="about"
              className="nav-item"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              passHref
              onClick={hideNav}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="portfolio"
              className="nav-item"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              passHref
              onClick={hideNav}
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              className="nav-item"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              passHref
              onClick={hideNav}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
