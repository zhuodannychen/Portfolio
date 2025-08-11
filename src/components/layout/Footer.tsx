import React, { Component } from "react";
import ScrollAnimation from 'react-animate-on-scroll'

interface Props {
  id?: string;
}

class Footer extends Component<Props> {
    render(): React.ReactNode {
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
                                </a>
                            </div>

                            {/*Github*/}
                            <div className="c--anim-btn">
                                <a href="https://github.com/zhuodannychen" rel="noopener noreferrer" target="_blank">
                                <span className="c-anim-btn">
                                    <i className="fa fa-github" aria-hidden="true"/>
                                </span>
                                </a>
                            </div>

                            {/*LinkedIn*/}
                            <div className="c--anim-btn">
                                <a href="https://www.linkedin.com/in/zhuodannychen/" rel="noopener noreferrer" target="_blank">
                                <span className="c-anim-btn">
                                    <i className="fa fa-linkedin" aria-hidden="true"/>
                                </span>
                                </a>
                            </div>
                        </ScrollAnimation>
                    </div>
                </footer>
            </div>
        )
    }
}

export default Footer