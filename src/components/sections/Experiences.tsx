import React, { Component } from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css';
import { experiences } from '../../data/experiences'

interface Props {
  id?: string;
}

const experienceList = experiences.map((experience, index) => 
    <VerticalTimelineElement
        key={index}
        className="vertical-timeline-element--education"
        date={experience.duration}
        contentStyle={{ borderTop: '3px solid #26acc9' }}
        iconStyle={{ background: '#26acc9', color: '#FAFAFA' }}
        icon=""
        >
        <h4 className="vertical-timeline-element-title" style={{margin: "0 0 15px 0", color: "#445", fontWeight: "bold"}}>{experience.position}</h4>
        <h5 className="vertical-timeline-element-subtitle" style={{color: "445", fontWeight: "bold"}}>{experience.company}</h5>
        <h6 className="vertical-timeline-element-subtitle" style={{color: "#445", marginBottom: "15px"}}>{experience.duration}</h6>
        {experience.description.map((fact, idx) => <li key={idx} style={{color: "#445", marginLeft: "17px"}}>{fact}</li>)}
    </VerticalTimelineElement>
)

class Experiences extends Component<Props> {
    render(): React.ReactNode {
        return (
            <div className="experiences-container" style={{paddingTop: "30px", background: "#EFEFEF", padding: "20px"}} id={this.props.id}>
                <h1 className="about-title">EXPERIENCES</h1>
                <hr style={{width: "90px", border: "1.5px solid black", marginBottom: "60px"}}/>

                <VerticalTimeline className="container">
                    {experienceList}
                </VerticalTimeline>
            </div>
        )
    }
}

export default Experiences