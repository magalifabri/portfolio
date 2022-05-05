import React, {useRef, useState} from 'react';
import emailjs from '@emailjs/browser';
import {motion} from "framer-motion";
import '../styles/ContactForm.scss';


const ContactForm = () => {
    const [emailSent, setEmailSent] = useState(false)
    const form = useRef();


    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_tb6555l', 'template_ag424ot', form.current, 'h_58m2OwnzvowHZYB')
            .then((result) => {
                console.log(result.text);
                setEmailSent(true);
            }, (error) => {
                console.log(error.text);
            });

        e.target.reset();
    };


    return (
        <form className="contact-form" ref={form} onSubmit={sendEmail}>
            {emailSent &&
                <motion.div className="contact-form__message"
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                >
                    <p className="contact-form__message-header">Message sent</p>
                    <p className="contact-form__message-body">I'll get back to you as soon as possible!</p>
                </motion.div>
            }

            <div>
                <label className="contact-form__label">
                    Name
                </label>

                <input className="contact-form__input-field"
                       type="text"
                       name="user_name"
                       required
                />
            </div>

            <div>
                <label className="contact-form__label">
                    Email
                </label>

                <input className="contact-form__input-field"
                       type="email"
                       name="user_email"
                       required
                />
            </div>

            <div>
                <label className="contact-form__label">
                    Message
                </label>

                <textarea
                    className="contact-form__input-field contact-form__input-field--big"
                    name="message"
                    required
                />
            </div>

            <input className="contact-form__submit-btn btn"
                   type="submit"
                   value="Send"/>
        </form>
    );
};

export default ContactForm;