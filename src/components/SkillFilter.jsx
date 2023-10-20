import { useState } from 'react';

const SkillFilter = ({ skills, onFilterChange }) => {
  const uniqueAbouts = Array.from(new Set(skills.map((skill) => skill.about)));

  const handleFilterChange = (e) => {
    const selectedAbout = e.target.value;
    onFilterChange(selectedAbout);
  };

  return (
    <div className="pt-4">
      <label htmlFor="filterSkills" className="font-semibold ">
        Filter:{' '}
      </label>
      <select id="filterSkills" onChange={handleFilterChange} className="w-40">
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
