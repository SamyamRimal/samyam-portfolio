
import { useState, useEffect } from "react";
import { Analytics } from "@vercel/analytics/react"
import "./App.css";



const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Certificates", href: "#certifications" },
  ...(showProjects ? [{ label: "Projects", href: "#projects" }] : []),
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

function Navbar({ darkMode, setDarkMode }) {
  const [activeSection, setActiveSection] = useState("#home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Active section detection during scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = navLinks.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 220;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(`#${sections[i]}`);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`floating-hud-header ${scrolled ? "is-scrolled" : ""}`}>
      <nav className="hud-container">
        {/* Logo / Brand */}
        <a href="#home" className="hud-logo">
          <span className="logo-text">Samyam</span>
          <span className="logo-dot">.</span>
        </a>

        {/* Center Nav Items */}
        <div className="hud-nav-list">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href;
            return (
              <a
                key={link.label}
                href={link.href}
                className={`hud-link ${isActive ? "active" : ""}`}
                onClick={() => setActiveSection(link.href)}
              >
                {link.label}
              </a>
            );
          })}
        </div>

        {/* Right Actions */}
        <div className="hud-actions">
          

          <a href="#contact" className="hud-cta-button">
            <span>Let's Talk</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            className={`hud-hamburger ${mobileMenuOpen ? "open" : ""}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <div className={`hud-mobile-drawer ${mobileMenuOpen ? "active" : ""}`}>
        <div className="hud-mobile-links">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`hud-mobile-link ${activeSection === link.href ? "active" : ""}`}
              onClick={() => {
                setActiveSection(link.href);
                setMobileMenuOpen(false);
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="hud-mobile-cta"
            onClick={() => setMobileMenuOpen(false)}
          >
            Let's Talk 
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="hero section">
      <div className="hero-container">
        <div className="hero-text-content">
          <p className="eyebrow">WELCOME TO MY PORTFOLIO</p>

          <h1>
            Hi, I'm <span>Samyam Rimal.</span>
            <br />
            Aspiring Software Engineer.
          </h1>

          <p className="hero-description">
            I'm an IT student passionate about building useful,
            reliable software and turning ideas into reality.
            Currently exploring web development and backend engineering.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="button primary">
              Explore My Work
            </a>

            <a href="#contact" className="button secondary">
              Contact Me
            </a>
          </div>

          <p className="availability">
            <span className="pulse-dot"></span>
            Always learning. Always building.
          </p>
        </div>

        <div className="hero-visual">
          <div className="mascot-glow-backdrop"></div>
          <img
            src="/mas6.png"
            alt="Samyam Rimal Cyber Illustration"
            className="hero-mascot-img"
          />
        </div>
      </div>
    </section>
  );
}

