import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import PortfolioPopup from "./PortfolioPopup";
import details from "utils/data";
import { showModal, hideModal } from "@/redux/features/modalSlice";
import { setPortfolio, clearPortfolio } from "@/redux/features/portfolioSlice";
import { useSelector, useDispatch } from "react-redux";

export default function Portfolio() {
  const modalStatus = useSelector((state) => state.modal.value);
  const dispatch = useDispatch();
  const openModal = (work) => {
    dispatch(setPortfolio(work));
    dispatch(showModal());
  };

  const closeModal = () => {
    dispatch(clearPortfolio());
    dispatch(hideModal());
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
          {/* Portfolio item start */}
          {details &&
            details.map((detail) => {
              return detail.recentWork.map((work) => (
                <div className="portfolio-item" key={work.id}>
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
                    onClick={() => openModal(work)}
                  >
                    view project
                  </button>

                  {modalStatus && (
                    <PortfolioPopup
                      closeModal={closeModal}
                      openModal={openModal}
                    />
                  )}
                </div>
              ));
            })}

          {/* Portfolio item end */}
        </div>
      </div>
    </section>
  );
}
