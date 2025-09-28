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
      <h2 className="section_title">Skills</h2>
      <span className="section_subtitle">My technical level</span>

      <div className="skills_container container grid">
        <Frontend />
        <Backend />
        <Mobile />
        <ProgrammingLanguages />
        <ArchitecturePattern />
        <ToolsOther />
      </div>
    </section>
  );
};

export default Skills;
