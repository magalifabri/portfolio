import React from 'react';
import {motion} from "framer-motion";


const SkillsRow = ({skills}) => {

    const childVariant = {
        startState: {
            opacity: 0,
            y: 10
        },

        endState: {
            opacity: 1,
            y: 0,
            transition: {
                duration: .5,
                ease: "easeOut",
            }
        }
    };


    return (
        <motion.div className="skills__cards-container"
                    initial="startState"
                    whileInView="endState"
                    transition={{
                        delayChildren: .25,
                        staggerChildren: .1
                    }}
        >
            {skills.map((tech, index) => {
                return (
                    <motion.div className="skill-card"
                                key={index}
                                variants={childVariant}
                    >
                        <motion.div className="skill-card__icon-container"
                                    animate={{color: tech.color}}
                        >
                            {tech.icon}
                        </motion.div>

                        <span className="skill-card__name">
                            {tech.name}
                        </span>
                    </motion.div>
                )
            })}
        </motion.div>
    )
};

export default SkillsRow;
