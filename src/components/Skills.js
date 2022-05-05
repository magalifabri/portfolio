import React from 'react';
import SkillsRow from "./SkillsRow";
import {frontEndTech, backEndTech} from "../data/tech";
import '../styles/Skills.scss';


const Skills = () => {
    return (
        <section className="skills" id="skills">
            <div className="heading">
                <h1 className="skills__header heading__header">
                    Skills
                </h1>

                <p className="skills__subheader heading__subheader">
                    tools in my kit
                </p>
            </div>

            <SkillsRow skills={frontEndTech}/>

            <SkillsRow skills={backEndTech}/>
        </section>
    );
};

export default Skills;
