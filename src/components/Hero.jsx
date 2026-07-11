const Hero = ({ personalInfo }) => {
  return (
    <section id="hero" className="hero">
      <div className="container hero-content">
        <p className="hero-greeting">Hello, I'm</p>
        <h1>{personalInfo.name}</h1>
        <h2>{personalInfo.title}</h2>
        <p className="hero-bio">{personalInfo.bio.substring(0, 100)}...</p>
        <div className="hero-cta">
          <a href="#projects" className="btn primary">View My Work</a>
          <a href={personalInfo.resume} className="btn secondary">Download CV</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;