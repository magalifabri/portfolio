import React, {useRef} from 'react';
import emailjs from '@emailjs/browser';
import '../styles/ContactForm.scss';


const ContactForm = () => {
    const form = useRef();


    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_tb6555l', 'template_ag424ot', form.current, 'h_58m2OwnzvowHZYB')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        e.target.reset();
    };


    return (
        <form className="contact-form" ref={form} onSubmit={sendEmail}>
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