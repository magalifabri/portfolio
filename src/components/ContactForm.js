import React, {useRef, useState} from 'react';
import emailjs from '@emailjs/browser';
import {motion} from "framer-motion";
import '../styles/ContactForm.scss';


const ContactForm = () => {
    const [statusMessage, setStatusMessage] = useState(null);
    const form = useRef();


    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_tb6555l', 'template_ag424ot', form.current, 'h_58m2OwnzvowHZYB')
            .then((result) => {
                console.log(result.text);

                setStatusMessage(
                    <>
                        <p className="contact-form__message-header">Message sent</p>
                        <p className="contact-form__message-body">I'll get back to you as soon as possible!</p>
                    </>
                )

                e.target.reset();

                setTimeout(() => {
                    setStatusMessage(null);
                }, 7000);
            }, (error) => {
                console.log(error.text);

                setStatusMessage(
                    <>
                        <p className="contact-form__message-header contact-form__message-header--error">Message not sent</p>
                        <p className="contact-form__message-body">Try again later or use the EMAIL button above to send an email directly.</p>
                    </>
                )

                setTimeout(() => {
                    setStatusMessage(null);
                }, 7000);
            });

    };


    return (
        <form className="contact-form" ref={form} onSubmit={sendEmail}>
            {statusMessage &&
                <motion.div className="contact-form__message"
                            animate={{opacity: [0, 1, 1, 0]}}
                            transition={{ duration: 7, times: [0, 0.05, 0.95, 1] }}
                >
                    {statusMessage}
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