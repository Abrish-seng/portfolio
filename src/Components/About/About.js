import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGraduationCap, FaCode, FaLightbulb, FaUsers } from 'react-icons/fa';
import './About.css';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: FaGraduationCap,
      title: 'Software Engineering Graduate',
      description: 'I hold an MSc in Software Engineering from Mekelle University and have completed ALX Africa \'s one-year Software Engineering Program.',
    },
    {
      icon: FaCode,
      title: 'Full-Stack Development',
      description: 'Proficient in both frontend and backend development with expertise in React, Python, JavaScript, and modern web technologies.',
    },
    {
      icon: FaLightbulb,
      title: 'Problem Solver',
      description: 'Passionate about creating innovative solutions and tackling complex technical challenges with creative approaches.',
    },
    {
      icon: FaUsers,
      title: 'Team Player',
      description: 'Experienced in collaborative development environments and eager to contribute to meaningful projects.',
    },
  ];

  return (
    <section id="about" className="about section">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            A passionate software engineer with a strong foundation in modern web development and a drive for continuous learning.
          </p>
        </motion.div>

        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h3>My Journey</h3>
            <p>
              I recently completed an intensive 1-year Software Engineering Program at ALX Africa, 
              where I developed a strong foundation in modern software development practices. 
              Throughout this program, I worked on various projects that helped me master both 
              frontend and backend technologies.
            </p>
            <p>
              My passion lies in creating user-friendly applications that solve real-world problems. 
              I enjoy working with React for building interactive user interfaces, Python for backend 
              development and data analysis, and JavaScript for full-stack web applications.
            </p>
            <p>
              I'm always eager to learn new technologies and take on challenging projects that 
              push my skills to the next level. When I'm not coding, you can find me exploring 
              new technologies, contributing to open-source projects, or collaborating with other 
              developers.
            </p>
          </motion.div>

          <motion.div
            className="about-features"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="feature-card"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="feature-icon">
                  <feature.icon />
                </div>
                <h4>{feature.title}</h4>
                <p>{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;