import { Disclosure } from "@headlessui/react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import { IoCloseSharp } from "react-icons/io5";
import * as Scroll from "react-scroll";
import {Link} from "react-scroll/modules";
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("");
  const location = useRouter();
  const navigation = [
    { name: "About", href: "#", current: true },
    { name: "Services", href: "#", current: false },
    { name: "Portfolio", href: "#", current: false },
    { name: "Contact", href: "#", current: false },
  ];
  const activeLink =
    "bg-gradient-to-r from-cyan-500 to-teal-500 py-2 rounded-md px-4 text-primaryBackground";
  const inactiveLink = "";
  useEffect(() => {
    if ((location.asPath = "/")) {
      setActiveTab("Home");
    } else if (location.asPath === "#about") {
      setActiveTab("About");
    }
  }, [location.asPath]);
  return (
    <Disclosure as="nav" className="w-full">
      <>
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 top-0 sticky">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex justify-start">
              <Link href="/" passHref className="dev-name">
                BrianKungu
              </Link>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center md:hidden">
              {/* mobile menu button */}
              <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <span className="sr-only">Open main menu</span>
                {/* {open ? ( */}
                <HiOutlineBars3BottomRight
                  className="block h-6 w-6"
                  aria-hidden="true"
                />
                {/* ) : ( */}
                <IoCloseSharp />
                {/* )} */}
              </Disclosure.Button>
            </div>
            <div className="hidden ml-6 md:ml-0 md:block">
              <div className="flex space-x-4">
                <Link
                  className={
                    activeTab === "Home"
                      ? activeLink
                      : "hover:bg-cyan-500 hover:text-primaryBackground py-2 font-medium rounded-md px-4 text-sm text-gray-900"
                  }
                  onClick={() => setActiveTab("home")}
                  to="header"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  Home
                </Link>
                <Link
                  className={
                    activeTab === "/#about"
                      ? activeLink
                      : "hover:bg-cyan-500 hover:text-primaryBackground py-2 font-medium rounded-md px-4 text-sm text-gray-900"
                  }
                  onClick={() => setActiveTab("about")}
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  About
                </Link>
              </div>
            </div>
          </div>
        </div>
      </>
    </Disclosure>
  );
}
