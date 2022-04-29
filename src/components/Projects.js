import React, {useRef, useState} from 'react';
import {motion, useDomEvent} from "framer-motion";
import projects from '../data/projects';
import '../styles/Projects.scss';


const Projects = () => {
    const [zoomedProjectId, setZoomedProjectId] = useState(-1);

    useDomEvent(useRef(window), "scroll", () => setZoomedProjectId(-1));


    const toggleZoom = event => {
        if (zoomedProjectId !== -1) {
            setZoomedProjectId(-1);
        } else {
            setZoomedProjectId(event.target.id);
        }
    }


    const thisProjectIsOpen = index => {
        return index == zoomedProjectId;
    }


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
                                className={`project-card__screenshots-container ${thisProjectIsOpen(index) ? 'project-card__screenshots-container--open' : ''}`}
                                id={index}
                                variants={projectCardElementAnimation}
                                onClick={toggleZoom}
                            >
                                <div
                                    className="project-card__screenshots-inner-container">
                                    <motion.div className="shade"
                                                animate={{opacity: thisProjectIsOpen(index) ? .9 : 0}}
                                                onClick={() => setZoomedProjectId(-1)}
                                    />

                                    {project.desktopScreenshot &&
                                        <motion.img
                                            className="project-card__screenshot project-card__screenshot--desktop"
                                            id={index}
                                            src={project.desktopScreenshot}
                                            alt=""
                                            layout
                                        />
                                    }

                                    {project.mobileScreenshot &&
                                        <motion.img
                                            className="project-card__screenshot project-card__screenshot--mobile"
                                            id={index}
                                            src={project.mobileScreenshot}
                                            alt=""
                                            layout
                                        />
                                    }
                                </div>
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
