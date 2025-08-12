import React from "react";
import { motion } from 'framer-motion';

interface Props {
  id?: string;
}

const Footer: React.FC<Props> = ({ id }) => {
    return (
        <div className="contact-container" id={id}>
            <footer>
                <div className="social-links">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, offset: 100 }}
                        transition={{ duration: 1.5 }}
                    >
                        {/*Instagram*/}
                        <div className="c--anim-btn ">
                            <a href="https://www.instagram.com/dannychen8432/" rel="noopener noreferrer" target="_blank">
                            <span className="c-anim-btn">
                                <i className="fa fa-instagram" aria-hidden="true"/>
                            </span>
                            </a>
                        </div>

                        {/*Github*/}
                        <div className="c--anim-btn">
                            <a href="https://github.com/zhuodannychen" rel="noopener noreferrer" target="_blank">
                            <span className="c-anim-btn">
                                <i className="fa fa-github" aria-hidden="true"/>
                            </span>
                            </a>
                        </div>

                        {/*LinkedIn*/}
                        <div className="c--anim-btn">
                            <a href="https://www.linkedin.com/in/zhuodannychen/" rel="noopener noreferrer" target="_blank">
                            <span className="c-anim-btn">
                                <i className="fa fa-linkedin" aria-hidden="true"/>
                            </span>
                            </a>
                        </div>
                    </motion.div>
                </div>
            </footer>
        </div>
    )
}

export default Footer