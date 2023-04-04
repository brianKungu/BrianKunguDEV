import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import PortfolioPopup from "./PortfolioPopup";
import details from "utils/data";
import { showModal, hideModal } from "@/redux/features/modalSlice";
import { useSelector, useDispatch } from "react-redux";

export default function Portfolio() {
  // const [openModal, setOpenModal] = useState(false);
  // const handleChange = () => {
  //   setOpenModal(!openModal);
  // };

  const modalStatus = useSelector((state) => state.modal.value);
  const dispatch = useDispatch();
  const openModal = () => {
    dispatch(showModal());
  };

  const closeModal = () => {
    dispatch(hideModal());
  };
  return (
    <section
      className="hide-scrolling portfolio-section sec-padding hidden"
      id="portfolio"
    >
      <div className="container">
        <div className="row">
          <div className="section-title">
            <h2>Recent work</h2>
          </div>
        </div>
        <div className="grid md:grid-cols-3 items-center">
          {modalStatus && (
            <PortfolioPopup closeModal={closeModal} openModal={openModal} />
          )}

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
                  <button
                    type="button"
                    className="btn view-project-btn"
                    onClick={openModal}
                  >
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
                            <Link href="#" target="_blank">
                              view project
                            </Link>
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              ));
            })}

          {/* Portfolio item end */}
        </div>
      </div>
    </section>
  );
}
