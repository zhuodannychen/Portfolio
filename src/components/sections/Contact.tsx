import React from "react";
import { Link } from "react-scroll"
import { motion } from 'framer-motion';

interface Props {
  id?: string;
}

const Contact: React.FC<Props> = ({ id }) => {
    return (
        <div className="contact-container" id={id} style={{paddingTop: "20px"}}>
            <h1 className="contact-title" style={{color: "white", fontSize: "55px", marginBottom: "0"}}>CONTACT</h1>
            <hr style={{width: "100px", border: "1.5px solid white", marginBottom: "100px"}}></hr>
            
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1.5 }}
            >
                <h1 className="contact-text" style={{color: "white", fontFamily: 'Work Sans'}}>What's on your mind?</h1>
                <h3 className="contact-text" style={{color: "#AAA", fontFamily: 'Work Sans'}}>zhuodannychen [at] gmail.com</h3>
                <Link to="home" spy={true} smooth={true} offset={-70} duration={500}><button type="button" className="btn footerButton"><i className="fa fa-angle-double-up"></i></button></Link>
            </motion.div>
        </div>
    )
}

export default Contact