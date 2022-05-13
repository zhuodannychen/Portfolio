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

// import NoteRender from "./NoteRender.js";
// import { Books, Tech } from "./Writings/notes_list.js"

const { PUBLIC_URL } = process.env;

// const bookRoutes = Books.map((note) => 
//     <Route key={note["path"]} path={note["path"]}><NoteRender note={note["content"]}/></Route>
// )
// const techRoutes = Tech.map((note) => 
//     <Route key={note["path"]} path={note["path"]}><NoteRender note={note["content"]}/></Route>
// )

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
                        <Notes id="notes"/>
                        <Projects id="projects"/>
                        <Contact id="contact"/>
                        <Footer />
                    </Route>

                    {/* <Route path="/notes" >
                        <SubNavbar />
                        <Notes />
                        <Footer />
                    </Route> */}
                    {/* {bookRoutes}
                    {techRoutes} */}
                    {/* consider adding 404 route */}
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}

export default Main