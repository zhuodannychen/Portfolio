import React from 'react'
import { motion } from 'framer-motion';

interface Props {
  project_name: string;
  project_date: string;
  madeWith: string;
  project_img: string;
  project_body: string;
  github_link: string;
  demo_link?: string;
}

const ProjectContainer: React.FC<Props> = ({ project_name, project_date, madeWith, project_img, project_body, github_link, demo_link }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="project-card"
        >
            <div className="project-image-container">
                <img alt="project-img" className="project-comp-img" src={project_img} />
            </div>

            <div className="project-content">
                <p className="project-comp-title">{project_name} <span>{project_date}</span></p>
                <p className="project-comp-madeWith">{madeWith}</p>
                <p className="project-comp-madeWith">Links: &nbsp;
                <span style={{display: demo_link ? "inline-block" : "none"}}><a style={{color: "#1e88e5", textDecoration: "none"}} href={demo_link} rel="noopener noreferrer" target="_blank">Demo&nbsp;</a></span>
                <span style={{display: github_link ? "inline-block" : "none"}}><a style={{color: "#1e88e5", textDecoration: "none"}} href={github_link} rel="noopener noreferrer" target="_blank">Github</a></span>
                </p>
                <p className="project-comp-text">{project_body}</p>
            </div>
        </motion.div>
    )
}

export default ProjectContainer