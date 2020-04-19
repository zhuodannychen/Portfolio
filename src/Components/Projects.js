import React, { Component } from 'react'
import { Card, CardTitle, CardText, CardActions, Button, Grid, Cell } from 'react-mdl'

class Projects extends Component {
    render() {
        return (
            <div className="projects-container" id={this.props.id}>
                <h1 className="projects-title">PROJECTS</h1>
            </div>
        )
    }
}

export default Projects