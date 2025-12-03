export default function App() {
return (
<div className="app-bg">
<header className="navbar">
<h1 className="logo">Nurzait Portfolio</h1>
<nav>
<a href="#home">Home</a>
<a href="#projects">Projects</a>
<a href="#contact">Contact</a>
</nav>
</header>


<section id="home" className="hero">
<h2>Welcome to My React Project</h2>
<p>Beautiful modern UI created for school presentation.</p>
<button className="btn">Explore More</button>
</section>


<section id="projects" className="cards-section">
<h2>My Projects</h2>
<div className="cards">
<div className="card">
<h3>Design UI</h3>
<p>Clean, modern, professional UI using glassmorphism.</p>
</div>
<div className="card">
<h3>Web Development</h3>
<p>Responsive and fast websites built with React + Vite.</p>
</div>
<div className="card">
<h3>Automation</h3>
<p>Smart projects with logic and clean code.</p>
</div>
</div>
</section>


<footer className="footer">
<p>Created by Nurzait — 2025</p>
</footer>
</div>
);
}