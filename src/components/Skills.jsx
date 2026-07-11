import { skills } from '../../data/portfolioData';

const Skills = () => {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <h2 className="section-title">My Tech Stack</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;