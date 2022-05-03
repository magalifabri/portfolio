import React, {useEffect, useState} from 'react';
import {useViewportScroll} from "framer-motion";
import '../styles/Nav.scss';


const Nav = () => {
    const {scrollYProgress} = useViewportScroll();
    const [scrollingDown, setScrollingDown] = useState(false);
    const [inView, setInView] = useState('intro');


    const getSectionInView = () => {
        const projectsSection = document.querySelector('#projects');
        const skillsSection = document.querySelector('#skills');
        const contactSection = document.querySelector('#contact');

        if (contactSection.getBoundingClientRect().top < (window.innerHeight / 2)) {
            return 'contact';
        } else if (skillsSection.getBoundingClientRect().top < (window.innerHeight / 2)) {
            return 'skills';
        } else if (projectsSection.getBoundingClientRect().top < (window.innerHeight / 2)) {
            return 'projects';
        } else {
            return 'intro';
        }
    }

    useEffect(() => scrollYProgress.onChange(() => {
        setScrollingDown(scrollYProgress.getVelocity() > 0);

        setInView(getSectionInView());
    }), [scrollYProgress]);


    return (
        <nav className={`nav ${scrollingDown ? 'nav--hidden' : ''}`}>
            <a className={inView === 'intro' ? 'active' : ''}
               href="#intro">intro</a>
            <a className={inView === 'projects' ? 'active' : ''}
                href="#projects">projects</a>
            <a className={inView === 'skills' ? 'active' : ''}
               href="#skills">skills</a>
            <a className={inView === 'contact' ? 'active' : ''}
               href="#contact">contact</a>
        </nav>
    );
};

export default Nav;
