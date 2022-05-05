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
                          variants={childVariant}
                          transition={transitionVariant.delay += staggerAmount, {...transitionVariant}}
                >
                    web developer
                </motion.p>
            </motion.div>

            <motion.p className="intro__description"
                      variants={childVariant}
                      transition={transitionVariant.delay += staggerAmount, {...transitionVariant}}
            >
                Little intro: who am I ? what's on this page? Morbi
                sit amet ipsum ac justo dignissim elementum. Proin mollis mauris
                vitae arcu feugiat, a ornare quam iaculis. Interdum et malesuada
                fames ac ante ipsum primis in faucibus. Suspendisse bibendum
                risus mattis leo faucibus, id luctus ligula varius.
            </motion.p>

            <motion.a className="intro__contact btn"
                      href="#contact"
                      variants={childVariant}
                      transition={transitionVariant.delay += staggerAmount, {...transitionVariant}}
            >
                contact
            </motion.a>

            <motion.div className="intro__down-arrow-container"
                        variants={childVariant}
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
