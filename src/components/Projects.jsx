import ProjectsCard from './ProjectsCard';
import { projects } from '../data';
import SectionTitle from './SectionTitle';

const Projects = () => {
  return (
    <section className="pt-20 pb-5 align-element" id="projects">
      <SectionTitle text="projects" className="animate-fade-right" />
      <div className="py-14 grid lg:grid-cols-2 xl:grid-cols-3 gap-8 ">
        {projects.map((project) => {
          return <ProjectsCard key={project.id} {...project} />;
        })}
      </div>
    </section>
  );
};
export default Projects;
