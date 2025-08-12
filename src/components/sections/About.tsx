import React from "react";
import { motion } from 'framer-motion';

interface Props {
  id?: string;
}

const About: React.FC<Props> = ({ id }) => {
  return (
    <div className="about-container" id={id}>
      <h1 className="about-title">ABOUT</h1>
      <hr style={{width: "52px", border: "1.5px solid black", marginBottom: "60px"}}/>
          <div className="about-pic-skills-container">
              <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 1.5 }}
              >
                  <div style={{textAlign: "center", alignItems: "center"}}>
                      <img className="about-picture" src="/danny_chen_2022.png" alt="Danny Chen"/>
                  </div>
                  <div style={{width: "700px", margin: "0 auto"}}>
                      <h4>Fun Facts</h4>
                      <ul>
                          <li>Shenzhen <i className="fa fa-arrow-right" aria-hidden="true"/> Paris <i className="fa fa-arrow-right" aria-hidden="true"/> Shenzhen <i className="fa fa-arrow-right" aria-hidden="true"/> Dallas <i className="fa fa-arrow-right" aria-hidden="true"/> College Station <i className="fa fa-arrow-right" aria-hidden="true"/> Silicon Valley</li>
                          <li>When I first started programming, my friend downloaded Vim in all of my text editors/IDEs... now I breathe Vim.</li>
                          <li>My fastest solve-time on a 3x3 Rubik's Cube is 14.68 seconds.</li>
                      </ul>
                  </div>
              </motion.div>

              <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 1.5 }}
              >
                  <h4>About Me</h4>
                  <p className="about-bio">
                      Hi! <span role="img" aria-label="wave">👋</span> I'm Danny Chen (陈琢), and
                      I'm very passionate about learning, teaching, and just creating things in general (like this website). 
                      <br />
                      <br />
                      In tech, I have an interest in AI, blockchains, software development, and competitive programming. In the past, I have worked on projects involving web dev, machine learning, and smart contracts.
                      <br />
                      <br />
                      In finance, I enjoy the volatility of stocks, exploring the crypto wild west, learning about the future of money, and just having convos with my friends on the next big thing.
                      <br />
                      <br />
                      In my free time, I enjoy playing pickleball, pondering on long walks, sucking at basketball, dancing (hip hop and breaking), and cooking delicious food!
                  </p>
                  
                  <h4>My Current Interests</h4>
                  <ul>
                      <li>Blockchains/Crypto</li>
                      <li>AI applications</li>
                      <li>Finance</li>
                      <li>Full-stack dev</li>
                  </ul>
              </motion.div>
          </div>
    </div>
  )
}
 
export default About