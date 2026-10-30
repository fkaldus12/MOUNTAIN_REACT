import React from "react";
import { contactText } from "../data/data";

const Contact = () => {
    return (
        <section id="contact">
            <div className="contact_inner">
                <div className="contact_title">contact</div>
                <div className="contact_lines">
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </div>
                <div className="contact_text">
                    <div className="text">
                        {contactText.map((contact, idx) => (
                            <div key={idx}>
                                <a href={contact.link}>{contact.title}</a>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="contact_lines bottom">
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </div>
            </div>
        </section>
    );
};

export default Contact;
