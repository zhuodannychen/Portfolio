import React from 'react';

interface Props {
  id?: string;
}

const Homepage: React.FC<Props> = ({ id }) => {
    return (
        <div className="homepage-container" id={id}>
                <div className="homepage-content">
                    <h1>
                        Hi, I am <span>Danny Chen</span>.
                    </h1>
                    
                    <h6 className="typewriter-text">
                        I am a software developer and trader.
                        <span className="cursor">|</span>
                    </h6>
                    
                    <div>
                        <a href="#about">
                            <button type="button" className="more-button">
                                View my works  <i className="fa fa-arrow-down"></i>
                            </button>
                        </a>
                    </div>
                </div>
            </div>
    )
}

export default Homepage