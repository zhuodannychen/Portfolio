import React, { Component } from "react";
 
class About extends Component {
  render() {
    return (
      <div className="about-container" id={this.props.id}>
        <div className="about-grid">
            <div className="about-title"><h1>About</h1></div>
            <div className="about-portrait">Hello</div>
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
            <div className="about-skills">JS, React</div>
        </div>
      </div>
    )
  }
}
 
export default About 
