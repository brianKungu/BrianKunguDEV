import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import PortfolioPopup from "./PortfolioPopup";
import details from "utils/data";
import { actionType } from "../context/reducer";
import { useStateValue } from "../context/stateProvider";

export default function Portfolio() {
  // const [openModal, setOpenModal] = useState(false);
  // const handleChange = () => {
  //   setOpenModal(!openModal);
  // };
  const [{ modalShow }, dispatch] = useStateValue();

  const showModal = () => {
    dispatch({
      type: actionType.SET_SHOW_MODAL,
      modalShow: !modalShow,
    });
  };
  return (
    <section
      className="hide-scrolling portfolio-section sec-padding"
      id="portfolio"
    >
      <div className="container">
        <div className="row">
          <div className="section-title">
            <h2>Recent work</h2>
          </div>
        </div>
        <div className="grid md:grid-cols-3 items-center">
          {openModal && <PortfolioPopup closeModal={closeModal} />}

          {/* Portfolio item start */}
          {details &&
            details.map((detail) => {
              return detail.recentWork.map((work, index) => (
                <div className="portfolio-item" key={index}>
                  <div className="portfolio-item-thumbnail">
                    <Image
                      src={work.imgSrc}
                      alt="portfolio item thumbnail"
                      height={300}
                      width={300}
                      loading="lazy"
                    />
                  </div>
                  <h3 className="portfolio-item-title">{work.name}</h3>
                  <button type="button" className="btn view-project-btn">
                    view project
                  </button>
                  <div className="portfolio-item-details">
                    <div className="description">
                      <p>{work.description}kjhkjhk</p>
                    </div>
                    <div className="general-info">
                      <ul>
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
                            <button aria-label="open modal" onClick={showModal}>
                              view project
                            </button>
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              ));
            })}

          {/* Portfolio item end */}

          {/* Portfolio item start */}
          <div className="portfolio-item">
            <div className="portfolio-item-thumbnail">
              <Image
                src="/images/testimage2.png"
                alt="portfolio item thumbnail"
                height={300}
                width={300}
                loading="lazy"
              />
            </div>
            <h3 className="portfolio-item-title">education course website</h3>
            <button type="button" className="btn view-project-btn">
              view project
            </button>
            <div className="portfolio-item-details">
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
                <ul>
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
          {/* Portfolio item end */}
        </div>
      </div>
    </section>
  );
}
