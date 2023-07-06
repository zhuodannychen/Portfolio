import React, { Component } from 'react'
// import ScrollAnimation from 'react-animate-on-scroll'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css';
import { AllExperiences } from './Writings/experiences'

const experienceList = AllExperiences.map((experience) => 
    <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date={experience['date']}
        contentStyle={{ borderTop: '3px solid #26acc9' }}
        iconStyle={{ background: '#26acc9', color: '#FAFAFA' }}
        icon=""
        >
        <h4 className="vertical-timeline-element-title" style={{margin: "0 0 15px 0", color: "#445", fontWeight: "bold"}}>{experience['title']}</h4>
        <h5 className="vertical-timeline-element-subtitle" style={{color: "445", fontWeight: "bold"}}>{experience['subtitle']}</h5>
        <h6 className="vertical-timeline-element-subtitle" style={{color: "#445", marginBottom: "15px"}}>{experience['location']}</h6>
        {experience['facts'].map(fact => <li style={{color: "#445", marginLeft: "17px"}}>{fact}</li>)}
    </VerticalTimelineElement>
)

class Experiences extends Component {
    render() {
        return (
            <div className="experiences-container" style={{paddingTop: "30px", background: "#EFEFEF", padding: "20px"}} id={this.props.id}>
                <h1 className="about-title">EXPERIENCES</h1>
                <hr style={{width: "90px", border: "1.5px solid black", marginBottom: "60px"}}/>

                <VerticalTimeline className="container">
                    {experienceList}

                    <VerticalTimelineElement
                        iconStyle={{ background: '#1b1b1c', color: '#fff' }}
                        icon=""
                    />
                </VerticalTimeline>
            </div>
        )
    }
}

export default Experiences