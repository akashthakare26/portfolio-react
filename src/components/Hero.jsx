const Hero = ({ personalInfo }) => {
  return (
    <section id="hero" className="hero">
      <div className="container">
        <h1>Hi, I'm {personalInfo.name}</h1>
        <h2>{personalInfo.title}</h2>
        <p>{personalInfo.bio}</p>
        <div className="hero-cta">
          <a href="#projects" className="btn primary">View My Work</a>
          <a href="#contact" className="btn secondary">Contact Me</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;