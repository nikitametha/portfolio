import React from 'react';
import "../styles/About.css"
import { motion } from "framer-motion";
import ProfileImg from '../images/profile.jpg'

const About = () => {  
  
  const horizontal ={
    x:0, 
    opacity: 1, 
    transition:{type: 'spring', duration: 2,bounce: 0.3}
  }

  return (
      <>
          <div  className="about" id='about'>
              <div className="container">
                  <motion.div initial={{x: '-100%', opacity: 0}} whileInView={horizontal} viewport={{ once: true }} className="heading">
                    <p className="heading-sub-text">Who I am</p>
                    <p className='heading-text'>About Me</p>
                  </motion.div>
                  <div className="split-about">
                    <motion.div initial={{x: '-100%', opacity: 0}} whileInView={horizontal} className="about-content">
                        <p>Hello there, I'm Nikita. I'm currently pursuing my Master's degree at Arizona State University, USA. I am passionate about helping people, solving problems, and helping people solve their problems through software engineering. I have helped many, many individuals through customer-facing technical roles in the industry, and through a brief tenure in teaching. </p>
                        <br />
                        <p> (I am actively looking out for software engineering, cloud development and cloud infrastructure full-time roles in the United States. If you're looking to hire for such roles, I'd be grateful if we could get in touch!) </p>
                    </motion.div>
                    <motion.div initial={{x: '50', opacity: 0}} whileInView={horizontal}  className='about-img'>
                        <img src={ProfileImg} alt="Profile" />
                    </motion.div>
                  </div>
              </div>
          </div>
      </>
  )
};

export default About;
