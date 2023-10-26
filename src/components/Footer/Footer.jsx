import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import { MdPhoneAndroid } from "react-icons/md";
import { CiMail } from "react-icons/ci";
import {FaFacebookF, FaLinkedin, FaYoutubeSquare} from "react-icons/fa";
import {AiFillTwitterCircle} from "react-icons/ai";
import images from "../../constants/images";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer" style = {{
       background: `url(${images.footer_bg}) center/cover no-repeat`,
       // paddingTop: 230
  }}>
      <div className="container">
        <div className="footer__content grid text__light text__center">
          <div className="footer__content--item">
            <h3 href="#" className="footer__title--left">
              Information
            </h3>
            <p className="para__text">
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt
            </p>
          </div>

          <div className="footer__content--item">
            <h3 href="#" className="footer__title--left">
              About Shop
            </h3>
            <div className="footer__about--content">
              <IoLocationSharp />
              <span>Address</span>
            </div>
            <div className="footer__about--content">
              <MdPhoneAndroid />
              <span>+01 1234567890</span>
            </div>
            <div className="footer__about--content">
              <CiMail />
              <span>demo@gmail.com</span>
            </div>
          </div>

          <div className="footer__content--item">
            <h3 className="footer__title--right">Instagram</h3>
            <div className="footer__insta grid">
                <img src={images.icon_insta} alt="test" />
                <img src={images.icon_insta} alt="test" />
                <img src={images.icon_insta} alt="test" />
                <img src={images.icon_insta} alt="test" />
                <img src={images.icon_insta} alt="test" />
                <img src={images.icon_insta} alt="test" />
            </div>
           
          </div>

          <div className="footer__content--item">
            <h3 className="footer__title--right">Newsletter</h3>
            <div className='footer__mail flex'>
                <input type='text' placeholder='Enter your email' />
                <button className="btn btn__blue text__upper">Subscribe</button>
              </div>
            <div className="icon__social flex">
            <FaFacebookF size={32}/>
            <AiFillTwitterCircle size={32}/>
            <FaLinkedin size={32}/>
            <FaYoutubeSquare size={32}/>  
            </div>
          </div>
        </div>
        <div className="footer__bottom">
        <hr style={{ width: '50%', margin: '0 auto' }} />
          <p className="para__text text__light">
            &copy; 2020 All Rights Reserved. Free html Templates
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
