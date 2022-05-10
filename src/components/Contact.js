import React, {useEffect, useState} from 'react';
import {motion, useViewportScroll} from "framer-motion";
import ContactForm from "./ContactForm";
import {MdOutlineEmail} from "react-icons/md";
import {FiGithub} from "react-icons/fi";
import '../styles/Contact.scss';


const Contact = ({isShortScreen}) => {
    const [isComplete, setIsComplete] = useState(false);
    const {scrollYProgress} = useViewportScroll();


    useEffect(() => scrollYProgress.onChange(v => {
        setIsComplete(v >= .83);
    }), [scrollYProgress]);


    const areBtnsOnBottom = () => isComplete || window.innerWidth < 768 || isShortScreen;


    const btnVariant = {
        toggle: {
            gap: areBtnsOnBottom() ? '.5rem' : 0,
            opacity: areBtnsOnBottom() ? 1 : .5,
            borderColor: areBtnsOnBottom() ? '#000' : 'rgba(255,255,255,0)',
            backgroundColor: areBtnsOnBottom() ? '#ffffff' : 'rgba(255,255,255,0)',
        },

        hover: {
            gap: '.5rem',
            opacity: 1,
            transition: {
                duration: .25,
            },
        },
    };

    const spanVariant = {
        toggle: {
            width: areBtnsOnBottom() ? 'initial' : 0,
        },

        hover: {
            width: 'initial',
            transition: {
                duration: .25,
            },
        },
    }

    const btnTransition = {
        duration: .5,
    }


    return (
        <motion.section className="contact" id="contact">
            <div className="heading">
                <h1 className="contact__header heading__header">
                    Contact
                </h1>

                <p className="contact__subheader heading__subheader">
                    <span>find out more</span>
                    <span>/ get in touch</span>
                </p>
            </div>

            <motion.div
                className={`contact__btn-wrapper${areBtnsOnBottom() ? '--bottom' : '--side'}`}
                initial={{opacity: areBtnsOnBottom() ? 1 : 0}}
                animate={{opacity: 1, transition: {delay: 4}}}
            >
                <motion.a className="contact__btn btn2"
                          href="mailto:magali_90@live.nl"
                          target="_blank"
                          layout
                          variants={btnVariant}
                          initial="toggle"
                          animate="toggle"
                          whileHover="hover"
                          transition={{...btnTransition, delay: .2}}
                >
                    <motion.span className="btn2__collapsing-content"
                                 variants={spanVariant}
                                 transition={{...btnTransition, delay: .2}}
                    >
                        email
                    </motion.span>

                    <MdOutlineEmail className="btn2__icon"/>
                </motion.a>

                <motion.a className="contact__btn btn2"
                          href="https://github.com/magalifabri"
                          layout
                          variants={btnVariant}
                          initial="toggle"
                          animate="toggle"
                          whileHover="hover"
                          transition={{...btnTransition, delay: .1}}
                >
                    <motion.span className="btn2__collapsing-content"
                                 variants={spanVariant}
                                 transition={{...btnTransition, delay: .1}}
                    >
                        GitHub
                    </motion.span>

                    <FiGithub className="btn2__icon"/>
                </motion.a>

                <motion.a className="contact__btn btn2"
                          href="/CV_Magali_Fabri.pdf"
                          layout
                          variants={btnVariant}
                          initial="toggle"
                          animate="toggle"
                          whileHover="hover"
                          transition={{...btnTransition, delay: .0}}
                >
                    <motion.span className="btn2__collapsing-content"
                                 variants={spanVariant}
                                 transition={{...btnTransition, delay: .0}}
                    >
                        resume
                    </motion.span>

                    <img className="btn2__icon btn2__icon--png"
                         src="https://img.icons8.com/material-outlined/96/282828/open-resume.png"
                         alt="simple icon of resume with down arrow to indicate download"
                    />
                </motion.a>
            </motion.div>

            <ContactForm/>
        </motion.section>
    );
};

export default Contact;
