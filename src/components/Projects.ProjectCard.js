import React from 'react';
import {motion} from "framer-motion";


const ProjectCard = ({project, index, toggleZoom, thisProjectIsOpen}) => {

    const projectCardAnimation = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: .15,
            }
        }
    }

    const projectCardElementAnimation = {
        hidden: {
            opacity: 0,
            y: 10
        },
        show: {
            opacity: 1,
            y: 0,
        },
    }

    const projectCardElementTransition = {
        ease: "easeOut",
        duration: .5,
    }


    return (
        <motion.div className="project-card"
                    variants={projectCardAnimation}
                    initial="hidden"
                    whileInView="show"
                    viewport={{
                        once: true,
                        margin: "0px 0px -100px 0px"
                    }}
        >
            <motion.h2 className="project-card__title"
                       variants={projectCardElementAnimation}
                       transition={{...projectCardElementTransition, delay: window.innerWidth < 768 ? .15 : 0}}
            >
                {project.name}
            </motion.h2>

            <motion.div
                className={`project-card__screenshots-container ${thisProjectIsOpen(index) ? 'project-card__screenshots-container--open' : ''}`}
                id={index}
                onClick={toggleZoom}
                variants={projectCardElementAnimation}
                transition={projectCardElementTransition}
            >
                <div className="project-card__screenshots-inner-container">
                    <motion.img
                        className="project-card__screenshot project-card__screenshot--desktop"
                        id={index}
                        src={project.desktopScreenshot}
                        alt={`screenshot of the project ${project.name} on desktop`}
                        layout
                    />

                    <motion.img
                        className="project-card__screenshot project-card__screenshot--mobile"
                        id={index}
                        src={project.mobileScreenshot}
                        alt={`screenshot of the project ${project.name} on mobile`}
                        layout
                    />
                </div>
            </motion.div>

            <motion.p className="project-card__description"
                      variants={projectCardElementAnimation}
                      transition={projectCardElementTransition}
            >
                {project.description}
            </motion.p>

            <motion.div className="project-card__links-container"
                        variants={projectCardElementAnimation}
                        transition={projectCardElementTransition}
            >
                <a className="project-card__link btn"
                   href={project.github}
                >
                    source code
                </a>

                <a className="project-card__link btn"
                   href={project.homepage}
                >
                    homepage
                </a>
            </motion.div>
        </motion.div>
    );
};

export default ProjectCard;