function About() {
  const stats = [
    { value: "IT", label: "Student & Educator" },
    { value: "MERN & Java", label: "Core Tech Stack" },
    { value: "100%", label: "Building & Learning" },
  ];

  const highlights = [
    {
      icon: (
        <svg
          className="feature-icon-svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      ),
      title: "Software Engineering Focus",
      desc: "Passionate about full-stack web development, Dart/Flutter application architecture, and robust Java OOP fundamentals.",
    },
    {
      icon: (
        <svg
          className="feature-icon-svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      ),
      title: "Educator & Problem Solver",
      desc: "Teaching CS and math concepts to students while constantly solving real-world programming challenges.",
    },
    {
      icon: (
        <svg
          className="feature-icon-svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2a7 7 0 1 0 10 10" />
        </svg>
      ),
      title: "Creative Tech & Media",
      desc: "Combining technical logic with visual design, music performance, and media production.",
    },
  ];

  return (
    <section id="about" className="section about-section">
      <p className="eyebrow">GET TO KNOW ME</p>
      <h2>About Me</h2>

      <div className="about-grid">
        {/* Left Column: Bio & Interactive Terminal */}
        <div className="about-bio-column">
          <p className="section-description">
            I'm an Information Technology student and educator dedicated to
            mastering software engineering fundamentals. I build web applications, explore backend systems, and share my knowledge through teaching.
          </p>

          {/* Dev Terminal Block */}
          <div className="dev-terminal">
            <div className="terminal-header">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
              <span className="terminal-title">samyam.config.js</span>
            </div>
            <div className="terminal-body">
              <p><span className="keyword">const</span> <span className="variable">developer</span> = &#123;</p>
              <p className="indent"><span className="property">name</span>: <span className="string">"Samyam Rimal"</span>,</p>
              <p className="indent"><span className="property">role</span>: <span className="string">"Aspiring Software Engineer"</span>,</p>
              <p className="indent"><span className="property">location</span>: <span className="string">"Nepal"</span>,</p>
              <p className="indent"><span className="property">interests</span>: [<span className="string">"Web Dev"</span>, <span className="string">"Java"</span>, <span className="string">"UI/UX"</span>, <span className="string">"Music"</span>],</p>
              <p className="indent"><span className="property">status</span>: <span className="string">"Open for Collaboration"</span></p>
              <p>&#125;;</p>
            </div>
          </div>

          {/* Stat Badges */}
          <div className="about-stats-row">
            {stats.map((stat, idx) => (
              <div key={idx} className="stat-card">
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Focus Highlight Cards */}
        <div className="about-cards-column">
          {highlights.map((item, index) => (
            <div key={index} className="about-feature-card">
              <div className="feature-icon-wrapper">
                {item.icon}
              </div>
              <div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const skillsData = [
  // Frontend
  {
    name: "HTML & CSS",
    category: "Frontend",
    icon: (
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>HTML5</title><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/></svg>
    ),
  },
  {
    name: "JavaScript",
    category: "Frontend",
    brandColor: "#F7DF1E",
    icon: (
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>JavaScript</title><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"/></svg>
    ),
  },
  {
    name: "React",
    category: "Frontend",
    brandColor: "#61DAFB",
    icon: (
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>React</title><path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"/></svg>
    ),
  },

  // Backend
  {
    name: "Node.js",
    category: "Backend",
    brandColor: "#339933",
    icon: (
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Node.js</title><path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z"/></svg>
    ),
  },
  {
    name: "Express",
    category: "Backend",
    brandColor: "#ffffff",
    icon: (
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Express</title><path d="M12.262 16.666h1.146l6.975-9.325H19.22zm9.778 1.441v.004l-4.334-5.706-.557.74 4.873 6.682H.945V4.173h9.505l5.026 6.7.574-.772-4.374-5.928h.003l-.719-.945H0v17.544h24zM10.917 8.705a3.8 3.8 0 0 0-1.292-1.183q-.796-.45-1.916-.45c-.746 0-1.37.14-1.906.424a3.76 3.76 0 0 0-1.31 1.12 4.9 4.9 0 0 0-.75 1.581 7.17 7.17 0 0 0 0 3.696c.148.567.402 1.101.75 1.573a3.5 3.5 0 0 0 1.31 1.066q.803.39 1.906.389 1.77 0 2.739-.868.966-.867 1.328-2.457h-1.139q-.271 1.084-.977 1.734-.704.651-1.952.65-.812 0-1.392-.342a3.1 3.1 0 0 1-.957-.869 3.5 3.5 0 0 1-.551-1.182 5 5 0 0 1-.17-1.133 9 9 0 0 0-.015-.286 4.5 4.5 0 0 1 .015-.829c.047-.418.147-.83.296-1.223A3.7 3.7 0 0 1 5.54 9.05a2.9 2.9 0 0 1 .922-.742q.541-.28 1.246-.28c.47 0 .869.093 1.23.28q.541.281.922.742.379.461.587 1.057t.225 1.246H5.625l.004.957h6.182a7.3 7.3 0 0 0-.18-1.924 4.9 4.9 0 0 0-.715-1.68z"/></svg>
    ),
  },
  {
    name: "MongoDB",
    category: "Backend",
    brandColor: "#47A248",
    icon: (
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>MongoDB</title><path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z"/></svg>
    ),
  },
  {
    name: "SQL",
    category: "Backend",
    brandColor: "#00758F",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 3c-4.97 0-9 1.57-9 3.5S7.03 10 12 10s9-1.57 9-3.5S16.97 3 12 3zm-9 5v4c0 1.93 4.03 3.5 9 3.5s9-1.57 9-3.5V8c0 1.93-4.03 3.5-9 3.5S3 9.93 3 8zm0 5v4c0 1.93 4.03 3.5 9 3.5s9-1.57 9-3.5v-4c0 1.93-4.03 3.5-9 3.5S3 14.93 3 13z"/>
      </svg>
    ),
  },
  {
    name: "REST APIs",
    category: "Backend",
    brandColor: "#FF6C37",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l6 4.5-6 4.5z"/>
      </svg>
    ),
  },

  // Programming
  {
    name: "Java",
    category: "Programming",
    brandColor: "#5382A1",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M8.851 18.56s-.917.534.653.714c1.902.218 2.873.194 4.859-.212 0 0 .524.31-.073.551-2.476.998-6.173.388-5.439-1.053zm-1.074-2.472s-1.053.712.522.919c2.19.288 4.238.257 6.911-.318 0 0 .428.324-.131.523-3.232 1.155-8.528.513-7.302-1.124zm9.324-2.825s.689.588-.637 1.05c-2.457.868-6.326.969-9.066.262 0 0-.498-.312.274-.537 1.972-.575 6.079-.81 9.429-.775zm-3.238-5.321c.883 1.018.232 1.97-.282 2.853-.872 1.5-2.029 2.846-1.503 4.298.397.027 1.111-.355.975-.851-.316-1.154 1.258-2.22 2.115-3.149 1.153-1.251 1.168-2.911-.081-3.834-.339-.251-.83-.404-1.224-.317z"/>
      </svg>
    ),
  },
  {
    name: "Python",
    category: "Programming",
    brandColor: "#3776AB",
    icon: (
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Python</title><path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z"/></svg>
    ),
  },
  {
    name: "DSA",
    category: "Programming",
    brandColor: "#00E676",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="5" r="3" />
        <circle cx="5" cy="18" r="3" />
        <circle cx="19" cy="18" r="3" />
        <path d="M10 7.5L6.5 15.5M14 7.5l3.5 8M8 18h8" />
      </svg>
    ),
  },

  // Tools
  {
    name: "Git & GitHub",
    category: "Tools",
    brandColor: "#F05032",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.719.721.719 1.884 0 2.604-.719.719-1.883.719-2.602 0-.719-.72-.719-1.883 0-2.604.188-.188.414-.316.658-.387V8.752c-.244-.07-.47-.199-.658-.387-.539-.539-.676-1.334-.408-1.992L7.518 3.553.454 10.618c-.604.604-.604 1.582 0 2.188l10.48 10.478c.604.604 1.582.604 2.188 0l10.424-10.424c.603-.604.603-1.582 0-2.188"/>
      </svg>
    ),
  },
];

function Skills() {
  const [activeTab, setActiveTab] = useState("All");

  const categories = ["All", "Frontend", "Backend", "Programming", "Tools"];

  const filteredSkills =
    activeTab === "All"
      ? skillsData
      : skillsData.filter((skill) => skill.category === activeTab);

  return (
    <section id="skills" className="section skills-section">
      <p className="eyebrow">WHAT I WORK WITH</p>
      <h2>My Skills</h2>

      <p className="section-description">
        Technologies and frameworks I use to build scalable web applications and solve engineering problems.
      </p>

      {/* Category Filter Tabs with Hover + Click Trigger */}
      <div className="skills-tabs">
        {categories.map((category) => (
          <button
            key={category}
            className={`tab-button ${activeTab === category ? "active" : ""}`}
            onMouseEnter={() => setActiveTab(category)}
            onClick={() => setActiveTab(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Skills Grid with Animated Key */}
      <div className="skills-grid-enhanced">
        {filteredSkills.map((skill) => (
          <div
            className="skill-card-interactive animated-reveal"
            key={`${activeTab}-${skill.name}`}
            style={{ "--brand-color": skill.brandColor || "var(--accent)" }}
          >
            <div className="skill-logo-box">
              {skill.icon}
            </div>

            <div className="skill-info">
              <h3>{skill.name}</h3>
              <p>{skill.category}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const certificatesData = [
  {
    id: "cert-1",
    title: "HTML/CSS & Figma UI/UX Design",
    issuer: "Frontend & Design Foundations",
    date: "2025",
    skills: ["HTML5", "CSS3", "Figma", "Responsive Design"],
    credentialUrl: "#", // Add link or modal image path here
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    id: "cert-2",
    title: "Java Programming & Data Structures",
    issuer: "Software Fundamentals",
    date: "2026",
    skills: ["Java", "OOP", "Data Structures", "Algorithms"],
    credentialUrl: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    id: "cert-3",
    title: "Full-Stack MERN Development",
    issuer: "Web Engineering Certification",
    date: "2026",
    skills: ["MongoDB", "Express.js", "React", "Node.js"],
    credentialUrl: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
];

function Certifications() {
  return (
    <section id="certifications" className="section certs-section">
      <p className="eyebrow">VERIFIED CREDENTIALS</p>
      <h2>Certifications</h2>

      <p className="section-description">
        Formal certifications and coursework completed to solidify my software engineering and design foundation.
      </p>

      <div className="certs-grid">
        {certificatesData.map((cert) => (
          <div key={cert.id} className="cert-card">
            <div className="cert-header">
              <div className="cert-icon-box">{cert.icon}</div>
              <span className="cert-badge">Verified</span>
            </div>

            <div className="cert-body">
              <h3>{cert.title}</h3>
              <p className="cert-issuer">{cert.issuer} • {cert.date}</p>

              <div className="cert-tags">
                {cert.skills.map((skill) => (
                  <span key={skill} className="cert-tag">{skill}</span>
                ))}
              </div>
            </div>

            <div className="cert-footer">
              <a
                href={cert.credentialUrl}
                target="_blank"
                rel="noreferrer"
                className="cert-link"
              >
                View Credential ↗
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const projectsData = [
  {
    id: "proj-1",
    title: "School Media & Event Automation System",
    category: "Full Stack",
    badge: "Featured Project",
    status: "Completed",
    description:
      "A centralized web portal for managing event visual graphics, announcements, and school media workflows with role-based access.",
    tech: ["React", "Node.js", "Express", "MongoDB", "CSS Modules"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "proj-2",
    title: "Mobile Academic & Quiz Tracker",
    category: "Mobile",
    badge: "Cross-Platform",
    status: "In Development",
    description:
      "A mobile application built for students to track coursework exams, daily practice modules, and interactive bingo/quiz sessions.",
    tech: ["Flutter", "Dart", "REST API", "Provider"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "proj-3",
    title: "Restaurant Management & QR Portal",
    category: "Full Stack",
    badge: "Client Project",
    status: "Completed",
    description:
      "Digital menu and local business management interface built for seamless customer ordering and instant QR updates.",
    tech: ["React", "JavaScript", "Tailwind CSS", "Express"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
  },
];

function Projects() {
  return (
    <section id="projects" className="section projects-section">
      <p className="eyebrow">PORTFOLIO & SHOWCASE</p>
      <h2>Featured Projects</h2>

      <p className="section-description">
        A collection of web applications, mobile tools, and full-stack software systems I've architected and engineered.
      </p>

      <div className="projects-grid-cyber">
        {projectsData.map((project) => (
          <div key={project.id} className="project-card-cyber">
            {/* Image Banner & Action Overlay */}
            <div className="project-image-wrapper">
              <img src={project.image} alt={project.title} className="project-img" />
              <div className="project-overlay">
                <div className="overlay-buttons">
                  <a href={project.liveUrl} target="_blank" rel="noreferrer" className="proj-btn live-btn">
                    <span>Live Demo</span> ↗
                  </a>
                  <a href={project.githubUrl} target="_blank" rel="noreferrer" className="proj-btn code-btn">
                    <span>Source Code</span>
                  </a>
                </div>
              </div>
              <span className="project-badge">{project.badge}</span>
            </div>

            {/* Project Details */}
            <div className="project-content">
              <div className="project-meta-row">
                <span className="project-category">{project.category}</span>
                <span className={`project-status ${project.status === "Completed" ? "status-done" : "status-dev"}`}>
                  <span className="status-dot"></span> {project.status}
                </span>
              </div>

              <h3>{project.title}</h3>
              <p className="project-desc">{project.description}</p>

              {/* Tech Stack Pills */}
              <div className="project-tech-stack">
                {project.tech.map((techItem) => (
                  <span key={techItem} className="tech-pill">
                    {techItem}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const experienceData = [
  {
    id: "exp-1",
    role: "ICT Assistant & Educator",
    organization: "Gyan Sanskar International School",
    period: "Oct 2025 - Present",
    status: "Current Role",
    location: "Kathmandu, Nepal",
    brandColor: "#e63946", // Original school/brand accent color
    // School logo SVG container (renders half/full logo with theme hover)
    logo: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L1 7l11 5 9-4.09V17h2V7L12 2zm0 13l-8-3.64v5.18L12 21l8-4.46v-5.18L12 15z" />
      </svg>
    ),
    highlights: [
      "Infrastructure & Network: Manage overall school ICT infrastructure, troubleshooting system hardware, workstation maintenance, and campus network connectivity.",
      "Digital Media & Graphics: Design visual announcements, social media graphics, and event media assets for official school channels.",
      "Computer Science Educator: Teach core computer science and programming fundamentals to Grade 8 and 9 students.",
      "Mathematics Instructor: Deliver structured mathematics curriculum and problem-solving modules for Grade 6 and 7 classes.",
    ],
    techTags: ["IT Support", "Network Admin", "Graphic Design", "CS Education", "Mathematics"],
  },
  {
    id: "exp-2",
    role: "Exam Coordinator, Teacher & Computer Assistant",
    organization: "Gorakhkali English Boarding School",
    period: "June 2024 - Oct 2025",
    status: "Completed",
    location: "Kathmandu, Nepal",
    brandColor: "#e63946", // Original school/brand accent color
    logo: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z" />
      </svg>
    ),
    highlights: [
      "Examination Management: Oversee end-to-end examination operations, including schedule planning, question paper moderation, seating arrangements, and team coordination.",
      "School Operations & Software: Manage school management software (SMS), student academic databases, official documentation, and administrative reporting.",
      "Computer Science Teacher: Instructed Grade 5 through 8 students in foundational computer literacy, basic coding logic, and practical application skills.",
    ],
    techTags: ["Operations", "Database Admin", "SMS Software", "Exam Operations", "Teaching"],
  },
];

function Experience() {
  return (
    <section id="experience" className="section experience-section">
      <p className="eyebrow">CAREER & ROLES</p>
      <h2>Work Experience</h2>

      <p className="section-description">
        My professional history across ICT infrastructure, academic administration, media production, and computer science education.
      </p>

      <div className="experience-timeline">
        {experienceData.map((exp) => (
          <div
            key={exp.id}
            className="exp-card"
            style={{ "--org-brand": exp.brandColor }}
          >
            {/* Timeline Indicator Line */}
            <div className="timeline-marker">
              <span className="marker-dot"></span>
            </div>

            {/* Main Content Area */}
            <div className="exp-content">
              <div className="exp-header-row">
                <div>
                  <span className="exp-period">{exp.period}</span>
                  <h3>{exp.role}</h3>
                  <p className="exp-org">{exp.organization} • {exp.location}</p>
                </div>

                {/* Theme-Adaptive School Logo Container */}
                <div className="exp-logo-badge" title={exp.organization}>
                  {exp.logo}
                </div>
              </div>

              {/* Responsibilities */}
              <ul className="exp-highlights">
                {exp.highlights.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>

              {/* Skills / Focus Tags */}
              <div className="exp-tags">
                {exp.techTags.map((tag) => (
                  <span key={tag} className="exp-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


function Contact() {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const email = "samyamrimal@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="section contact-section">
      <p className="eyebrow">GET IN TOUCH</p>
      <h2>Contact Me</h2>

      <p className="section-description">
        Whether you have a project in mind, a question about my work, or an opportunity to collaborate, feel free to send a message!
      </p>

      <div className="contact-grid">
        {/* Left Column: Direct Info & Quick Copy */}
        <div className="contact-info-column">
          {/* Live Availability Badge */}
          <div className="status-banner">
            <span className="pulse-dot"></span>
            <span>Open for Collaboration & Full-Time Roles</span>
          </div>

          <div className="contact-cards-list">
            {/* Quick Copy Email Card */}
            <div className="contact-card" onClick={handleCopyEmail}>
              <div className="contact-icon-box">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div className="contact-card-text">
                <span className="card-label">Direct Email</span>
                <span className="card-value">{email}</span>
              </div>
              <button className="copy-badge">{copied ? "Copied! ✓" : "Copy"}</button>
            </div>

            {/* Location Card */}
            <div className="contact-card">
              <div className="contact-icon-box">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div className="contact-card-text">
                <span className="card-label">Location</span>
                <span className="card-value">Kathmandu, Nepal</span>
              </div>
            </div>
          </div>

          {/* Social Profiles */}
          <div className="socials-container">
            <p className="socials-title">Connect on Socials</p>
            <div className="social-links-grid">
              <a href="https://github.com/SamyamRimal" target="_blank" rel="noreferrer" className="social-pill">
                <span>GitHub</span> ↗
              </a>
              <a href="https://www.linkedin.com/in/samyamrimal/" target="_blank" rel="noreferrer" className="social-pill">
                <span>LinkedIn</span> ↗
              </a>
              <a href="https://www.instagram.com/__samyam.rml__/?hl=en" target="_blank" rel="noreferrer" className="social-pill">
                <span>Instagram</span> ↗
              </a>
              <a href="https://www.facebook.com/samyam.rimal.9" target="_blank" rel="noreferrer" className="social-pill">
                <span>Facebook</span> ↗
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Glassmorphism Interactive Form */}
        <div className="contact-form-column">
          <form className="contact-form-card" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input type="text" id="name" required placeholder="Name" />
            </div>

            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input type="email" id="email" required placeholder="abc@gmail.com" />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" required placeholder="Project Inquiry / Job Opportunity" />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" rows="5" required placeholder="Tell me about your idea or project..."></textarea>
            </div>

            <button type="submit" className="submit-btn">
              {formSubmitted ? "Message Sent! ✓" : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}



function Footer() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const kathmanduTime = new Date().toLocaleTimeString("en-US", {
        timeZone: "Asia/Kathmandu",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
      setTime(kathmanduTime);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer-cyber">
      {/* Animated Top Gradient Divider */}
      <div className="footer-glow-line"></div>

      <div className="footer-container">
        {/* Brand & Live System Status */}
        <div className="footer-brand-col">
          <a href="#home" className="footer-logo">
            Samyam<span className="dot">.</span>
          </a>
          <p className="footer-bio">
            Aspiring Software Engineer & Educator building modern web experiences and software systems in Nepal.
          </p>

          {/* Terminal Console Badge */}
          <div className="footer-console">
            <div className="console-indicator">
              <span className="console-dot"></span>
              <span className="console-status">SYSTEM_ONLINE</span>
            </div>
            <div className="console-time">
              <span>NPL_TIME: {time || "12:00:00 AM"}</span>
            </div>
          </div>
        </div>

        {/* Quick Links Column */}
        <div className="footer-nav-col">
          <span className="footer-heading">Navigation</span>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#certifications">Certificates</a></li>
            {showProjects && <li><a href="#projects">Projects</a></li>}
            <li><a href="#experience">Experience</a></li>
          <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Connect & Socials Column */}
        <div className="footer-nav-col">
          <span className="footer-heading">Socials</span>
          <ul>
            <li><a href="https://github.com" target="_blank" rel="noreferrer">GitHub ↗</a></li>
            <li><a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn ↗</a></li>
            <li><a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram ↗</a></li>
            <li><a href="https://tiktok.com" target="_blank" rel="noreferrer">TikTok ↗</a></li>
          </ul>
        </div>

        {/* Back to Top Action Column */}
        <div className="footer-action-col">
          <button className="back-to-top-btn" onClick={scrollToTop} title="Back to Top">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="18 15 12 9 6 15" />
            </svg>
            <span>Top</span>
          </button>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Samyam Rimal. Thank You for Visiting.</p>
      </div>
    </footer>
  );
}
function App() {
  // Set to true in the future when you are ready to display your projects!
  const showProjects = false;

  return (
    <div className="app">
      <Navbar showProjects={showProjects} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Certifications />
        {showProjects && <Projects />}
        <Experience />
        <Contact />
      </main>
      <Footer showProjects={showProjects} />
    </div>
  );
}

export default App;