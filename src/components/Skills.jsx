import React, { useState } from 'react';
import { skills } from '../data';
import SectionTitle from './SectionTitle';
import SkillsCard from './SkillsCard';
import SkillFilter from './SkillFilter'; // Import the SkillFilter component

const Skills = () => {
  const [filter, setFilter] = useState(''); // Initialize filter state

  const handleFilterChange = (selectedAbout) => {
    setFilter(selectedAbout);
  };

  const filteredSkills = filter
    ? skills.filter((skill) => skill.about === filter)
    : skills;

  return (
    <section className="py-16 align-element" id="skills">
      <SectionTitle text="tech stack" />
      <SkillFilter skills={skills} onFilterChange={handleFilterChange} />
      <div className="py-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filteredSkills.map((skill) => (
          <SkillsCard key={skill.id} {...skill} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
