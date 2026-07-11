const About = ({ personalInfo }) => {
  return (
    <section id="about" className="section about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>{personalInfo.bio}</p>
            <p>When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing my knowledge.</p>
            <div className="about-links">
              <a href={personalInfo.github} target="_blank" rel="noreferrer" className="btn primary">GitHub Profile</a>
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="btn secondary-outline">LinkedIn</a>
            </div>
          </div>
          <div className="about-image">
            <img src="/public/Pass Photo.jpg" alt="Profile" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;