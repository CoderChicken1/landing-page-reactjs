import React, { useState } from "react";
import data from "../../constants/data";
import images from "../../constants/images";
import "./Portfolio.css";
import { FaTimesCircle } from "react-icons/fa";

const Portfolio = () => {
  const [imageModal, setImageModal] = useState(false);
  const [imageSrc, setImageSrc] = useState("");

  const setImageOnModal = (src) => {
    setImageSrc(src);
    setImageModal(true);
  };

  return (
    <div className="container" id="portfolio">
      <div className="portfo__top text__center">
        <h1 className="portfo__top--title fw__6">PORTFOLIO</h1>
        <p className="para__text text__dark">
          There are many variations of passages of Lorem Ipsum available, but
          the majority
        </p>
      </div>
      <div className="portfo__image">
        <div
          className={
            imageModal ? "image__modal image__modal__show" : "image__modal"
          }
        >
          <div className="image__modal--content">
            <FaTimesCircle
              className="modal__close--btn text__light bg__blue"
              size={30}
              onClick={() => setImageModal(false)}
            />
            <img src = {imageSrc} alt = "" />
          </div>
        </div>

        <div className="portfo__content grid">
          {data.portfo.map((item, index) => {
            return (
              <div
                className="portfo__content--item"
                key={index}
                onClick={() => setImageOnModal(item.img)}
              >
                <img src={item.img_b} alt="" className="img" />
                <div className="icon">
                  <img src={images.icon_link} alt="" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="portfo-button text__center">
              <button className="btn btn__blue" >View More</button>
      </div>
    </div>
  );
};

export default Portfolio;
