import React, {useState} from "react";
import data from "../../constants/data";
import "./OurServices.css";

const OurServices = () => {
    const [isShowMore, setIsShowMore] = useState(false);

    const toggleReadMoreLess = () => {
      setIsShowMore(!isShowMore);
    };
    return (
        <div className="services section__padding bg__light" id="services">
            <div className="container">
            <h1 className="section__title text__cap text__dark">Our Services</h1>
                <div className="services__content grid">
                    {
                        data.services.map((service, index) => {
                            return (
                                <div className="services__content--item text__center" key = {index}>
                                    <img src = {service.img} alt = "" className="icon" />
                                    <h4 className="text__upper text">{service.title}</h4>
                                    <p className="para__text text__grey">{service.text}</p>
                                    {isShowMore && (
                                        <p className="para__text text__grey">{service.textAdd}</p>
      )}
                                </div>
                            )
                        })
                    }
                </div>
                <div className="service__button text-center">
              <button className="btn btn__blue" onClick={toggleReadMoreLess}>
        {isShowMore ? "Read Less" : "Read More"}
      </button>
              </div>
            </div>
        </div>
    )
}

export default OurServices;