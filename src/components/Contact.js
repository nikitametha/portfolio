import React from "react";
import { Link } from "react-router-dom";
import "../styles/Contact.css";
import { motion } from "framer-motion";

const Contact = () => {
    const fade = {
        opacity: 1,
        transition:{
            duration: 1.5
        }
    }


  return (
      <>
        <div className="contact" id='contact'>
            <div className="container">
                <motion.div className="heading" initial={{opacity: 0}} whileInView={fade} viewport={{ once: true }}>
                    <p className="heading-sub-text">Reach Out</p>
                    <p className='heading-text'>Get in Touch</p>
                </motion.div>
                <div className="contact-box">
              
                        <div className="contact-heading">
                            <p>Feel free to reach out if you need assistance with cloud services, or if you would like me to mentor you. I'm also currently looking for full-time software engineering, cloud development and cloud infrastructure roles in the USA. I'd be grateful for any leads!  </p>
                        </div>
                        <div className="contact-hello">
                            <p>Say Hello</p>
                            <Link className='hello-links' to="//mailto:nikita.metha@gmail.com" target='_blank'>nikita.metha@gmail.com</Link>
                        </div>
                   
                </div>
            </div>
        </div>
    </>
  );
};

export default Contact;
