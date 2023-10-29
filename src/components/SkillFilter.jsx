import { useState } from 'react';

const SkillFilter = ({ skills, onFilterChange }) => {
  const uniqueAbouts = Array.from(new Set(skills.map((skill) => skill.about)));

  const handleFilterChange = (e) => {
    const selectedAbout = e.target.value;
    onFilterChange(selectedAbout);
  };

  return (
    <div className="pt-4 flex justify-center items-center md:justify-start">
      <label htmlFor="filterSkills" className="font-semibold hidden md:inline">
        Filter: {''}
      </label>
      <select
        id="filterSkills"
        onChange={handleFilterChange}
        className="w-40 border-solid border-2 border-cyan-300 rounded-lg ml-2"
      >
        <option value="">All</option>
        {uniqueAbouts.map((about) => (
          <option key={about} value={about}>
            {about}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SkillFilter;
