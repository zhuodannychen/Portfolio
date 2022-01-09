import React, { Component } from "react";
import { Link } from "react-scroll"
import ScrollAnimation from 'react-animate-on-scroll'

class Contact extends Component {
    render() {
        return (
            <div className="contact-container" id={this.props.id} style={{paddingTop: "20px"}}>
                <h1 className="contact-title" style={{color: "white", fontSize: "55px", marginBottom: "0"}}>CONTACT</h1>
                <hr style={{width: "100px", border: "1.5px solid white", marginBottom: "100px"}}></hr>
                
                <ScrollAnimation animateIn="fadeIn" animateOnce={true} duration={1.5} offset={250}>
                    <h1 className="contact-text" style={{color: "white", fontFamily: 'Work Sans'}}>What's on your mind?</h1>
                    <h3 className="contact-text" style={{color: "#AAA", fontFamily: 'Work Sans'}}>zhuodannychen [at] gmail.com</h3>
                    <Link to="home" spy={true} smooth={true} offset={-70} duration={500}><button type="button" className="btn footerButton"><i className="fa fa-angle-double-up"></i></button></Link>
                </ScrollAnimation>
            </div>
        )
    }
}
 
export default Contact 
