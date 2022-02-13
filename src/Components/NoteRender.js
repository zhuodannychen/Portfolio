import React, { Component } from "react";
import { Link } from "react-router-dom"


class NoteRender extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
        <div>
            <h2><Link style={{textDecoration: "none"}} to="./notes">BACK TO NOTES</Link></h2>
            <div dangerouslySetInnerHTML={{ __html: this.props.note }}></div>
        </div>
    )
  }
}
 
export default NoteRender
