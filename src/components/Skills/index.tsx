'use client'
import React from 'react'
import { SkillsWrapper } from './styles'
import SkillDataProvider from "./skillsDataProvider";
import SkillText from "./skillText";
import {
    Backend_skill,
    Frontend_skill,
    Full_stack,
    Other_skill,
    Skill_data,
} from "@/constants";

const Skills = () => (
    <SkillsWrapper>
        <SkillText />

        <div className="skill-list">
            {Skill_data.map((image, index) => (
                <div key={index}>
                    <SkillDataProvider
                        src={image.Image}
                        width={image.width}
                        height={image.height}
                        index={index}
                    />
                </div>
            ))}
        </div>

        <div className="skill-list">
            {Frontend_skill.map((image, index) => (
                <div key={index}>
                    <SkillDataProvider
                        src={image.Image}
                        width={image.width}
                        height={image.height}
                        index={index}
                    />
                </div>
            ))}
        </div>
        <div className="skill-list">
            {Backend_skill.map((image, index) => (
                <div key={index}>
                    <SkillDataProvider
                        src={image.Image}
                        width={image.width}
                        height={image.height}
                        index={index}
                    />
                </div>
            ))}
        </div>
        <div className="skill-list">
            {Full_stack.map((image, index) => (
                <div key={index}>
                    <SkillDataProvider
                        src={image.Image}
                        width={image.width}
                        height={image.height}
                        index={index}
                    />
                </div>
            ))}
        </div>
        <div className="skill-list">
            {Other_skill.map((image, index) => (
                <div key={index}>
                    <SkillDataProvider
                        src={image.Image}
                        width={image.width}
                        height={image.height}
                        index={index}
                    />
                </div>
            ))}
        </div>

        <div className="skill-bg">
            <div className="skill-bg--video">
                <video
                    preload="false"
                    playsInline
                    loop
                    muted
                    autoPlay
                    src="/cards-video.webm"
                />
            </div>
        </div>
    </SkillsWrapper>
)

export default Skills
