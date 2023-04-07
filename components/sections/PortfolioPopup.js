import React from "react";
import Image from "next/image";
import { AiOutlineClose } from "react-icons/ai";
import Link from "next/link";

export default function PortfolioPopup({
  closeModal,
  name,
  description,
  period,
  techStack,
  role,
  img,
  link,
}) {
  return (
    <>
      <div className="portfolio-popup">
        <div className="pp-inner overlay" onClick={closeModal}>
          <div className="pp-content font-bold">
            <div className="pp-header">
              <button type="button" className="btn pp-close">
                <AiOutlineClose onClick={closeModal} />
              </button>
              <div className="pp-thumbnail">
                <Image
                  src={img}
                  alt="project-image"
                  width={1000}
                  height={1000}
                  priority
                />
              </div>
              <h3>{name}</h3>
            </div>
            <div className="pp-body">
              <div className="description">
                <p>{description}</p>
              </div>
              <div className="general-info">
                <ul className="list-style-none capitalize">
                  <li>
                    Created - <span>{period}</span>
                  </li>
                  <li>
                    technologies used - <span>{techStack}</span>
                  </li>
                  <li>
                    Role - <span>{role}</span>
                  </li>
                  <li>
                    View online -{" "}
                    <span>
                      <Link href={link} target="_blank">
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
