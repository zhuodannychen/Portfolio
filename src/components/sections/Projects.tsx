import React, { Component } from 'react'
import ProjectContainer from '../ui/ProjectContainer'
import { projects } from '../../data/projects'

interface Props {
  id?: string;
}

class Projects extends Component<Props> {
    render(): React.ReactNode {
        return (
            <div className="projects-container" id={this.props.id} style={{background: "#EFEFEF"}}>
                <h1 className="projects-title">PROJECTS</h1>
                <hr style={{width: "93px", border: "1.5px solid black"}}></hr>

                <div className="container">
                    <hr className="separator"/>

                    {projects.map((project) =>
                        <ProjectContainer
                            key={project.title}
                            project_name={project.title}
                            project_date={project.date}
                            madeWith={project.tools}
                            project_img={project.img}
                            project_body={project.desc}
                            github_link={project.github}
                            demo_link={project.demo_link}
                        />
                    )}
                </div>

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <polygon points="100,0 100,10 50,10"
                    style={{fill: "#1b1b1c"}} />
                    <polygon points="0,0 0,10 50,10"
                    style={{fill: "#1b1b1c"}} />
                </svg>
            </div>
        )
    }
}

export default Projects