import { useState, useEffect } from 'react';
import './App.css';

export default function Aqx() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Задержка для анимации появления
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app-container">
      {/* Навигация с анимацией */}
      <nav className="navbar glass-effect">
        <div className="nav-content">
          <div className="logo animate-float">
            <span className="logo-text">Portfolio</span>
          </div>
          <div className="nav-links">
            <a href="#home" className="nav-link hover-glow">Home</a>
            <a href="#projects" className="nav-link hover-glow">Projects</a>
            <a href="#contact" className="nav-link hover-glow">Contact</a>
          </div>
        </div>
      </nav>

      {/* Главная секция */}
      <section id="home" className={`hero-section ${isVisible ? 'fade-in' : ''}`}>
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="title-gradient animate-typing">
              Welcome to My <span className="highlight">React</span> Project
            </h1>
            <p className="subtitle shimmer">
              Beautiful modern UI created for school presentation
            </p>
            <button className="cta-button pulse-effect">
              Explore Projects
            </button>
          </div>
          <div className="hero-decoration">
            <div className="floating-shape shape-1"></div>
            <div className="floating-shape shape-2"></div>
            <div className="floating-shape shape-3"></div>
          </div>
        </div>
      </section>

      {/* Проекты с анимацией карточек */}
      <section id="projects" className="projects-section">
        <h2 className="section-title slide-in">
          My <span className="text-gradient">Projects</span>
        </h2>
        
        <div className="projects-grid">
          {/* Карточка 1 */}
          <div className="project-card card-hover">
            <div className="card-icon design-icon">
              <div className="icon-bg"></div>
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
            <div className="card-glow"></div>
          </div>

          {/* Карточка 2 */}
          <div className="project-card card-hover delay-1">
            <div className="card-icon web-icon">
              <div className="icon-bg"></div>
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
            <div className="card-glow"></div>
          </div>

          {/* Карточка 3 */}
          <div className="project-card card-hover delay-2">
            <div className="card-icon auto-icon">
              <div className="icon-bg"></div>
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
            <div className="card-glow"></div>
          </div>
        </div>
      </section>

      {/* Футер */}
      <footer className="footer">
        <div className="footer-content">
          <p className="footer-text">
            Made with ❤️ using React
          </p>
          <div className="social-links">
            <a href="#" className="social-icon">GitHub</a>
            <a href="#" className="social-icon">LinkedIn</a>
            <a href="#" className="social-icon">Twitter</a>
          </div>
        </div>
      </footer>
    </div>
  );
}