import React from 'react';
import SkillsRow from "./SkillsRow";
import {frontEndTech, backEndTech} from "../data/tech";
import '../styles/Skills.scss';


const Skills = () => {
    return (
        <section className="skills">
            <div className="heading">
                <p className="skills__header heading__header">
                    Skills
                </p>

                <p className="skills__subheader heading__subheader">
                    tools in my kit
                </p>
            </div>

            <div className="skills__subsection">
                <p className="skills__subsection-header">
                    front-end
                </p>

                <SkillsRow skills={frontEndTech}/>
            </div>

            <div className="skills__subsection">
                <p className="skills__subsection-header">
                    back-end
                </p>

                <SkillsRow skills={backEndTech}/>
            </div>
        </section>
    );
};

export default Skills;
