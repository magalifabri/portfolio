import React from 'react';
import {
    FaCss3Alt,
    FaHtml5,
    FaLaravel,
    FaPhp,
    FaReact,
    FaSass
} from "react-icons/fa";
import {SiCplusplus, SiJavascript} from "react-icons/si";
import {GrMysql} from "react-icons/gr";
import {BsTerminalFill} from "react-icons/bs";


export const frontEndTech = [
    {
        name: 'ReactJS',
        icon: <FaReact className="skill-card__icon"/>,
        color: '#44cdf2'
    },
    {
        name: 'Sass',
        icon: <FaSass className="skill-card__icon"/>,
        color: '#c36291'
    },
    {
        name: 'JavaScript',
        icon: <SiJavascript className="skill-card__icon"/>,
        color: '#ddc02e'
    },
    {
        name: 'CSS',
        icon: <FaCss3Alt className="skill-card__icon"/>,
        color: '#216db1'
    },
    {
        name: 'HTML',
        icon: <FaHtml5 className="skill-card__icon"/>,
        color: '#d84923'
    },
];


export const backEndTech = [
    {
        name: 'Laravel',
        icon: <FaLaravel className="skill-card__icon"/>,
        color: '#f22b1f'
    },
    {
        name: 'PHP',
        icon: <FaPhp className="skill-card__icon"/>,
        color: '#7175aa'
    },
    {
        name: 'MySQL',
        icon: <GrMysql className="skill-card__icon"/>,
        color: '#1a5c83'
    },
    {
        name: 'C / C++',
        icon: <SiCplusplus className="skill-card__icon"/>,
        color: '#175494'
    },
    {
        name: 'bash',
        icon: <BsTerminalFill className="skill-card__icon"/>,
        color: '#282828'
    },
];
