import React, {useEffect, useState, useRef} from 'react';
import {motion, useDomEvent, useViewportScroll} from "framer-motion";
import '../styles/Nav.scss';


const Nav = ({isSmallScreen}) => {
    const {scrollYProgress} = useViewportScroll();
    const [scrollingDown, setScrollingDown] = useState(false);
    const [inView, setInView] = useState('intro');
    const [mobileNavOpen, setMobileNavOpen] = useState(false);


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

    useDomEvent(useRef(window), "scroll", () => setMobileNavOpen(false));

    const navIsHidden = () => {
        return (!isSmallScreen && scrollingDown) || (isSmallScreen && !mobileNavOpen);
    }


    return (
        <>
            {isSmallScreen &&
                <motion.div className={`nav-shade ${mobileNavOpen ? 'nav-shade--active' : ''}`}
                     onClick={() => setMobileNavOpen(false)}
                     animate={{opacity: mobileNavOpen ? .9 : 0}}
                />
            }

            <nav
                className={`nav ${navIsHidden() ? 'nav--hidden' : ''}`}>
                <a className={`nav__link nav__link${inView === 'intro' ? '--active' : ''}`}
                   href="#intro">intro</a>
                <a className={`nav__link nav__link${inView === 'projects' ? '--active' : ''}`}
                   href="#projects">projects</a>
                <a className={`nav__link nav__link${inView === 'skills' ? '--active' : ''}`}
                   href="#skills">skills</a>
                <a className={`nav__link nav__link${inView === 'contact' ? '--active' : ''}`}
                   href="#contact">contact</a>
            </nav>

            <div className="navToggleBtn"
                 onClick={() => setMobileNavOpen(!mobileNavOpen)}
            >
                =
            </div>
        </>
    );
};

export default Nav;
