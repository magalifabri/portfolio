import React, {useRef, useState} from 'react';
import {motion, useDomEvent} from "framer-motion";
import ProjectCard from "./Projects.ProjectCard";
import projects from '../data/projects';
import '../styles/Projects.scss';


const Projects = () => {
    const [zoomedProjectId, setZoomedProjectId] = useState(-1);


    const closeZoomedScreenshots = () => {
        setZoomedProjectId(-1);
    }

    useDomEvent(useRef(window), "scroll", () => closeZoomedScreenshots());

    const toggleZoom = event => {
        if (zoomedProjectId !== -1) {
            closeZoomedScreenshots();
        } else {
            setZoomedProjectId(event.target.id);
        }
    }


    const thisProjectIsOpen = index => {
        return index === Number(zoomedProjectId);
    }


    return (
        <div className="projects-background-container">
            <section className="projects" id="projects">
                <div className="heading">
                    <h1 className="projects__header heading__header">
                        Projects
                    </h1>

                    <p className="projects__subheader heading__subheader">
                        a sample of my work
                    </p>
                </div>

                <div className="projects__cards-container">
                    <motion.div
                        className={`shade ${zoomedProjectId !== -1 ? 'shade--active' : ''}`}
                        animate={{opacity: zoomedProjectId !== -1 ? .9 : 0}}
                        onClick={() => closeZoomedScreenshots()}
                    />

                    {projects.map((project, index) =>
                        <ProjectCard key={index}
                                     project={project}
                                     index={index}
                                     toggleZoom={toggleZoom}
                                     thisProjectIsOpen={thisProjectIsOpen}
                        />
                    )}
                </div>
            </section>
        </div>
    );
};

export default Projects;
