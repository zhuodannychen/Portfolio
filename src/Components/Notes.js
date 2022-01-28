import React, { Component } from "react";
import { Books, Tech } from "./Writings/notes_list.js"
import { Link } from "react-router-dom";

const bookList = Books.map((note) => 
    <li key={note["path"]}><Link to={note["path"]}>{note["title"]}</Link> ... <span>{note["date"]}</span></li>
)
const techList = Tech.map((note) => 
    <li key={note["path"]}><Link to={note["path"]}>{note["title"]}</Link> ... <span>{note["date"]}</span></li>
)

class Notes extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }


  render() {
    return (
      <div className="notes-container container-fluid" id={this.props.id}>
        <h1 className="projects-title">Notes</h1>
        <hr style={{width: "52px", border: "1.5px solid black", marginBottom: "25px"}}/>
        <h5 style={{margin: "0 5% 40px 5%"}}>Notes from good things I have read.</h5> 
        <div className="row">
            <div className="notes-col col-sm ">
                <h3>Books</h3>
                <ul>{bookList}</ul>
            </div>
            <div className="notes-col col-sm ">
                <h3>Tech</h3>
                <ul>{techList}</ul>
                <h3>Finance</h3>
                <ul>{techList}</ul>
            </div>
        </div>
        
        </div>
    )
  }
}
 
export default Notes
