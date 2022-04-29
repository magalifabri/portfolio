import React from 'react';
import {motion} from "framer-motion";
import projects from '../data/projects';
import '../styles/Projects.scss';


const Projects = () => {

    const projectCardAnimation = {
        hidden: {},
        show: {
            transition: {
                delayChildren: .25,
                staggerChildren: .25,
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
            transition: {
                ease: "easeOut",
                duration: 1,
            }
        },
    }


    return (
        <section className="projects">
            <div className="heading">
                <p className="projects__header heading__header">
                    Projects
                </p>

                <p className="projects__subheader heading__subheader">
                    a sampling of my work
                </p>
            </div>

            <div className="projects__cards-container">

                {projects.map((project, index) => {
                    return (
                        <motion.div className="project-card"
                                    key={index}
                                    variants={projectCardAnimation}
                                    initial="hidden"
                                    whileInView="show"
                        >
                            <motion.p className="project-card__title"
                                      variants={projectCardElementAnimation}
                            >
                                {project.name}
                            </motion.p>

                            <motion.div
                                className="project-card__screenshots-container"
                                variants={projectCardElementAnimation}
                            >
                                {project.desktopScreenshot &&
                                    <img
                                        className="project-card__screenshot project-card__screenshot--desktop"
                                        src={project.desktopScreenshot} alt=""
                                    />
                                }

                                {project.mobileScreenshot &&
                                    <img
                                        className="project-card__screenshot project-card__screenshot--mobile"
                                        src={project.mobileScreenshot} alt=""
                                    />
                                }
                            </motion.div>

                            <motion.p className="project-card__description"
                                      variants={projectCardElementAnimation}
                            >
                                {project.description}
                            </motion.p>

                            <motion.div
                                className="project-card__links-container"
                                variants={projectCardElementAnimation}
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
                    )
                })}
            </div>
        </section>
    );
};

export default Projects;
