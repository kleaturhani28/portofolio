import React from 'react';
import Frontend from './Frontend';
import Backend from './Backend';
import Mobile from './Mobile';
import ProgrammingLanguages from './ProgrammingLanguages';
import ArchitecturePattern from './ArchitecturePattern';
import ToolsOther from './ToolsOther';
import './skills.scss';

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section_title">Technical Skills</h2>
      <span className="section_subtitle">Technologies & expertise</span>


      <div className="skills_container container grid">
        <Backend />
        <Frontend />
        <ProgrammingLanguages />
        <ArchitecturePattern />
        <Mobile />
        <ToolsOther />
      </div>
    </section>
  );
};

export default Skills;
