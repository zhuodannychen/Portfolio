import React, { Component } from 'react'

class ProjectContainer extends Component {
    render() {
        return (
            <div>
                <div>
                    <p className="project-comp-title">{this.props.project_name} <span>{this.props.project_date}</span></p>
                    <p className="project-comp-madeWith">{this.props.madeWith}</p>
                </div>
                <div className="project-comp-container">
                    <img className="project-comp-img" style={{float: "left"}} src={this.props.project_img} />
                    <p className="project-comp-text">{this.props.project_body}</p>
                </div>
                <div>
                    <p className="project-comp-links" style={{display: this.props.demo_link ? "block" : "none", float: "left", marginRight: "30px"}}><a href={this.props.demo_link} rel="noopener noreferrer" target="_blank">Demo</a></p>
                    <p className="project-comp-links" style={{display: this.props.github_link ? "block" : "none", float: "left"}}><a href={this.props.github_link} rel="noopener noreferrer" target="_blank">Github</a></p>
                    <hr className="separator"/>
                </div>
            </div>
        )
    }
}

export default ProjectContainer