import './App.css'

const projects = [
  {
    title: 'Project One',
    description:
      'A short description of the first project. Explain the problem it solves and the technologies used to build it.',
    tech: ['React', 'Node.js', 'PostgreSQL'],
  },
  {
    title: 'Project Two',
    description:
      'A short description of the second project. Highlight any interesting challenges or results worth mentioning.',
    tech: ['Vite', 'TypeScript', 'Redis'],
  },
  {
    title: 'Project Three',
    description:
      'A short description of the third project. This could be a side project, open-source contribution, or experiment.',
    tech: ['Python', 'FastAPI', 'Docker'],
  },
]

const skills = [
  'JavaScript',
  'TypeScript',
  'React',
  'Node.js',
  'Python',
  'SQL',
  'Docker',
  'Git',
]

function App() {
  return (
    <>
      <header className="site-header">
        <nav className="site-nav" aria-label="Main navigation">
          <a href="#about" className="nav-link">
            About
          </a>
          <a href="#projects" className="nav-link">
            Projects
          </a>
          <a href="#skills" className="nav-link">
            Skills
          </a>
          <a href="#contact" className="nav-link">
            Contact
          </a>
        </nav>
      </header>

      <main>
        <section className="hero">
          <h1 className="hero-title">Your Name</h1>
          <p className="hero-subtitle">Full-Stack Developer</p>
          <p className="hero-tagline">
            I build clean, accessible web applications. Replace this tagline with
            a sentence that describes what you do.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View my work
            </a>
            <a href="#contact" className="btn btn-secondary">
              Get in touch
            </a>
          </div>
        </section>

        <section id="about" className="section">
          <h2 className="section-title">About</h2>
          <p className="section-text">
            Write a short bio here. Mention your background, what you are
            passionate about, and the kind of work you enjoy doing. Keep it to a
            few sentences so visitors get a quick sense of who you are.
          </p>
        </section>

        <section id="projects" className="section">
          <h2 className="section-title">Projects</h2>
          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <ul className="project-tech">
                  {project.tech.map((item) => (
                    <li className="project-tech-item" key={item}>
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="section">
          <h2 className="section-title">Skills</h2>
          <ul className="skills-list">
            {skills.map((skill) => (
              <li className="skill-item" key={skill}>
                {skill}
              </li>
            ))}
          </ul>
        </section>

        <section id="contact" className="section">
          <h2 className="section-title">Contact</h2>
          <p className="section-text">
            Interested in working together? Replace this with your email address
            or a contact link.
          </p>
          <a href="mailto:your.email@example.com" className="btn btn-primary">
            your.email@example.com
          </a>
        </section>
      </main>

      <footer className="site-footer">
        <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
      </footer>
    </>
  )
}

export default App
