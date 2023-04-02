import React, { useState } from "react";
import Image from "next/image";
import { AiOutlineClose } from "react-icons/ai";
import Link from "next/link";

export default function PortfolioPopup({ closeModal }) {
  //   const [showModal, setShowModal] = useState(false);
  //   const handleShow = () => {
  //     console.log("close ");
  //     setShowModal(!showModal);
  //   };
  return (
    <>
      <div className="portfolio-popup">
        <div className="pp-inner overlay">
          <div className="pp-content font-bold">
            <div className="pp-header">
              <button type="button" className="btn pp-close">
                <AiOutlineClose onClick={closeModal} />
              </button>
              <div className="pp-thumbnail">
                <Image
                  src="/images/alliedProperties.jpg"
                  alt="project-image"
                  width={1000}
                  height={1000}
                  priority
                />
              </div>
              <h3>Allied properties landing page</h3>
            </div>
            <div className="pp-body">
              <div className="description">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>
              <div className="general-info">
                <ul className="list-style-none capitalize">
                  <li>
                    Created - <span>20th March 2023</span>
                  </li>
                  <li>
                    technologies used - <span>HTML, CSS</span>
                  </li>
                  <li>
                    Role - <span>Frontend</span>
                  </li>
                  <li>
                    View online -{" "}
                    <span>
                      <Link href="#" target="_blank">
                        view project
                      </Link>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
