import React, { Component } from "react";


class NoteRender extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
        <div dangerouslySetInnerHTML={{ __html: this.props.note }}></div>
    )
  }
}
 
export default NoteRender
