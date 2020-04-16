import React, { Component } from 'react'
import Particles from 'react-particles-js'
import { Link } from "react-scroll";

class Homepage extends Component {
    render() {
        return (
            <div className="homepage-container" id={this.props.id}>
                <Particles className="particles"
                    params={{
                        "particles": {
                            "number": {
                                "value": 20,
                                "density": {
                                    "enable": false
                                }
                            },
                            "size": {
                                "value": 3,
                                "random": true,
                                "anim": {
                                    "speed": 4,
                                    "size_min": 0.3
                                }
                            },
                            "line_linked": {
                                "enable": true,
                                "opacity": 0.02
                            },
                            "move": {
                                "random": true,
                                "speed": 0.5,
                                "direction": "top",
                                "out_mode": "out"
                            }
                        },
                        "interactivity": {
                            "events": {
                                "onhover": {
                                    "enable": true,
                                    "mode": "bubble"
                                },
                                "onclick": {
                                    "enable": true,
                                    "mode": "repulse"
                                }
                            },
                            "modes": {
                                "bubble": {
                                    "distance": 250,
                                    "duration": 2,
                                    "size": 0,
                                    "opacity": 0
                                },
                                "repulse": {
                                    "distance": 400,
                                    "duration": 4
                                }
                            }
                        }
                }} />
                <div className="text-content">
                    <h1>Hi, I am <span>Danny Chen</span>.</h1>
                    <h1>I am a web developer and competitive programmer.</h1>
                    <Link to="about" spy={true} smooth={true} offset={-70} duration={500}><button type="button" className="more-button">View my works <i className="fa fa-arrow-down"></i></button></Link>
                </div>
            </div>
        )
    }
}

export default Homepage