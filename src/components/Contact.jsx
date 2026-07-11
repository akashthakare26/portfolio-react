const Contact = ({ personalInfo }) => {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="contact-text">I'm currently open for full-time position. If you have a position to fill, feel free to contact me.</p>
        
        {/* Netlify Form Setup */}
        <form name="contact" method="POST" data-netlify="true" className="contact-form">
          <input type="hidden" name="form-name" value="contact" />
          
          <div className="form-group">
            <input type="text" name="name" placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <input type="email" name="email" placeholder="Your Email" required />
          </div>
          <div className="form-group">
            <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
          </div>
          <button type="submit" className="btn primary">Send Message</button>
        </form>

        <div className="contact-direct">
          <p>Or reach out directly at: <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a></p>
        </div>
      </div>
    </section>
  );
};

export default Contact;