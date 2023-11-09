import { FaGithubSquare } from 'react-icons/fa';
import { TbWorldWww } from 'react-icons/tb';

const ProjectsCard = ({ url, img, github, title, text }) => {
  return (
    <article className="bg-white rounded-lg shadow-md hover:shadow-xl duration-300">
      <img
        src={img}
        alt={title}
        className="w-full object-fit rounded-t-lg h-64"
      />
      <div className=" p-8 text-center md:text-start">
        <h2 className="text-xl tracking-wide font-medium">{title}</h2>
        <p className="mt-4 text-slate-700 leading-loose">{text}</p>
        <div className="mt-4 flex gap-x-4 justify-center items-center md:justify-start">
          {url ? (
            <a href={url}>
              <TbWorldWww className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
            </a>
          ) : null}
          <a href={github}>
            <FaGithubSquare
              className="h-8 w-8 text-slate-500 hover:text-black
              duration-300"
            />
          </a>
        </div>
      </div>
    </article>
  );
};
export default ProjectsCard;
