import React from "react";
import "./Contact.css";

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Submited");
      };
    return (
        <div className="contact section__padding bg__light" id="contact">
            <div className="container">
                <h2 className="section__title text__center">REQUEST A CALLBACK</h2>     
                <div className="contact__content">
                    <form onSubmit={handleSubmit}>
                        <div className="form__elem ">
                            <input type = "text" className="form__control" placeholder="Full Name" />
                        </div>
                        <div className="form__elem">
                            <input type = "text" className="form__control" placeholder="Phone Number" />
                        </div>
                        <div className="form__elem">
                            <input type = "text" className="form__control" placeholder="Email Address" />
                        </div>
                        <div className="form__elem ">
                            <textarea className="form__control" placeholder="Message" rows = "6"></textarea>
                        </div>
                        <button type = "submit" className="form__submit--btn btn btn__blue">Send</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;