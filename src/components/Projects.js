import React from 'react';
import projects from '../data/projects';
import '../styles/Projects.scss';


const Projects = () => {
    console.log(projects);
    return (
        <section className="projects">
            <p className="projects__header header">
                Projects
            </p>

            <p className="projects__subheader subheader">
                a sampling of my work
            </p>

            <div className="projects__cards-container">

                {projects.map(project => {
                    // console.log(project);
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
