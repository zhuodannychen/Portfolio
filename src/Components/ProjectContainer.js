import React, { Component } from 'react'

// background: 'url(http://www.getmdl.io/assets/demos/dog.png)

class ProjectContainer extends Component {
    render() {
        return (
            <div>
                <div>
                    <p className="project-comp-title" style={{marginLeft: "50px"}}>{this.props.project_name} <span style={{color: "grey", fontSize: "22px"}}>{this.props.project_date}</span></p>
                </div>
                <div className="project-comp-container">
                    <img className="project-comp-img" style={{float: "left", height: "350px", width: "350px"}} src={this.props.project_img} />
                    <p className="project-comp-text" style={{fontSize: "22px", marginRight: "70px"}}>{this.props.project_body}</p>
                </div>
                    <p className="project-comp-links" style={{display: this.props.demo_link ? "block" : "none", float: "left", marginRight: "30px"}}><a href={this.props.demo_link} rel="noopener noreferrer" target="_blank">Demo</a></p>
                    <p className="project-comp-links" style={{display: this.props.github_link ? "block" : "none", float: "left"}}><a href={this.props.github_link} rel="noopener noreferrer" target="_blank">Github</a></p>
                    <hr style={{opacity: "0", marginBottom: "30vh"}}/>
            </div>
        )
    }
}

export default ProjectContainer