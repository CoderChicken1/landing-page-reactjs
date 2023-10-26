import { useState } from "react";
import React from "react";
import images from "../../constants/images";
import "./AboutUs.css";

const AboutUs = () => {
  const [isShowMore, setIsShowMore] = useState(false);

  const toggleReadMoreLess = () => {
    setIsShowMore(!isShowMore);
  };
  return(
  <div className="bg__whitesmoke" id="about">
    <div className="about section__padding text__left text__light flex flex__center bg__whitesmoke">
      <div className="about__content--left">
        <img src={images.about_us} alt="" />
      </div>
      <div className="about__content--right text__start">
        <h1 className="text__dark text__cap ">about us</h1>
        <p className="para__text text__dark">
        There are millions of users, and there will be many who might even use the same layouts. If MySpace layouts are chosen well, then you can enhance your profile a great deal.
        </p>
        {isShowMore && (
        <p className="para__text text__dark">
        This will help you get more contacts as well. But because of the demand, there will be the need to find unique layouts.So many users are quite confused about where they may find the right layouts. Some time has to be taken to find the ones that are unique, as there are plenty of sites that offer layouts for MySpace. Then users will also have to remember that they will have to look at the number of layouts being updated every day by various designers.To begin with, though you might use search engines, you must not pick the first site that you come across. This will be because there might be plenty of people using the same. So as much as possible; try to search for sites, which are not, accessed much. This will help a great deal, as there will be the chances that not many people have chosen these layouts.
        </p>
      )}

      <div className="service__button text-start">
              <button className="btn btn__blue" onClick={toggleReadMoreLess}>
        {isShowMore ? "Read Less" : "Read More"}
      </button>
              </div>
      </div>
    </div>
  </div>
)};

export default AboutUs;
