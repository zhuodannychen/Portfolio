import React, { Component } from 'react'
import ProjectContainer from './ProjectContainer'

class Projects extends Component {
    render() {
        return (
            <div className="projects-container" id={this.props.id}>
                <h1 className="projects-title">PROJECTS</h1>
                <hr style={{width: "10%", border: "1.5px solid black"}}></hr>
                <div>
                    <ProjectContainer 
                    project_name="Timeline" 
                    project_date="March 2020" 
                    project_img="https://dficlub.org/wp-content/uploads/2019/09/dcfdsdf.jpg"
                    project_body="This is my first project, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel malesuada mi. Integer ac turpis tempus sapien tempor viverra sit amet et velit. Donec laoreet risus id magna molestie porttitor. Aliquam erat volutpat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras tincidunt arcu risus, eu mattis dui vehicula id. Etiam vitae nisi eget nisl tempus condimentum vitae eleifend leo. Nulla volutpat arcu id neque gravida, id viverra tellus lacinia. Sed at feugiat tellus. Etiam hendrerit pulvinar diam, vitae facilisis risus dapibus eu. Nullam sed rutrum nisi."

                    github_link="https://github.com/zhuodannychen/Timeline/"
                    demo_link="https://zhuodannychen.github.io/Timeline/"
                    />

                    <ProjectContainer 
                    project_name="Second Project" 
                    project_date="April 2020" 
                    project_img="https://dficlub.org/wp-content/uploads/2019/09/dcfdsdf.jpg"
                    project_body="This is my second project, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel malesuada mi. Integer ac turpis tempus sapien tempor viverra sit amet et velit. Donec laoreet risus id magna molestie porttitor. Aliquam erat volutpat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras tincidunt arcu risus, eu mattis dui vehicula id. Etiam vitae nisi eget nisl tempus condimentum vitae eleifend leo. Nulla volutpat arcu id neque gravida, id viverra tellus lacinia. Sed at feugiat tellus. Etiam hendrerit pulvinar diam, vitae facilisis risus dapibus eu. Nullam sed rutrum nisi."
                    />

                    <ProjectContainer 
                    project_name="Third Project" 
                    project_date="April 2020" 
                    project_img="https://dficlub.org/wp-content/uploads/2019/09/dcfdsdf.jpg"
                    project_body="This is my third project, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel malesuada mi. Integer ac turpis tempus sapien tempor viverra sit amet et velit. Donec laoreet risus id magna molestie porttitor. Aliquam erat volutpat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras tincidunt arcu risus, eu mattis dui vehicula id. Etiam vitae nisi eget nisl tempus condimentum vitae eleifend leo. Nulla volutpat arcu id neque gravida, id viverra tellus lacinia. Sed at feugiat tellus. Etiam hendrerit pulvinar diam, vitae facilisis risus dapibus eu. Nullam sed rutrum nisi."
                    />
                </div>

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 20" preserveAspectRatio="none">
                    <polygon points="100,0 100,20 50,20"
                    style={{fill: "#1b1b1c"}} />
                    <polygon points="0,0 0,20 50,20"
                    style={{fill: "#1b1b1c"}} />
                </svg>
            </div>
        )
    }
}

export default Projects