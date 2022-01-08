import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from "./Navbar"
import Homepage from "./Homepage"
import About from "./About"
import Experiences from "./Experiences"
import Projects from "./Projects"
import Contact from "./Contact"
import SubNavbar from "./SubNavbar"
import Notes from "./Notes"

class Main extends Component {
    render() {
        return (
            <div className="body">
                <BrowserRouter>
                    <Switch>
                    <Route path="/" exact>
                        <Navbar />
                        <Homepage id="home"/>
                        <About id="about"/>
                        <Experiences id="experiences"/>
                        <Projects id="projects"/>
                    </Route>

                    <Route path="/notes" >
                        <SubNavbar />
                        <Notes />
                    </Route>
                    </Switch>
                </BrowserRouter>
                <Contact id="contact"/>
            </div>
        )
    }
}

export default Main