import React from "react";
import Image from "next/image";
import { AiOutlineClose } from "react-icons/ai";
import Link from "next/link";
import { useSelector } from "react-redux";
import { selectPortfolio } from "@/redux/features/portfolioSlice";
export default function PortfolioPopup({ closeModal }) {
  const portfolioWork = useSelector(selectPortfolio);
  console.log(portfolioWork)
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
                  src={portfolioWork.imgSrc}
                  alt="project-image"
                  width={1000}
                  height={1000}
                  priority
                />
              </div>
              <h3>{portfolioWork.name}</h3>
            </div>
            <div className="pp-body">
              <div className="description">
                <p>{portfolioWork.description}</p>
              </div>
              <div className="general-info">
                <ul className="list-style-none capitalize">
                  <li>
                    Created - <span>{portfolioWork.period}</span>
                  </li>
                  <li>
                    technologies used - <span>{portfolioWork.techStack}</span>
                  </li>
                  <li>
                    Role - <span>{portfolioWork.role}</span>
                  </li>
                  <li>
                    View online -{" "}
                    <span>
                      <Link href={portfolioWork.link} target="_blank">
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
