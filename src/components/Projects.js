import React from 'react';
import projects from '../data/projects';
import '../styles/Projects.scss';


const Projects = () => {
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

                {projects.map(project => {
                    return (
                        <div className="project-card">
                            <p className="project-card__title">
                                {project.name}
                            </p>

                            <div className="project-card__screenshots-container">
                                <img className="project-card__screenshot project-card__screenshot--desktop"
                                     src={project.desktopScreenshot} alt=""
                                />

                                <img className="project-card__screenshot project-card__screenshot--mobile"
                                     src={project.mobileScreenshot} alt=""
                                />
                            </div>

                            <p className="project-card__description">
                                {project.description}
                            </p>

                            <div className="project-card__links-container">
                                <a className="project-card__link" href={project.github}>
                                    source code
                                </a>

                                <a className="project-card__link" href={project.homepage}>
                                    homepage
                                </a>
                            </div>
                        </div>
                        )
                })}
            </div>
        </section>
    );
};

export default Projects;
