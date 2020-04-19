import React, { Component } from "react";
import Resume from '../Assets/editorial.pdf'

class Contact extends Component {
    render() {
        return (
            <div className="contact-container" id={this.props.id}>
                <h1 style={{color: "white", fontSize: "55px"}}>CONTACT</h1>
                <h3 style={{color: "white"}}>Email: <a style={{color: "#00acee"}} href="mailto:zhuodannychen@gmail.com">zhuodannychen@gmail.com</a></h3>
                <div className="social-links">
                    {/*Facebook*/}
                    <a href="https://www.facebook.com/profile.php?id=100011202737974" rel="noopener noreferrer" target="_blank">
                        <i className="fa fa-facebook-square" aria-hidden="true"/>
                    </a>

                    {/*Linkedin*/}
                    <a href="https://www.linkedin.com/in/zhuodannychen/" rel="noopener noreferrer" target="_blank">
                        <i className="fa fa-linkedin-square" aria-hidden="true"/>
                    </a>

                    {/*Youtube*/}
                    <a href="https://www.youtube.com/channel/UC1C-oovRv0v4a48QlIr6hWg?view_as=subscriber" rel="noopener noreferrer" target="_blank">
                        <i className="fa fa-youtube-square" aria-hidden="true"/>
                    </a>

                    {/*Github*/}
                    <a href="https://github.com/zhuodannychen" rel="noopener noreferrer" target="_blank">
                        <i className="fa fa-github-square" aria-hidden="true"/>
                    </a>

                    {/*Resume*/}
                    <a href={Resume} rel="noopener noreferrer" target="_blank">
                        <i style={{padding: "12px", fontSize: "55px"}} className="fa fa-file" aria-hidden="true"/>
                    </a>
                </div>
                <p style={{color: "white"}}>Zhuo Chen <span style={{color: "#00acee"}}><i className="fa fa-copyright"></i>2020</span></p>
            </div>
        )
    }
}
 
export default Contact 
