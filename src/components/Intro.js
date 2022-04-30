import React from 'react';
import {motion} from "framer-motion";
import AnimatedSvgName from "./AnimatedSvgName";
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
                        initial="startState" // for children
                        animate="endState" // for children
        >
            <motion.div className="heading">
                <AnimatedSvgName/>

                {/*<p className="intro__title heading__header">*/}
                {/*    Magali Fabri*/}
                {/*</p>*/}

                <motion.p className="intro__subtitle heading__subheader"
                          variants={childVariant}
                          transition={transitionVariant.delay += staggerAmount, {...transitionVariant}}
                >
                    full stack web dev student
                </motion.p>
            </motion.div>

            <motion.p className="intro__description"
                      variants={childVariant}
                      transition={transitionVariant.delay += staggerAmount, {...transitionVariant}}
            >
                Little intro: what can people expect to find on this page? Morbi
                sit amet ipsum ac justo dignissim elementum. Proin mollis mauris
                vitae arcu feugiat, a ornare quam iaculis. Interdum et malesuada
                fames ac ante ipsum primis in faucibus. Suspendisse bibendum
                risus mattis leo faucibus, id luctus ligula varius.
            </motion.p>

            <motion.a className="intro__contact btn" href="todo"
                      variants={childVariant}
                      transition={transitionVariant.delay += staggerAmount, {...transitionVariant}}
            >
                contact
            </motion.a>
        </motion.section>
    );
};

export default Intro;
