import React, { Component } from "react";
import Resume from '../Assets/editorial.pdf'
import { Link } from "react-scroll"
import ScrollAnimation from 'react-animate-on-scroll'

class Contact extends Component {
    render() {
        return (
            <div className="contact-container" id={this.props.id}>
                <ScrollAnimation animateIn="fadeInLeft" animateOnce={true} duration={1.5}>
                    <h1 className="contact-title" style={{color: "white", fontSize: "55px", marginBottom: "0"}}>CONTACT</h1>
                </ScrollAnimation>

                <ScrollAnimation animateIn="fadeInLeft" animateOnce={true} duration={1.5}>
                    <hr style={{width: "100px", border: "1.5px solid white", marginBottom: "100px"}}></hr>
                </ScrollAnimation>
                
                <ScrollAnimation animateIn="fadeIn" animateOnce={true} duration={1.5} offset={250}>
                    <h1 className="contact-text" style={{color: "white", fontFamily: 'Work Sans'}}>What's on your mind?</h1>
                    <h3 className="contact-text" style={{color: "white", fontFamily: 'Work Sans'}}>Email: <a style={{color: "#00acee"}} href="mailto:zhuodannychen@gmail.com">zhuodannychen@gmail.com</a></h3>
                    <h3 className="contact-text" style={{color: "white", fontFamily: 'Work Sans'}}>Codeforces: <a style={{color: "#00acee"}} href="https://codeforces.com/profile/zhuodannychen" target="_blank">zhuodannychen</a></h3>
                    <Link to="home" spy={true} smooth={true} offset={-70} duration={500}><button type="button" className="footer-button"><i className="fa fa-angle-double-up"></i></button></Link>
                </ScrollAnimation>
                <footer>
                    <div className="social-links">
                        <ScrollAnimation animateIn="fadeIn" animateOnce={true} duration={1.5} delay={0} offset={100}>
                            {/*Facebook*/}
                            <a href="https://www.facebook.com/profile.php?id=100011202737974" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-facebook-square" aria-hidden="true"/>
                            </a>
                        </ScrollAnimation>

                        <ScrollAnimation animateIn="fadeIn" animateOnce={true} duration={1.5} delay={250} offset={100}>
                            {/*Linkedin*/}
                            <a href="https://www.linkedin.com/in/zhuodannychen/" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-linkedin-square" aria-hidden="true"/>
                            </a>
                        </ScrollAnimation>

                        <ScrollAnimation animateIn="fadeIn" animateOnce={true} duration={1.5} delay={500} offset={100}>
                            {/*Youtube*/}
                            <a href="https://www.youtube.com/channel/UC1C-oovRv0v4a48QlIr6hWg?view_as=subscriber" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-youtube-square" aria-hidden="true"/>
                            </a>
                        </ScrollAnimation>

                        <ScrollAnimation animateIn="fadeIn" animateOnce={true} duration={1.5} delay={750} offset={100}>
                            {/*Github*/}
                            <a href="https://github.com/zhuodannychen" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-github-square" aria-hidden="true"/>
                            </a>
                        </ScrollAnimation>

                        <ScrollAnimation animateIn="fadeIn" animateOnce={true} duration={1.5} delay={1000} offset={100}>
                            {/*Resume*/}
                            <a href={Resume} rel="noopener noreferrer" target="_blank">
                                <i style={{padding: "12px"}} className="fa fa-file file-icon" aria-hidden="true"/>
                            </a>
                        </ScrollAnimation>

                        <ScrollAnimation animateIn="fadeIn" animateOnce={true} duration={1.5} delay={1250} offset={100}>
                            {/*Email*/}
                            <a href="mailto:zhuodannychen@gmail.com" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-envelope-square" aria-hidden="true"/>
                            </a>
                        </ScrollAnimation>
                    </div>
                    <p style={{color: "white", padding: "20px"}}>Zhuo Chen <span style={{color: "#00acee"}}><i className="fa fa-copyright"></i>2020</span></p>
                </footer>
            </div>
        )
    }
}
 
export default Contact 
