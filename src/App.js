import {useState} from "react";
import Intro from "./components/Intro";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import './styles/general.scss';


function App() {
    const [screenshotsZoomed, setScreenshotsZoomed] = useState(false);


    return (
        <>
            <Intro/>
            <Projects setScreenshotsZoomed={setScreenshotsZoomed}/>
            <Skills/>
            <Contact screenshotsZoomed={screenshotsZoomed}/>
        </>
    );
}

export default App;
