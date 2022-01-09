import React, { Component } from "react";
import InvestingTerminologyNotes from "../Assets/Notes/Investing_Terminology_Notes.pdf"


class Notes extends Component {
  render() {
    return (
      <div className="notes-container container-fluid" id={this.props.id}>
        <h1 className="projects-title">Notes</h1>
        <hr style={{width: "52px", border: "1.5px solid black", marginBottom: "60px"}}/>
        <div className="row">
            <div className="notes-col col-sm ">
                <h4>Tech</h4>
                <ul>
                    <li><a href={InvestingTerminologyNotes} target="blank">Investing notes</a> ... <span>December 2020</span></li>
                    <li><a href={InvestingTerminologyNotes} target="blank">Investing notes</a> ... <span>December 2020</span></li>
                </ul>
            </div>
            <div className="notes-col col-sm ">
                <h4>Finance</h4>
                <ul>
                    <li><a href={InvestingTerminologyNotes} target="blank">Investing notes</a></li>
                    <li><a href={InvestingTerminologyNotes} target="blank">Investing notes</a></li>
                </ul>
                <h4>Social</h4>
            </div>
        </div>
      </div>
    )
  }
}
 
export default Notes
