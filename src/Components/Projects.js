import React, { Component } from 'react'
import { Card, CardTitle, CardText, CardActions, Button, Grid, Cell } from 'react-mdl'

class Projects extends Component {
    render() {
        return (
            <div className="projects-container" id={this.props.id}>
                <h1 className="projects-title">PROJECTS</h1>
                <hr style={{width: "10%", border: "3px solid black"}}></hr>

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