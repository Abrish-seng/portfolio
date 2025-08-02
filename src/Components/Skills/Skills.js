import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython, FaDatabase,
  FaGitAlt, FaDocker, FaAws, FaNodeJs
} from 'react-icons/fa';
import { SiC, SiTensorflow, SiMongodb, SiExpress } from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'C', icon: SiC, level: 85 },
        { name: 'Python', icon: FaPython, level: 90 },
        { name: 'JavaScript', icon: FaJs, level: 88 },
      ]
    },
    {
      title: 'Frontend Development',
      skills: [
        { name: 'HTML5', icon: FaHtml5, level: 92 },
        { name: 'CSS3', icon: FaCss3Alt, level: 88 },
        { name: 'React', icon: FaReact, level: 85 },
      ]
    },
    {
      title: 'Backend & Data',
      skills: [
        { name: 'Node.js', icon: FaNodeJs, level: 80 },
        { name: 'Express.js', icon: SiExpress, level: 82 },
        { name: 'MongoDB', icon: SiMongodb, level: 75 },
        { name: 'TensorFlow', icon: SiTensorflow, level: 78 },
      ]
    },
    {
      title: 'Tools & Technologies',
      skills: [
        { name: 'Git', icon: FaGitAlt, level: 85 },
        { name: 'Docker', icon: FaDocker, level: 70 },
        { name: 'AWS', icon: FaAws, level: 72 },
      ]
    }
  ];

  return (
    <section id="skills" className="skills section">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">
            Technologies and tools I've mastered through my software engineering journey at LX Africa.
          </p>
        </motion.div>

        <div className="skills-grid">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="skill-category"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: categoryIndex * 0.2, duration: 0.6 }}
            >
              <h3>{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className="skill-item"
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ 
                      delay: categoryIndex * 0.2 + skillIndex * 0.1, 
                      duration: 0.6 
                    }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="skill-icon">
                      <skill.icon />
                    </div>
                    <div className="skill-info">
                      <h4>{skill.name}</h4>
                      <div className="skill-bar">
                        <motion.div
                          className="skill-progress"
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : {}}
                          transition={{ 
                            delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.3, 
                            duration: 1 
                          }}
                        />
                      </div>
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="skills-summary"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <h3>What I Bring to the Table</h3>
          <div className="summary-grid">
            <div className="summary-item">
              <h4>Full-Stack Development</h4>
              <p>Capable of building complete web applications from frontend to backend, with expertise in modern frameworks and databases.</p>
            </div>
            <div className="summary-item">
              <h4>Machine Learning</h4>
              <p>Experience with TensorFlow and Python for data analysis, model development, and implementing AI solutions.</p>
            </div>
            <div className="summary-item">
              <h4>Modern Tools</h4>
              <p>Proficient with Git, Docker, and cloud platforms for efficient development and deployment workflows.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;