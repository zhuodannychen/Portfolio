
import React, { Component } from 'react'
import Navbar from "./Navbar"
import Homepage from "./Homepage"
import About from "./About"
import Contact from "./Contact"

class Main extends Component {
    render() {
        return (
            <div className="body">
                <Navbar />
                <Homepage id="home"/>
                <About id="about"/>
                <Contact id="contact"/>
            </div>
        )
    }
}

export default Main