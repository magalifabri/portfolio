import {useEffect, useState} from "react";
import Nav from "./components/Nav";
import Intro from "./components/Intro";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import './styles/general.scss';


function App() {
    const [isSmallScreen, setIsSmallScreen] = useState(true);
    const [isShortScreen, setIsShortScreen] = useState(false);

    const debounce = (func, timeout = 300) => {
        let timer;

        return (...args) => {
            clearTimeout(timer);
            timer = setTimeout(() => {
                func.apply(this, args);
            }, timeout);
        };
    }

    useEffect(() => {
        setIsSmallScreen(window.innerWidth < 768);
        setIsShortScreen(window.innerHeight < 300);

        const handleResize = debounce(() => {
            setIsSmallScreen(window.innerWidth < 768);
            setIsShortScreen(window.innerHeight < 300);
        }, 100);

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);


    return (
        <>
            <Nav isSmallScreen={isSmallScreen}/>
            <Intro/>
            <Projects/>
            <Skills/>
            <Contact isShortScreen={isShortScreen}/>
        </>
    );
}

export default App;
