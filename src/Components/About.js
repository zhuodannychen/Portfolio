import React, { Component } from "react";
import AboutPortrait from '../Assets/Profiles/danny_chen_2022.png'
//import SkillBar from './SkillBars'
import ScrollAnimation from 'react-animate-on-scroll'
import SkillBar from 'react-skillbars';

const SKILLS = [
    {type: "Python", level: 95},
    {type: "C++", level: 90},
    {type: "Java", level: 90},
    {type: "JavaScript", level: 60},
    {type: "Haskell", level: 30},
    {type: "Vim", level: 85},
    {type: "ReactJS", level: 75},
    {type: "NodeJS", level: 75},
    {type: "PyTorch", level: 25},
  ]

class About extends Component {
  render() {
    return (
      <div className="about-container" id={this.props.id}>
        <h1 className="about-title">ABOUT</h1>
        <hr style={{width: "52px", border: "1.5px solid black", marginBottom: "60px"}}/>
            <div className="about-pic-skills-container">
                <ScrollAnimation animateIn="fadeInLeft" animateOnce={true} duration={1.5} offset={500}>
                    <div style={{textAlign: "center", alignItems: "center"}}>
                        <img className="about-picture" src={AboutPortrait} alt=""/>
                    </div>
                    <p className="about-bio" style={{fontFamily: "'Open Sans', sans-serif"}}>
                        Hi! <span role="img" aria-label="wave">👋</span> I'm Danny Chen (陈琢), an undergrad at Texas A&M studying computer science.
                        I'm very passionate about learning, teaching, and just creating things in general (like this website). 
                        <br />
                        <br />
                        I have an interest in artificial intelligence, blockchains, software development, and competitive programming. In the past, I have worked on projects involving web dev, machine learning, and smart contracts.
                        Other than CS, I enjoy working out, sucking at basketball, dancing, and cooking.
                    </p>
                </ScrollAnimation>

                <ScrollAnimation animateIn="fadeInRight" animateOnce={true} duration={1.5} offset={500}>
                    <SkillBar skills={SKILLS} height={25} animationDelay={1000} animationDuration={2000} offset={0} colors={{bar: "#26acc9", title: {text: "white", background: "#24a1bd"}}}/>
                    <h4>Fun Facts</h4>
                    <ul>
                        
                        <li>Shenzhen <i className="fa fa-arrow-right" aria-hidden="true"/> Paris <i className="fa fa-arrow-right" aria-hidden="true"/> Shenzhen <i className="fa fa-arrow-right" aria-hidden="true"/> Dallas <i className="fa fa-arrow-right" aria-hidden="true"/> Silicon Valley</li>
                        <li>When I first started programming, my friend downloaded Vim in all of my text editors/IDEs... now I breathe Vim.</li>
                        <li>My fastest solve-time on a 3x3 Rubik's Cube is 14.68 seconds.</li>
                    </ul>
                </ScrollAnimation>
                {/*
                <ScrollAnimation animateIn="fadeInRight" animateOnce={true} duration={1.5} offset={500}>
                    <SkillBar className="about-skills" hue="197" saturation="100" light="47" skills={SKILLS} />
                </ScrollAnimation>
                */}
            </div>
      </div>
    )
  }
}
 
export default About 
