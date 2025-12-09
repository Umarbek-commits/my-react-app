import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  const handleContactClick = () => {
    const email = 'your.email@example.com';
    const subject = 'Contact from Portfolio';
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
  };

  return (
    <div className="app-container">
      {/* Навигация */}
      <nav className="navbar glass-effect">
        <div className="nav-content">
          <div className="logo animate-float">
            <span className="logo-text">Оятилло</span>
          </div>
          <div className="nav-links">
            <button 
              onClick={() => scrollToSection('home')}
              className={`nav-link hover-glow ${activeSection === 'home' ? 'active' : ''}`}
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className={`nav-link hover-glow ${activeSection === 'projects' ? 'active' : ''}`}
            >
              Projects
            </button>
            <button 
              onClick={handleContactClick}
              className="nav-link hover-glow contact-btn"
            >
              Contact
            </button>
          </div>
        </div>
      </nav>

      {/* Главная секция */}
      <section id="home" className={`hero-section ${isVisible ? 'fade-in' : ''}`}>
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="title-gradient animate-typing">
              Hi, I'm <span className="highlight">Оятилло</span>
            </h1>
            <h2 className="subtitle shimmer">
              Frontend Developer & UI Designer
            </h2>
            <p className="hero-description">
              Creating beautiful, modern web experiences with React
            </p>
            <div className="hero-buttons">
              <button 
                onClick={() => scrollToSection('projects')}
                className="cta-button pulse-effect"
              >
                View My Work
              </button>
              <button 
                onClick={handleContactClick}
                className="cta-button secondary"
              >
                Get In Touch
              </button>
            </div>
          </div>
          <div className="hero-image">
            <div className="profile-avatar">
              <div className="avatar-placeholder">
                <span className="avatar-text">Good</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Проекты */}
      <section id="projects" className="projects-section">
        <h2 className="section-title slide-in">
          My <span className="text-gradient">Projects</span>
        </h2>
        
        <div className="projects-grid">
          <div className="project-card card-hover">
            <div className="card-icon design-icon">
              <div className="icon-bg"></div>
              <span className="icon-emoji">🎨</span>
            </div>
            <h3 className="card-title">Design UI</h3>
            <p className="card-description">
              Clean, modern, professional UI using glassmorphism
            </p>
            <div className="card-tags">
              <span className="tag">Figma</span>
              <span className="tag">UI/UX</span>
              <span className="tag">Glass</span>
            </div>
            <div className="card-footer">
              <span className="author">By: Оятилло</span>
            </div>
            <div className="card-glow"></div>
          </div>

          <div className="project-card card-hover delay-1">
            <div className="card-icon web-icon">
              <div className="icon-bg"></div>
              <span className="icon-emoji">💻</span>
            </div>
            <h3 className="card-title">Web Development</h3>
            <p className="card-description">
              Responsive and fast websites built with React + Vite
            </p>
            <div className="card-tags">
              <span className="tag">React</span>
              <span className="tag">Vite</span>
              <span className="tag">Tailwind</span>
            </div>
            <div className="card-footer">
              <span className="author">By: Оятилло</span>
            </div>
            <div className="card-glow"></div>
          </div>

          <div className="project-card card-hover delay-2">
            <div className="card-icon auto-icon">
              <div className="icon-bg"></div>
              <span className="icon-emoji">⚙️</span>
            </div>
            <h3 className="card-title">Automation</h3>
            <p className="card-description">
              Smart projects with logic and clean code
            </p>
            <div className="card-tags">
              <span className="tag">Node.js</span>
              <span className="tag">Python</span>
              <span className="tag">API</span>
            </div>
            <div className="card-footer">
              <span className="author">By: Оятилло</span>
            </div>
            <div className="card-glow"></div>
          </div>
        </div>
      </section>

      {/* Контакты */}
      <section id="contact" className="contact-section">
        <h2 className="section-title slide-in">
          Get In <span className="text-gradient">Touch</span>
        </h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Ваше Имя</h3>
            <p className="contact-role">Frontend Developer</p>
            <div className="contact-details">
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <span>your.email@example.com</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📱</span>
                <span>+1 (234) 567-8900</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <span>Город, Страна</span>
              </div>
            </div>
          </div>
          <div className="contact-form">
            <h3>Send me a message</h3>
            <form onSubmit={(e) => e.preventDefault()}>
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <textarea placeholder="Your Message" rows="4" required></textarea>
              <button type="submit" className="cta-button">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Футер */}
      <footer className="footer">
        <div className="footer-content">
          <p className="footer-text">
            Made with ❤️ by <strong>Ваше Имя</strong> using React
          </p>
          <div className="social-links">
            <a 
              href="https://github.com/YOUR_USERNAME" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
            >
              <span className="social-icon">GitHub</span>
            </a>
            <a 
              href="https://linkedin.com/in/YOUR_PROFILE" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
            >
              <span className="social-icon">LinkedIn</span>
            </a>
            <a 
              href="https://twitter.com/YOUR_HANDLE" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
            >
              <span className="social-icon">Twitter</span>
            </a>
          </div>
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="back-to-top"
          >
            ↑ Back to Top
          </button>
        </div>
      </footer>
    </div>
  );
}

export default App;