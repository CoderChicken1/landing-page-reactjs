import React from "react";
import { useState } from "react";
import "./Header.css";
import Navbar from "../Navbar/Navbar";
import images from "../../constants/images";


const Header = () => {
    const [isShowMore, setIsShowMore] = useState(false);

    const toggleReadMoreLess = () => {
      setIsShowMore(!isShowMore);
    };
    return (
      <div className="header" style = {{
        background: `url(${images.header_bg}) center/cover no-repeat`
    }}>
        <Navbar />
        <div className="container">
          <div className="header__content text__center text__light flex flex__center">
            <div className="header__content--left">
              <h1 className="header__title fw__6">WE HELP YOU TO MAKE BETTER <span style={{ color: '#ffcc00b8' }}>SOFTWARE</span></h1>
              <p className="para__text" >
              It is a long established fact that a reader will be distracted by the readable content of a page when looking
              </p>
              {isShowMore && (
        <p className="para__text hiden">In many cases, this is an effective approach but in other cases it can make for a totally useless marketing campaign.

Virgin Mobile took a more effective approach in marketing their cell phone service by focusing not on the people that would be making the actual purchase, but instead focusing on the influencers of the people making the purchase. To make this campaign work, Virgin developed a viral website called Parental Enlightenment Kit which offers many tips often fairy funny ones to convince their parents to purchase a Virgin Mobile phone for them. By enlisting the teenagers Virgin has multiplied the effectiveness of their marketing campaign for 3 reasons:

1. The teenagers will continually mention the phone/service to their parents until they get it Virgin’s campaign will continue to work long after the teenager has left the computer.

2. This approach is exactly the type of thing that spreads virally. As teenagers tell their friends about it, it will increase exponentially in it’s effectiveness.

3. They have targeted the most likely decision maker rather than the person responsible for the purchase.

Companies in other industries have take the same approach and achieved amazing results. For example, Pfizer targeted men with erectile disfunction a more PC term for impotence rather than the doctors who would actually prescribe the drug Viagra to treat it. You can take the same approach to market your product/service and reap tremendous rewards.

              </p>)}
              <div className="header__button">
              <button className="btn btn__blue" onClick={toggleReadMoreLess}>
        {isShowMore ? "Read Less" : "Read More"}
      </button>
              </div>
            </div>
            <div className="header__content--right">
              <img src={images.introduce} alt="site logo" />
            </div>
          </div>
            <div className="header__content--bottom">
            <i class='arrow__left fa fa-chevron-left'></i>
            <i class='arrow__right fa fa-chevron-right'></i>
            </div>
        </div>
      </div>
    );
  };
  

export default Header;