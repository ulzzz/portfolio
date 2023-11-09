import SectionTitle from './SectionTitle';
import Lottie from 'lottie-react';
import aboutAnimation from '../assets/animation_lo07x2ah.json';

const About = () => {
  return (
    <section className="bg-white py-20" id="about">
      <div className="align-element grid md:grid-cols-2 items-center gap-16">
        <Lottie
          animationData={aboutAnimation}
          loop={true}
          className="w-full h-80"
        />
        <article>
          <SectionTitle text="About Me" className="animate-fade-left" />
          <p className="text-slate-600 mt-8 leading-loose text-center md:text-start">
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
