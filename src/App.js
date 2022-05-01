import Intro from "./components/Intro";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import './styles/general.scss';


function App() {
    return (
        <>
            <Intro/>
            <Projects/>
            <Skills/>
            <Contact/>
        </>
    );
}

export default App;
