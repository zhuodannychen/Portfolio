import React, { Component } from "react";
import AboutPortrait from '../Assets/danny1_4_16_2020.jpg'
import SkillBar from './SkillBars'
import ScrollAnimation from 'react-animate-on-scroll'
import Resume from '../Assets/editorial.pdf'

const SKILLS = [
    {type: "Python", level: 90},
    {type: "Java", level: 85},
    {type: "C++", level: 50},
    {type: "JavaScript", level: 40},
    {type: "Vim", level: 80},
    {type: "HTML", level: 90},
    {type: "CSS", level: 90},
    {type: "React.js", level: 60},
    {type: "Vue", level: 40},
    {type: "PyTorch", level: 25},
  ]

class About extends Component {
  render() {
    return (
      <div className="about-container" id={this.props.id}>
        <div className="about-grid">
            <ScrollAnimation animateIn="fadeInLeft" animateOnce={true} duration={1.5}>
                <h1 className="about-title">ABOUT</h1>
            </ScrollAnimation>

            <div className="characteristics-container">
            <ScrollAnimation animateIn="fadeIn" animateOnce={true} duration={1.5}>
                <i style={{fontSize: "30px"}} className="fa fa-star"></i>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn" animateOnce={true} duration={1.5} delay={250}>
                <i style={{fontSize: "30px"}} className="fa fa-star"></i>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn" animateOnce={true} duration={1.5} delay={500}>
                <i style={{fontSize: "30px"}} className="fa fa-star"></i>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn" animateOnce={true} duration={1.5} delay={750}>
                <i style={{fontSize: "30px"}} className="fa fa-star"></i>
            </ScrollAnimation>
            </div>

            <div className="about-pic-skills-container">
                <ScrollAnimation animateIn="fadeInLeft" animateOnce={true} duration={1.5} offset={500}>
                    <div style={{textAlign: "center", alignItems: "center"}}>
                        <img className="about-picture" src={AboutPortrait} alt=""/>
                    </div>
                    <div style={{margin: "40px", textAlign: "center", alignItems: "center"}}>
                        <a href={Resume} target="_blank" rel="noopener noreferrer">Resume <i style={{fontSize: "13px"}} className="fa fa-download"></i></a>
                    </div>
                </ScrollAnimation>

                <ScrollAnimation animateIn="fadeInRight" animateOnce={true} duration={1.5} offset={500}>
                    <SkillBar className="about-skills" hue="197" saturation="100" light="47" skills={SKILLS} />
                </ScrollAnimation>
                
            </div>
            <ScrollAnimation animateIn="fadeInRight" animateOnce={true} duration={1.5}>
                <div className="about-bio">
                    <p>
                        Hello, my name is Zhuo (Danny) Chen, and I am a student at Plano West Senior High. 
                    </p>
                    <p>
                        I'm very passionate about learning, teaching, and just creating things in general (like this website).
                        Currently, I love to compete in programming competitions such as Codeforces and Google Codejam using C++ and Python. 
                    </p>
                    <p>
                        In addition, I enjoy learning about machine learning (Pytorch) and web development (React).
                    </p>
                    <p>
                        Other than programming, I enjoy breakdancing and solving the Rubik's Cube, with a personal best time of 14.68 seconds and average of around 22 seconds.
                    </p>
                </div>
            </ScrollAnimation>
        </div>
      </div>
    )
  }
}
 
export default About 
