import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import Navbar from "./Navbar"
import SmallNavbar from './SmallNavbar';
import SubNavbar from './SubNavbar';
import Homepage from "./Homepage"
import About from "./About"
import Experiences from "./Experiences"
import Projects from "./Projects"
import Contact from "./Contact"
import Notes from "./Notes"
import Footer from "./Footer"

const { PUBLIC_URL } = process.env;

class Main extends Component {
    render() {
        return (
            <div className="body">
                <BrowserRouter basename={PUBLIC_URL}>
                    <Switch>
                    <Route exact path="/">
                        {/* <Navbar /> */}
                        <SmallNavbar />
                        <Homepage id="home"/>
                        <About id="about"/>
                        <Experiences id="experiences"/>
                        {/* <Notes id="notes"/> */}
                        <Projects id="projects"/>
                        <Contact id="contact"/>
                    </Route>

                    <Route path="/notes" >
                        <SubNavbar />
                        <Notes />
                    </Route>
                    </Switch>
                </BrowserRouter>
                <Footer />
            </div>
        )
    }
}

export default Main