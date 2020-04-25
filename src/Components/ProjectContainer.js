import React, { Component } from 'react'
import ScrollAnimation from 'react-animate-on-scroll'

class ProjectContainer extends Component {
    render() {
        return (
            <div>
                <ScrollAnimation animateIn="fadeInLeft" animateOnce={true} duration={1.5}>
                    <div>
                        <p className="project-comp-title">{this.props.project_name} <span>{this.props.project_date}</span></p>
                        <p className="project-comp-madeWith">{this.props.madeWith}</p>
                    </div>
                </ScrollAnimation>

                <div className="project-comp-container">
                    <ScrollAnimation animateIn="fadeInLeft" animateOnce={true} duration={1.5}>
                        <img className="project-comp-img" style={{float: "left"}} src={this.props.project_img} />
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="fadeInRight" animateOnce={true} duration={1.5}>
                        <p className="project-comp-text">{this.props.project_body}</p>
                    </ScrollAnimation>
                </div>
                <div>
                    <ScrollAnimation animateIn="fadeIn" animateOnce={true} duration={1.5} delay={1300} offset={100}>
                        <p className="project-comp-links" style={{display: this.props.demo_link ? "block" : "none", float: "left", marginRight: "30px"}}><a href={this.props.demo_link} rel="noopener noreferrer" target="_blank">Demo</a></p>
                        <p className="project-comp-links" style={{display: this.props.github_link ? "block" : "none", float: "left"}}><a href={this.props.github_link} rel="noopener noreferrer" target="_blank">Github</a></p>
                    </ScrollAnimation>
                    <hr className="separator"/>
                </div>
            </div>
        )
    }
}

export default ProjectContainer