import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaExternalLinkAlt, FaReact, FaPython, FaJs, FaCss3Alt } from 'react-icons/fa';
import { SiTensorflow, SiThreedotjs } from 'react-icons/si';
import './Projects.css';
import ecommerceImage from '../../Assets/ecommerce.JPG';
import portifiloImage from '../../Assets/portifilo-image.PNG';
import DataAnalysis from '../../Assets/Fundamentals of Data Science in Precision Medicine and Cloud Computing.png'
const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Tomato Disease Classification',
      description: 'Machine learning model using TensorFlow and ResNet50 to classify tomato plant diseases with 95% accuracy. Features Grad-CAM++ visualization for model interpretability.',
      image: '/api/placeholder/400/250',
      technologies: ['Python', 'TensorFlow', 'React', 'Grad-CAM++'],
      icons: [FaPython, SiTensorflow, FaReact],
      github: 'https://github.com/yourusername/tomato-disease-classifier',
      live: 'https://your-project-demo.com',
      category: 'ml'
    },
    {
      id: 2,
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce application with  product management, shopping cart, and about using React and TypeScript. Features responsive design and smooth animations with Framer Motion.',
      image: ecommerceImage,
      technologies: ['React', 'tailwind css', 'Framer-motion', 'TypeScript'],
      icons: [FaReact, FaJs, FaCss3Alt, SiThreedotjs],
      github: 'https://github.com/Abrish-seng/eCommerce-Dashboard',
      live: 'https://ecomorce-dashboard.netlify.app/',
      category: 'web'
    },
    {
      id: 3,
      title: 'Task Management App',
      description: 'Real-time task management application with drag-and-drop functionality, team collaboration features, and progress tracking.',
      image: '/api/placeholder/400/250',
      technologies: ['React', 'JavaScript', 'CSS3', 'HTML5'],
      icons: [FaReact, FaJs],
      github: 'https://github.com/yourusername/task-manager',
      live: 'https://your-task-manager-demo.com',
      category: 'web'
    },
    {
      id: 4,
      title: 'Weather Dashboard',
      description: 'Interactive weather dashboard that displays current weather conditions, forecasts, and historical data with beautiful visualizations.',
      image: '/api/placeholder/400/250',
      technologies: ['JavaScript', 'HTML5', 'CSS3', 'API Integration'],
      icons: [FaJs, FaCss3Alt, FaReact],
      github: 'https://github.com/Abrish-seng/weather-dashboard',
      live: 'https://weather-dashboard-1a.netlify.app/',
      category: 'web'
    },
    {
      id: 5,
      title: 'Data Analysis Tool',
      description: 'Python-based data analysis tool for processing large datasets, generating insights, and creating interactive visualizations.',
      image: DataAnalysis,
      technologies: ['Python', 'Pandas', 'Matplotlib', 'NumPy'],
      icons: [FaPython],
      github: 'https://github.com/yourusername/data-analysis-tool',
      live: null,
      category: 'data'
    },
    {
      id: 6,
      title: 'Portfolio Website',
      description: 'Modern, responsive portfolio website built with React and Framer Motion, featuring smooth animations and professional design.',
      image: portifiloImage,
      technologies: ['React', 'JavaScript', 'CSS3', 'Framer Motion'],
      icons: [FaReact, FaJs, FaCss3Alt, SiThreedotjs],
      github: 'https://github.com/Abrish-seng/portfolio',
      live: 'https://personal-portifilo-12.netlify.app/',
      category: 'web'
    }
  ];

  const filters = [
    { name: 'All', value: 'all' },
    { name: 'Web Development', value: 'web' },
    { name: 'Machine Learning', value: 'ml' },
    { name: 'Data Analysis', value: 'data' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">My Projects</h2>
          <p className="section-subtitle">
            A collection of projects showcasing my skills in web development, machine learning, and software engineering.
          </p>
        </motion.div>

        <motion.div
          className="project-filters"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {filters.map((filter) => (
            <button
              key={filter.value}
              className={`filter-btn ${activeFilter === filter.value ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.value)}
            >
              {filter.name}
            </button>
          ))}
        </motion.div>

        <motion.div
          className="projects-grid"
          layout
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -10, scale: 1.02 }}
              layout
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <FaGithub />
                      </a>
                    )}
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <FaExternalLinkAlt />
                      </a>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                
                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="project-icons">
                  {project.icons.map((Icon, iconIndex) => (
                    <Icon key={iconIndex} className="tech-icon" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
