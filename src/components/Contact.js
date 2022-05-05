import React, {useEffect, useState} from 'react';
import {motion, useViewportScroll} from "framer-motion";
import ContactForm from "./ContactForm";
import {FaGithub} from "react-icons/fa";
import {HiOutlineDownload} from "react-icons/hi";
import {MdOutlineEmail} from "react-icons/md";
import '../styles/Contact.scss';


const Contact = () => {
    const [isComplete, setIsComplete] = useState(false);
    const {scrollYProgress} = useViewportScroll();


    useEffect(() => scrollYProgress.onChange(v => {
        setIsComplete(v >= .85);
    }), [scrollYProgress]);


    const areBtnsOnBottom = () => isComplete || window.innerWidth < 768;


    const btnVariant = {
        toggle: {
            gap: areBtnsOnBottom() ? '.5rem' : 0,
            opacity: areBtnsOnBottom() ? 1 : .7,
            borderColor: areBtnsOnBottom() ? '#000' : 'rgba(255,255,255,0)',
            backgroundColor: areBtnsOnBottom() ? '#ffffff' : 'rgba(255,255,255,0)',
        },

        hover: {
            gap: '.5rem',
            opacity: 1,
            backgroundColor: '#fff',
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
                <p className="contact__header heading__header">
                    Contact
                </p>
                <p className="contact__subheader heading__subheader">
                    find out more / get in touch
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

                    <FaGithub className="btn2__icon"/>
                </motion.a>

                <motion.a className="contact__btn btn2" href="todo"
                          layout
                          variants={btnVariant}
                          initial="toggle"
                          animate="toggle"
                          whileHover="hover"
                          transition={{...btnTransition, delay: .0}}
                >
                    CV

                    <motion.span className="btn2__collapsing-content"
                                 variants={spanVariant}
                                 transition={{...btnTransition, delay: .0}}
                    >
                        <HiOutlineDownload className="btn2__icon"/>
                    </motion.span>
                </motion.a>
            </motion.div>

            <ContactForm/>
        </motion.section>
    );
};

export default Contact;
