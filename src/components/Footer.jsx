import { personalInfo } from '../../data/portfolioData';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container footer-content">
        <p>© {currentYear} {personalInfo.name}. Built with React & Vite.</p>
        <div className="footer-links">
          <a href={personalInfo.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={personalInfo.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={`mailto:${personalInfo.email}`}>Email</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;