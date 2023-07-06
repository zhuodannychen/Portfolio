import React, { Component } from "react";
import ScrollAnimation from 'react-animate-on-scroll'

class Footer extends Component {
    render() {
        return (
            <div className="contact-container" id={this.props.id}>
                <footer>
                    <div className="social-links">
                        <ScrollAnimation animateIn="fadeIn" animateOnce={true} duration={1.5} delay={0} offset={100}>
                            {/*Instagram*/}
                            <div className="c--anim-btn ">
                                <a href="https://www.instagram.com/dannychen8432/" rel="noopener noreferrer" target="_blank">
                                <span className="c-anim-btn">
                                    <i className="fa fa-instagram" aria-hidden="true"/>
                                </span>
                                <span>
                                    <i className="fa fa-instagram" aria-hidden="true"/>
                                </span>
                                </a>
                            </div>
                        </ScrollAnimation>

                        <ScrollAnimation animateIn="fadeIn" animateOnce={true} duration={1.5} delay={200} offset={100}>
                            {/*Linkedin*/}
                            <div className="c--anim-btn ">
                                <a href="https://www.linkedin.com/in/zhuodannychen/" rel="noopener noreferrer" target="_blank">
                                <span className="c-anim-btn">
                                    <i className="fa fa-linkedin" aria-hidden="true"/>
                                </span>
                                <span>
                                    <i className="fa fa-linkedin" aria-hidden="true"/>
                                </span>
                                </a>
                            </div>
                        </ScrollAnimation>

                        <ScrollAnimation animateIn="fadeIn" animateOnce={true} duration={1.5} delay={400} offset={100}>
                            {/*Youtube*/}
                            <div className="c--anim-btn ">
                                <a href="https://www.youtube.com/channel/UC1C-oovRv0v4a48QlIr6hWg?view_as=subscriber" rel="noopener noreferrer" target="_blank">
                                <span className="c-anim-btn">
                                    <i className="fa fa-youtube" aria-hidden="true"/>
                                </span>
                                <span>
                                    <i className="fa fa-youtube" aria-hidden="true"/>
                                </span>
                                </a>
                            </div>
                        </ScrollAnimation>

                        <ScrollAnimation animateIn="fadeIn" animateOnce={true} duration={1.5} delay={600} offset={100}>
                            {/*Github*/}
                            <div className="c--anim-btn ">
                                <a href="https://github.com/zhuodannychen" rel="noopener noreferrer" target="_blank">
                                <span className="c-anim-btn">
                                    <i className="fa fa-github" aria-hidden="true"/>
                                </span>
                                <span>
                                    <i className="fa fa-github" aria-hidden="true"/>
                                </span>
                                </a>
                            </div>
                        </ScrollAnimation>

                        <ScrollAnimation animateIn="fadeIn" animateOnce={true} duration={1.5} delay={1000} offset={100}>
                            {/*Email*/}
                            <div className="c--anim-btn ">
                                <a href="mailto:zhuodannychen@gmail.com" rel="noopener noreferrer" target="_blank">
                                <span className="c-anim-btn">
                                    <i className="fa fa-envelope" aria-hidden="true"/>
                                </span>
                                <span>
                                    <i className="fa fa-envelope" aria-hidden="true"/>
                                </span>
                                </a>
                            </div>
                        </ScrollAnimation>
                    </div>
                    <p style={{color: "white", padding: "10px"}}>Zhuo Chen <span style={{color: "#00acee"}}><i className="fa fa-copyright"></i>2020-2023</span></p>
                </footer>
            </div>
        )
    }
}
 
export default Footer 
