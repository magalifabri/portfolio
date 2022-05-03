import React, {useEffect, useState} from 'react';
import {useViewportScroll} from "framer-motion";
import '../styles/Nav.scss';


const Nav = () => {
    const {scrollYProgress} = useViewportScroll();
    const [scrollingDown, setScrollingDown] = useState(false);


    useEffect(() => scrollYProgress.onChange(v => {
        setScrollingDown(scrollYProgress.getVelocity() > 0)
    }), [scrollYProgress]);


    return (
        <nav className={`nav ${scrollingDown ? 'nav--hidden' : ''}`}>
            <a href="#intro">intro</a>
            <a href="#projects">projects</a>
            <a href="#skills">skills</a>
            <a href="#contact">contact</a>
        </nav>
    );
};

export default Nav;
