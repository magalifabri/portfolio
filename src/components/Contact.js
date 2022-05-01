import React, {useEffect, useState} from 'react';
import {motion, useViewportScroll} from "framer-motion";
import {useMediaQuery} from "react-responsive";
import {FaGithub} from "react-icons/fa";
import {HiOutlineDownload} from "react-icons/hi";
import {MdOutlineEmail} from "react-icons/md";
import '../styles/Contact.scss';


const Contact = () => {
    const [isComplete, setIsComplete] = useState(false);
    const {scrollYProgress} = useViewportScroll();


    const isSmallScreen = useMediaQuery(
        {maxWidth: 500}, undefined, () => {} // todo: set to 768
    );


    useEffect(() => scrollYProgress.onChange(v => {
        // console.log(v)
        setIsComplete(v >= .95);
    }), [scrollYProgress]);


    const btnVariant = {
        toggle: {
            gap: isComplete || isSmallScreen ? '.5rem' : 0,
        },

        hover: {
            gap: '.5rem',
            transition: {
                duration: .25,
            },
        },
    };

    const spanVariant = {
        toggle: {
            width: isComplete || isSmallScreen ? 'initial' : 0,
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
        <motion.section className="contact">
            <div className="heading">
                <p className="contact__header heading__header">
                    Contact
                </p>
                <p className="contact__subheader heading__subheader">
                    find out more / get in touch
                </p>
            </div>

            <motion.div className={`contact__btn-wrapper${isComplete || isSmallScreen ? '--bottom' : '--side'}`}>
                <motion.a className="btn2" href="todo"
                          layout
                          variants={btnVariant}
                          initial="toggle"
                          animate="toggle"
                          whileHover="hover"
                          transition={btnTransition}
                >
                    <motion.span
                        variants={spanVariant}
                        transition={btnTransition}
                    >
                        email
                    </motion.span>

                    <MdOutlineEmail className="btn2__icon"/>
                </motion.a>

                <motion.a className="btn2" href="todo"
                          layout
                          variants={btnVariant}
                          initial="toggle"
                          animate="toggle"
                          whileHover="hover"
                          transition={{...btnTransition, delay: .1}}
                >
                    CV

                    <motion.span
                        variants={spanVariant}
                        transition={{...btnTransition, delay: .1}}
                    >
                        <HiOutlineDownload className="btn2__icon"/>
                    </motion.span>
                </motion.a>

                <motion.a className="btn2" href="todo"
                          layout
                          variants={btnVariant}
                          initial="toggle"
                          animate="toggle"
                          whileHover="hover"
                          transition={{...btnTransition, delay: .2}}
                >
                    <motion.span
                        variants={spanVariant}
                        transition={{...btnTransition, delay: .2}}
                    >
                        GitHub
                    </motion.span>

                    <FaGithub className="btn2__icon"/>
                </motion.a>
            </motion.div>

            {/*<FaLinkedin className="btn__icon"/>*/}
        </motion.section>
    );
};

export default Contact;
