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

            <SkillsRow skills={frontEndTech}/>

            <SkillsRow skills={backEndTech}/>
        </section>
    );
};

export default Skills;
