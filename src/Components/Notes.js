import React, { Component } from "react";
// import InvestingTerminologyNotes from "../Assets/Notes/Investing_Terminology_Notes.pdf"


class Notes extends Component {
  render() {
    return (
      <div className="notes-container container-fluid" id={this.props.id}>
        <h1 className="projects-title">Notes</h1>
        <hr style={{width: "52px", border: "1.5px solid black", marginBottom: "25px"}}/>
        <h5 style={{margin: "0 5% 40px 5%"}}>Notes from good things I have read.</h5> 
        <div className="row">
            <div className="notes-col col-sm ">
                <h3>Tech</h3>
                <ul>
                    <li>Still in progress...</li>
                    {/* <li><a href={InvestingTerminologyNotes} target="blank">Investing notes</a> ... <span>December 2020</span></li>
                    <li><a href={InvestingTerminologyNotes} target="blank">WInvesting notes</a> ... <span>December 2020</span></li> */}
                </ul>
            </div>
            <div className="notes-col col-sm ">
                {/* <h3>Finance</h3>
                <ul>
                    <li><a href={InvestingTerminologyNotes} target="blank">Investing notes</a></li>
                    <li><a href={InvestingTerminologyNotes} target="blank">Investing notes</a></li>
                </ul>
                <h3>Books</h3> */}
            </div>
        </div>
      </div>
    )
  }
}
 
export default Notes
