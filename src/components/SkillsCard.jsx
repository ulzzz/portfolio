const SkillsCard = ({ icon, level, title, text }) => {
  return (
    <article className="shadow-lg p-3 rounded-lg  hover:scale-105 hover:bg-cyan-100 ease-in-out delay-100 duration-300 text-center md:text-start">
      <div className="flex justify-center items-center md:justify-start">
        <span>{icon}</span>
      </div>
      <h4 className="mt-6 font-bold ">{title}</h4>
      <h4 className="text-slate-600 italic text-sm">{level}</h4>
      <p className="mt-2 text-slate-500">{text}</p>
    </article>
  );
};
export default SkillsCard;
