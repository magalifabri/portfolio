import React from 'react';
import {motion} from "framer-motion";
import AnimatedSvgName from "./AnimatedSvgName";
import {BsChevronCompactDown} from "react-icons/bs";
import '../styles/Intro.scss';


const Intro = () => {

    const childVariant = {
        startState: {
            opacity: 0,
            y: 5,
        },

        endState: {
            opacity: 1,
            y: 0,
        },
    };

    const transitionVariant = {
        duration: .75,
        ease: "easeOut",
        delay: 2.75,
    };

    const staggerAmount = .25;


    return (
        <motion.section className="intro"
                        id="intro"
                        initial="startState" // for children
                        animate="endState" // for children
        >
            <motion.div className="heading">
                <AnimatedSvgName/>

                <motion.p className="intro__subtitle heading__subheader"
                          variants={childVariant} // eslint-disable-next-line
                          transition={transitionVariant.delay += staggerAmount, {...transitionVariant}}
                >
                    web developer
                </motion.p>
            </motion.div>

            <motion.p className="intro__description"
                      variants={childVariant} // eslint-disable-next-line
                      transition={transitionVariant.delay += staggerAmount, {...transitionVariant}}
            >
                Hey! I'm Magali, a budding web developer with a strong attraction to clean design and cleaner code. With a critical eye for detail and buckets of hard work, I aim to build things that are a pleasure to view and interact with.
            </motion.p>

            <motion.a className="intro__contact btn"
                      href="#contact"
                      variants={childVariant} // eslint-disable-next-line
                      transition={transitionVariant.delay += staggerAmount, {...transitionVariant}}
            >
                contact
            </motion.a>

            <motion.div className="intro__down-arrow-container"
                        variants={childVariant} // eslint-disable-next-line
                        transition={transitionVariant.delay += staggerAmount, {...transitionVariant}}
            >
                <a href="#projects">
                    <BsChevronCompactDown className="intro__down-arrow"/>
                </a>
            </motion.div>
        </motion.section>
    );
};

export default Intro;
