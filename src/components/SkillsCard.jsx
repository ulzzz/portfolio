const SkillsCard = ({ icon, level, title, text }) => {
  return (
    <article className="shadow-lg p-3 rounded-lg">
      <span>{icon}</span>
      <h4 className="mt-6 font-bold">{title}</h4>
      <h4 className="text-slate-600 italic text-sm">{level}</h4>
      <p className="mt-2 text-slate-500">{text}</p>
    </article>
  );
};
export default SkillsCard;