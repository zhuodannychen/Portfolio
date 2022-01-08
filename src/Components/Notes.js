import React, { Component } from "react";
import ScrollAnimation from 'react-animate-on-scroll'


class Notes extends Component {
  render() {
    return (
      <div className="projects-container" id={this.props.id}>
        <h1 className="projects-title">Notes</h1>
        <hr style={{width: "52px", border: "1.5px solid black", marginBottom: "60px"}}/>
        <p>Begin notejsk</p>
      </div>
    )
  }
}
 
export default Notes
