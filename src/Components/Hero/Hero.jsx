// import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './Hero.scss';
import ThreeBackground from './ThreeBackground';

function Hero() {
  const { scrollY } = useScroll();
  // const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  // const y2 = useTransform(scrollY, [0, 500], [0, -100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const skills = [
    'React', 'React Router', 'JavaScript', 'TypeScript',
    'SCSS', 'Tailwind CSS', 'Three.js', 'Framer Motion',
    'Redux', 'Next.js', 'Node.js', 'Git'
  ];

  const projects = [
    {
      title: 'WhiteGym',
      description: 'Modern website for a fitness club with class booking and trainer profiles.',
      tech: ['React', 'Next.js', 'Tailwind CSS'],
      color: '#ff6b6b',
      link: 'https://whitegym-project-lgmv.vercel.app/',
      image: '/images/whitegym.png'
    },
    {
      title: 'Arzon Makler',
      description: 'Real estate listings and property management platform.',
      tech: ['React', 'TypeScript', 'Node.js'],
      color: '#00b894',
      link: 'https://arzon-makler-716s.vercel.app/',
      image: '/images/arzon_makler.png'
    },
    {
      title: 'Lexara AI School',
      description: 'AI-powered online school offering adaptive learning paths for developers.',
      tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
      color: '#6c5ce7',
      link: 'https://lexara-ai-school-ww.vercel.app/',
      image: '/images/lexara_ai_school.png'
    },
    {
      title: 'Voxa Language School',
      description: 'Interactive language-learning platform with multimedia lessons and practice tools.',
      tech: ['React', 'Redux', 'Sass'],
      color: '#00d4ff',
      link: 'https://voxa-language-school.vercel.app/',
      image: '/images/voxa_language_school.png'
    },
    {
      title: 'White Space',
      description: 'Creative studio showcase with 3D visuals and responsive layouts.',
      tech: ['Three.js', 'React', 'Framer Motion'],
      color: '#ffd166',
      link: 'https://white-space-three.vercel.app/',
      image: '/images/white_space.png'
    }
  ];

  return (
    <div className="hero">
      {/* 3D Background */}
      <ThreeBackground />

      {/* Hero Section */}
      <section id="top" className="hero__intro">
        <div className="container">
          <motion.div
            className="intro__content"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            style={{ opacity }}
          >
            <motion.div className="intro__label" variants={itemVariants}>
              <span className="label__dot"></span>
              <span>Available for freelance</span>
            </motion.div>

            <motion.h1 className="intro__title" variants={itemVariants}>
              <span className="title__line">
                <span className="gradient-text">Creative</span> Frontend
              </span>
              <span className="title__line">
                Developer &{' '}
                <span className="gradient-text">Designer</span>
              </span>
            </motion.h1>

            <motion.p className="intro__description" variants={itemVariants}>
              Crafting exceptional digital experiences where cutting-edge
              technology meets creative design. Specialized in building
              modern, performant, and visually stunning web applications.
            </motion.p>

            <motion.div className="intro__actions" variants={itemVariants}>
              <a href="#contact" className="btn btn-primary">
                <span>Let's Talk</span>
                <i className="bi bi-arrow-right"></i>
              </a>
              <a href="#projects" className="btn btn-secondary">
                <span>View Work</span>
                <i className="bi bi-grid-3x3"></i>
              </a>
            </motion.div>

            <motion.div className="intro__stats" variants={itemVariants}>
              <div className="stat">
                <div className="stat__number">3+</div>
                <div className="stat__label">Years Experience</div>
              </div>
              <div className="stat">
                <div className="stat__number">20+</div>
                <div className="stat__label">Projects Completed</div>
              </div>
              <div className="stat">
                <div className="stat__number">100%</div>
                <div className="stat__label">Client Satisfaction</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Floating particles */}
          <div className="particles">
            {[...Array(20)].map((_, i) => (
              <div 
                key={i} 
                className="particle"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${5 + Math.random() * 10}s`
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="hero__skills">
        <div className="container">
          <motion.div
            className="skills__content"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            <motion.div className="section__header" variants={itemVariants}>
              <h2>
                <span className="hash">#</span>Skills
              </h2>
              <div className="header__line"></div>
            </motion.div>

            <motion.div className="skills__grid" variants={itemVariants}>
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  className="skill__item"
                  whileHover={{ y: -5, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <div className="skill__glow"></div>
                  <span>{skill}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="hero__projects">
        <div className="container">
          <motion.div
            className="projects__content"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            <motion.div className="section__header" variants={itemVariants}>
              <h2>
                <span className="hash">#</span>Featured Projects
              </h2>
              <div className="header__line"></div>
              <a href="/" className="view-all">View all →</a>
            </motion.div>

            <div className="projects__grid">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  className="project__card"
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                  style={{ '--accent-color': project.color }}
                >
                  <div className="card__glow" style={{ background: project.color }}></div>

                  <div className="card__cover-wrapper">
                    {project.image && (
                      <img src={project.image} alt={project.title} className="card__cover" />
                    )}
                  </div>

                  <div className="card__number">0{index + 1}</div>

                  <div className="card__content">
                    <h3 className="card__title">{project.title}</h3>
                    <p className="card__description">{project.description}</p>
                    
                    <div className="card__tech">
                      {project.tech.map(tech => (
                        <span key={tech} className="tech__tag">{tech}</span>
                      ))}
                    </div>
                    
                    <a href={project.link} className="card__link" target="_blank" rel="noopener noreferrer">
                      View Project
                      <i className="bi bi-arrow-up-right"></i>
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="hero__about">
        <div className="container">
          <motion.div
            className="about__content"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            <motion.div className="section__header" variants={itemVariants}>
              <h2>
                <span className="hash">#</span>About Me
              </h2>
              <div className="header__line"></div>
            </motion.div>

            <div className="about__grid">
              <motion.div className="about__text" variants={itemVariants}>
                <p>
                  Hi, I'm <strong>Muhammadabdulloh Khasanov</strong>, a passionate 
                  17-year-old Frontend Developer from Uzbekistan. I specialize in 
                  creating modern, responsive, and visually stunning web applications.
                </p>
                <p>
                  With expertise in React, JavaScript, TypeScript, and modern CSS 
                  frameworks, I transform ideas into exceptional digital experiences. 
                  I'm fluent in English, Russian, and Uzbek.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new technologies, 
                  contributing to open-source projects, or designing interfaces that 
                  push the boundaries of web design.
                </p>

                <div className="about__cta">
                  <a href="#contact" className="btn btn-primary">
                    Get In Touch
                  </a>
                </div>
              </motion.div>

              <motion.div className="about__visual" variants={itemVariants}>
                <div className="visual__card">
                  <div className="card__header">
                    <div className="window__dots">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                  <div className="card__body">
                    <div className="code__line">
                      <span className="keyword">const</span>{' '}
                      <span className="variable">developer</span> ={' '}
                      <span className="punctuation">{'{'}</span>
                    </div>
                    <div className="code__line indent">
                      <span className="property">name:</span>{' '}
                      <span className="string">'Muhammadabdulloh'</span>,
                    </div>
                    <div className="code__line indent">
                      <span className="property">age:</span>{' '}
                      <span className="number">17</span>,
                    </div>
                    <div className="code__line indent">
                      <span className="property">skills:</span>{' '}
                      <span className="punctuation">['</span>
                      <span className="string">React</span>
                      <span className="punctuation">']</span>
                    </div>
                    <div className="code__line">
                      <span className="punctuation">{'}'}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="hero__contact">
        <div className="container">
          <motion.div
            className="contact__content"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            <motion.div className="section__header" variants={itemVariants}>
              <h2>
                <span className="hash">#</span>Get In Touch
              </h2>
              <div className="header__line"></div>
            </motion.div>

            <motion.p className="contact__text" variants={itemVariants}>
              I'm always open to discussing new projects, creative ideas, or 
              opportunities to be part of your visions. Feel free to reach out!
            </motion.p>

            <motion.div className="contact__methods" variants={itemVariants}>
              <a 
                href="mailto:nuuuu391@gmail.com" 
                className="contact__method"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="method__icon">
                  <i className="bi bi-envelope-fill"></i>
                </div>
                <div className="method__info">
                  <div className="method__label">Email</div>
                  <div className="method__value">nuuuu391@gmail.com</div>
                </div>
              </a>

              <a 
                href="https://discord.com/" 
                className="contact__method"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="method__icon">
                  <i className="bi bi-discord"></i>
                </div>
                <div className="method__info">
                  <div className="method__label">Discord</div>
                  <div className="method__value">uz__white</div>
                </div>
              </a>

              <a 
                href="https://github.com/uzwhite444" 
                className="contact__method"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="method__icon">
                  <i className="bi bi-github"></i>
                </div>
                <div className="method__info">
                  <div className="method__label">GitHub</div>
                  <div className="method__value">@uzwhite444</div>
                </div>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
