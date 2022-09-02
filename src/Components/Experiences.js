import React, { Component } from 'react'
// import ScrollAnimation from 'react-animate-on-scroll'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css';


class Experiences extends Component {
    render() {
        return (
            <div className="experiences-container" style={{paddingTop: "30px", background: "#EFEFEF", padding: "20px"}} id={this.props.id}>
                <h1 className="about-title">EXPERIENCES</h1>
                <hr style={{width: "90px", border: "1.5px solid black", marginBottom: "60px"}}/>

                <VerticalTimeline className="container">
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="August 2020 - Present"
                        contentStyle={{ borderTop: '3px solid #26acc9' }}
                        iconStyle={{ background: '#26acc9', color: '#FAFAFA' }}
                        icon=""
                    >
                        <h3 className="vertical-timeline-element-title" style={{margin: "15px 0"}}>B.S. Computer Science</h3>
                        <h3 className="vertical-timeline-element-title" style={{margin: "15px 0"}}>Minor in Economics</h3>
                        <h6 className="vertical-timeline-element-subtitle" style={{color: "#999"}}>Texas A&M</h6>
                        <h6 className="vertical-timeline-element-subtitle" style={{color: "#999", marginBottom: "15px"}}>College Station, TX</h6>
                        <li style={{margin: "3px"}}>GPA: 4.0/4.0</li>
                        <li style={{margin: "3px"}}>Organizations: Aggie Competitive Programming Club, Aggie Coding Club</li>
                        <li style={{margin: "3px"}}>
                            Relevant Course Work
                            <ul>
                                <li>Data Structures & Algorithms</li>
                                <li>Analysis of Algorithms</li>
                                <li>Computer Systems</li>
                                <li>Computer Organization</li>
                                <li>Discrete Math</li>
                                <li>Linear Algebra</li>
                            </ul>
                        </li>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="June 2022 - August 2022"
                        contentStyle={{ borderTop: '3px solid #26acc9' }}
                        iconStyle={{ background: '#26acc9', color: '#FAFAFA' }}
                        icon=""
                    >
                        <h3 className="vertical-timeline-element-title" style={{margin: "15px 0"}}>Software Engineer Intern</h3>
                        <h6 className="vertical-timeline-element-subtitle" style={{color: "#999"}}>Capital One</h6>
                        <h6 className="vertical-timeline-element-subtitle" style={{color: "#999", marginBottom: "15px"}}>Plano, TX</h6>
                        <li style={{margin: "3px"}}>Developed machine learning algorithms such as decision trees to identify hot leads out of 150K+ leads generated monthly</li>
                        <li style={{margin: "3px"}}>Performed feature extraction using information gain and tuned model with cross validation to increase successful sales by 20%</li>
                        <li style={{margin: "3px"}}>Designed architecture and created API endpoints; implemented a serverless design using AWS Lambda, Flask, RDS, and Bonsai (MaaS)</li>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="September 2020 - Present"
                        contentStyle={{ borderTop: '3px solid #26acc9' }}
                        iconStyle={{ background: '#26acc9', color: '#FAFAFA' }}
                        icon=""
                    >
                        <h3 className="vertical-timeline-element-title" style={{margin: "15px 0"}}>Project Manager, Full-Stack Developer</h3>
                        <h6 className="vertical-timeline-element-subtitle" style={{color: "#999"}}>Aggie Coding Club</h6>
                        <h6 className="vertical-timeline-element-subtitle" style={{color: "#999", marginBottom: "15px"}}>College Station, TX</h6>
                        <li style={{margin: "3px"}}>Led a MERN stack application to notify students when filled courses are available during class registration</li>
                        <li style={{margin: "3px"}}>Determined the project scope and delegated tasks to 17 members; worked on frontend, database management, email sender, and data integration</li>
                        <li style={{margin: "3px"}}>Reduced the class search time by 100% and maximized the probability to get a filled course</li>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="August 2018 - June 2020"
                        contentStyle={{ borderTop: '3px solid #26acc9' }}
                        iconStyle={{ background: '#26acc9', color: '#fff' }}
                        icon=""
                    >
                        <h3 className="vertical-timeline-element-title" style={{margin: "15px 0"}}>High School</h3>
                        <h6 className="vertical-timeline-element-subtitle" style={{color: "#999"}}>Plano West Senior High</h6>
                        <h6 className="vertical-timeline-element-subtitle" style={{color: "#999", marginBottom: "15px"}}>Plano, TX</h6>
                        <li style={{margin: "3px"}}>GPA: 4.32, Summa Cum Laude</li>
                        <li style={{margin: "3px"}}>AP Scholar with Distinction</li>
                        <li style={{margin: "3px"}}>Organizations: Computer Science Club, Artificial Intelligence Club, Robotics Club</li>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="May 2019 - June 2020"
                        contentStyle={{ borderTop: '3px solid #26acc9' }}
                        iconStyle={{ background: '#26acc9', color: '#FAFAFA' }}
                        icon=""
                    >
                        <h3 className="vertical-timeline-element-title" style={{margin: "15px 0"}}>Senior Executive Officer</h3>
                        <h6 className="vertical-timeline-element-subtitle" style={{color: "#999"}}>Computer Science Club</h6>
                        <h6 className="vertical-timeline-element-subtitle" style={{color: "#999", marginBottom: "15px"}}>Plano, TX</h6>
                        <li style={{margin: "3px"}}>Led teams to win at multiple programming competitions including Lockheed Martin CodeQuest</li>
                        <li style={{margin: "3px"}}>Lectured on advanced algorithms and data-structures that appear frequently in programming contests</li>
                        <li style={{margin: "3px"}}>Planned and judged a regional programming contest with 150+ participants to encourage involvement in computer science</li>
                    </VerticalTimelineElement>

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