import React from 'react'
import { experiences } from '../../data/experiences'

interface Props {
  id?: string;
}

const experienceList = experiences.map((experience, index) => 
    <div key={index} className="timeline-item">
        <div className="timeline-content">
            <div className="experience-card">
                <h4 className="experience-title">{experience.position}</h4>
                <h5 className="experience-company">{experience.company}</h5>
                <h6 className="experience-duration">{experience.duration}</h6>
                <ul className="experience-description">
                    {experience.description.map((fact, idx) => <li key={idx}>{fact}</li>)}
                </ul>
                {experience.technologies.length > 0 && (
                    <div className="experience-technologies">
                        {experience.technologies.map((tech, idx) => (
                            <span key={idx} className="tech-tag">{tech}</span>
                        ))}
                    </div>
                )}
            </div>
        </div>
    </div>
)

const Experiences: React.FC<Props> = ({ id }) => {
    return (
        <div className="experiences-container" style={{paddingTop: "30px", background: "#EFEFEF", padding: "20px"}} id={id}>
            <h1 className="about-title">EXPERIENCES</h1>
            <hr style={{width: "90px", border: "1.5px solid black", marginBottom: "60px"}}/>

            <div className="timeline-container">
                <div className="timeline-line"></div>
                {experienceList}
            </div>
        </div>
    )
}

export default Experiences