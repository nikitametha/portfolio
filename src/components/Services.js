import React from 'react';
import "../styles/Services.css"
import {IoBookOutline} from "react-icons/io5"
import {BiCodeCurly, BiCloud} from "react-icons/bi"
import { motion } from "framer-motion";

const Services = () => {

   const fade = {
    opacity: 1,
    transition:{
        duration: 1.4
    }
   }

  return (
      <>
          <div className="services" id='services'>
              <div className="container">
                <motion.div whileInView={fade} viewport={{ once: true }} initial={{opacity: 0}} className="heading">
                    <p className="heading-sub-text">What I can do</p>
                    <p className='heading-text'>Services</p>
                </motion.div>
                <motion.div className="services-box" whileInView={fade} initial={{opacity: 0}}>
                    <div className="services-card">
                        <BiCodeCurly className='services-icon' />
                        <p className='services-title'>Software Development</p>
                        <p className='services-desc'> With a specialization in backend development, I optimize data management and caching mechanisms for efficient processing and retrieval. By leveraging cloud technologies, I deliver high-quality applications that meet functional and performance requirements.</p>
                    </div>
                    <div className="services-card">
                        <IoBookOutline className='services-icon' />
                        <p className='services-title'>Mentoring</p>
                        <p className='services-desc'>I am committed to mentoring younger individuals in cloud technology, guiding them on their journey to become skilled professionals. By sharing my expertise and industry insights, I empower them to develop a solid foundation in cloud application development, infrastructure management, and DevOps practices.</p>
                    </div>
                    <div className="services-card">
                        <BiCloud className='services-icon' />
                        <p className='services-title'>Cloud Services Troubleshooting</p>
                        <p className='services-desc'>I help developers troubleshoot cloud services, specializing in AWS and GCP. With my knowledge of these platforms, I provide effective guidance and solutions to identify and resolve issues related to cloud infrastructure, deployment, and application performance.</p>
                    </div>
                </motion.div>
              </div>
          </div>
      </>
  )
};

export default Services;
