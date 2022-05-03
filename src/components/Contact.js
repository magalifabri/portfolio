import React, {useEffect, useState} from 'react';
import {motion, useViewportScroll} from "framer-motion";
import {FaGithub} from "react-icons/fa";
import {HiOutlineDownload} from "react-icons/hi";
import {MdOutlineEmail} from "react-icons/md";
import '../styles/Contact.scss';


const Contact = () => {
    const [isComplete, setIsComplete] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(true);
    const {scrollYProgress} = useViewportScroll();


    const debounce = (func, timeout = 300) => {
        let timer;

        return (...args) => {
            clearTimeout(timer);
            timer = setTimeout(() => {
                func.apply(this, args);
            }, timeout);
        };
    }

    useEffect(() => {
        setIsSmallScreen(window.innerWidth < 500); // todo: set to 768

        const handleResize = debounce(() => {
            setIsSmallScreen(window.innerWidth < 500); // todo: set to 768
        }, 100);

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);


    useEffect(() => scrollYProgress.onChange(v => {
        setIsComplete(v >= .95);
    }), [scrollYProgress]);


    const areBtnsOnBottom = () => isComplete || isSmallScreen;


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
                className={`contact__btn-wrapper${areBtnsOnBottom() ? '--bottom' : '--side'}`}>
                <motion.a className="contact__btn btn2" href="todo"
                          layout
                          variants={btnVariant}
                          initial="toggle"
                          animate="toggle"
                          whileHover="hover"
                          transition={btnTransition}
                >
                    <motion.span className="btn2__collapsing-content"
                                 variants={spanVariant}
                                 transition={btnTransition}
                    >
                        email
                    </motion.span>

                    <MdOutlineEmail className="btn2__icon"/>
                </motion.a>

                <motion.a className="contact__btn btn2" href="todo"
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
                          transition={{...btnTransition, delay: .2}}
                >
                    CV

                    <motion.span className="btn2__collapsing-content"
                                 variants={spanVariant}
                                 transition={{...btnTransition, delay: .2}}
                    >
                        <HiOutlineDownload className="btn2__icon"/>
                    </motion.span>
                </motion.a>
            </motion.div>
        </motion.section>
    );
};

export default Contact;
