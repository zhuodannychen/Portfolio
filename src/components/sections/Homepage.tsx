import React, { useState, useEffect, useRef } from 'react';
import Particles from 'react-particles-js'
import { Link } from "react-scroll"
import { motion } from 'framer-motion';

interface Props {
  id?: string;
}

const Homepage: React.FC<Props> = ({ id }) => {
    const [text, setText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isReady, setIsReady] = useState(false);
    
    const fullText = "I am a software developer and investor.";

    // Main typewriter effect
    useEffect(() => {
        if (isReady && currentIndex < fullText.length) {
            const timer = setTimeout(() => {
                setText(prevText => prevText + fullText[currentIndex]);
                setCurrentIndex(prev => prev + 1);
            }, 50);
            
            return () => clearTimeout(timer);
        }
    }, [currentIndex, fullText, isReady]);

    // Initialize and start typing after delay
    useEffect(() => {
        // Reset state
        setText('');
        setCurrentIndex(0);
        setIsReady(false);
        
        // Start typing after delay
        const startDelay = setTimeout(() => {
            setIsReady(true);
            setCurrentIndex(0);
        }, 1000);
        
        return () => clearTimeout(startDelay);
    }, []);

    return (
        <div className="homepage-container" id={id}>
                <Particles className="particles"
                    params={{
                        "particles": {
                            "number": {
                                "value": 20,
                                "density": {
                                    "enable": false
                                }
                            },
                            "size": {
                                "value": 3,
                                "random": true,
                                "anim": {
                                    "speed": 4,
                                    "size_min": 0.3
                                }
                            },
                            "line_linked": {
                                "enable": false
                            },
                            "move": {
                                "random": true,
                                "speed": 1,
                                "direction": "top",
                                "out_mode": "out"
                            }
                        },
                        "interactivity": {
                            "events": {
                                "onhover": {
                                    "enable": true,
                                    "mode": "bubble"
                                },
                                "onclick": {
                                    "enable": true,
                                    "mode": "repulse"
                                }
                            },
                            "modes": {
                                "bubble": {
                                    "distance": 250,
                                    "duration": 2,
                                    "size": 0,
                                    "opacity": 0
                                },
                                "repulse": {
                                    "distance": 400,
                                    "duration": 4
                                }
                            }
                        }
                    }} />
                <div className="homepage-content">
                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.5, delay: 0.2 }}
                    >
                        Hi, I am <span>Danny Chen</span>.
                    </motion.h1>
                    
                    <motion.h6 
                        className="typewriter-text"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.5, delay: 0.8 }}
                    >
                        {text}
                        <span className="cursor">|</span>
                    </motion.h6>
                    
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.5, delay: 1.5 }}
                    >
                        <Link to="about" spy={true} smooth={true} offset={-20} duration={500}>
                            <button type="button" className="more-button">
                                View my works  <i className="fa fa-arrow-down"></i>
                            </button>
                        </Link>
                    </motion.div>
                </div>
            </div>
    )
}

export default Homepage