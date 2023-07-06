import React, { Component } from "react";
import { Books, Tech, Finance } from "./Writings/notes_list.js"

const bookList = Books.map((note) => 
    <li key={note["link"]}><a href={note["link"]}>{note["title"]}</a> ... <span>{note["date"]}</span></li>
)
const techList = Tech.map((note) => 
    <li key={note["link"]}><a href={note["link"]}>{note["title"]}</a> ... <span>{note["date"]}</span></li>
)

const financeList = Finance.map((note) => 
    <li key={note["link"]}><a href={note["link"]}>{note["title"]}</a> ... <span>{note["date"]}</span></li>
)

class Notes extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }


  render() {
    return (
      <div className="notes-container container-fluid" id={this.props.id}>
        <h1 className="projects-title">Writings</h1>
        <hr style={{width: "52px", border: "1.5px solid black", marginBottom: "25px"}}/>
        {/* <h5 style={{margin: "0 5% 40px 5%"}}>Notes from good things I have read.</h5>  */}
        <div className="row">
            <div className="notes-col col-sm ">
                <h3>Blog</h3>
                <ul><li>I sometimes blog on <a href="https://dannychen.substack.com/">substack</a></li></ul>

                <h3>Books</h3>
                <ul>{bookList}</ul>
            </div>
            <div className="notes-col col-sm ">
                <h3>Tech</h3>
                <ul>{techList}</ul>
                <h3>Finance</h3>
                <ul>{financeList}</ul>
            </div>
        </div>
        
      </div>
    )
  }
}
 
export default Notes
