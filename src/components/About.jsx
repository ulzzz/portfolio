import aboutSvg from '../assets/about.svg';
import SectionTitle from './SectionTitle';

const About = () => {
  return (
    <section className="bg-white py-20" id="about">
      <div className="align-element grid md:grid-cols-2 items-center gap-16">
        <img src={aboutSvg} alt="svg" className="w-full h-64" />
        <article>
          <SectionTitle text="About Me" />
          <p className="text-slate-600 mt-8 leading-loose">
            <b>What I'm Currently Doing:</b>
            <br />
            📚 Actively learning and applying the MERN stack. 💡 Exploring
            diverse web development technologies and trends. 🌐 Creating web
            applications to bolster my skills. 📈 Keeping up with the latest
            industry practices.
            <br />
            <br />
            <b> What I'm Looking For:</b>
            <br />
            I'm on the lookout for entry-level opportunities that allow me to
            put my knowledge to work, learn from experienced professionals, and
            contribute to exciting projects. Additionally, I'm open to freelance
            work, particularly in small-scale projects, where I can leverage my
            MERN stack expertise.
            <br />
            <br />
            <b>Why You Should Connect with Me: </b>
            <br />I bring a strong dedication to learning, a passion for
            technology, and an eagerness to tackle challenges. Collaboration and
            continuous growth are central to my approach.
          </p>
        </article>
      </div>
    </section>
  );
};
export default About;
