import React, { Component } from "react";
import { books, tech, finance } from "../../data/notes";

interface Props {
  id?: string;
}

const bookList = books.map((note) => 
    <li key={note.link}><a href={note.link}>{note.title}</a> ... <span>{note.date}</span></li>
)
const techList = tech.map((note) => 
    <li key={note.link}><a href={note.link}>{note.title}</a> ... <span>{note.date}</span></li>
)

const financeList = finance.map((note) => 
    <li key={note.link}><a href={note.link}>{note.title}</a> ... <span>{note.date}</span></li>
)

class Notes extends Component<Props> {
  componentDidMount(): void {
    window.scrollTo(0, 0)
  }

  render(): React.ReactNode {
    return (
      <div className="notes-container container-fluid" id={this.props.id}>
        <h1 className="projects-title">Writings</h1>
        <hr style={{width: "52px", border: "1.5px solid black", marginBottom: "25px"}}/>
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