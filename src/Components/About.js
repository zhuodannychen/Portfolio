import React, { Component } from "react";
import AboutPortrait from '../Assets/Profiles/danny_4_26_2021_s.jpg'
//import SkillBar from './SkillBars'
import ScrollAnimation from 'react-animate-on-scroll'
import SkillBar from 'react-skillbars';

const SKILLS = [
    {type: "Python", level: 95},
    {type: "C++", level: 90},
    {type: "Java", level: 90},
    {type: "JavaScript", level: 40},
    {type: "Haskell", level: 60},
    {type: "Vim", level: 85},
    {type: "ReactJS", level: 60},
    {type: "NodeJS", level: 50},
    {type: "Tensorflow", level: 25},
  ]

class About extends Component {
  render() {
    return (
      <div className="about-container" id={this.props.id}>
        <h1 className="about-title">ABOUT</h1>
        <hr style={{width: "52px", border: "1.5px solid black", marginBottom: "60px"}}/>

{/*
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
*/}
            <div className="about-pic-skills-container">
                <ScrollAnimation animateIn="fadeInLeft" animateOnce={true} duration={1.5} offset={500}>
                    <div style={{textAlign: "center", alignItems: "center"}}>
                        <img className="about-picture" src={AboutPortrait} alt=""/>
                    </div>
                    <p className="about-bio" style={{textAlign: "center", fontFamily: "'Open Sans', sans-serif"}}>Hi! <span role="img" aria-label="wave">👋</span> I'm Danny Chen (陈琢), an undergrad at Texas A&M studying computer science.
                    I'm very passionate about learning, teaching, and just creating things in general (like this website). 
                    <br />
                    My interest in the field of Computer Science includes artificial intelligence, software development, and competitive programming.
                    Other than CS, I enjoy reading about technological trends, trading, working out, and cooking.
                    </p>
                </ScrollAnimation>

                <ScrollAnimation animateIn="fadeInRight" animateOnce={true} duration={1.5} offset={500}>
                    <SkillBar skills={SKILLS} height={25} animationDelay={1000} animationDuration={2000} offset={0} colors={{bar: "#26acc9", title: {text: "white", background: "#24a1bd"}}}/>
                    <h4>Fun Facts</h4>
                    <ul>
                        <li>I studied in 4 different elementaries, in 3 different languages, but now I can only speak 2.</li>
                        <li>When I first started programming, my friend downloaded Vim in all of my text editors/IDEs... now I'm fluent with Vim.</li>
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
