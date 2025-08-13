import React from "react";

interface Props {
  id?: string;
}

const Footer: React.FC<Props> = ({ id }) => {
    return (
        <div className="contact-container" id={id}>
            <footer>
                <div className="social-links">
                    <div style={{display: "flex", justifyContent: "center", alignItems: "center", gap: "20px"}}>
                        {/*Instagram*/}
                        <div className="c--anim-btn">
                            <a href="https://www.instagram.com/dannychen8432/" rel="noopener noreferrer" target="_blank">
                            <span className="c-anim-btn">
                                <i className="fab fa-instagram" aria-hidden="true"/>
                            </span>
                            <span>
                                <i className="fab fa-instagram" aria-hidden="true"/>
                            </span>
                            </a>
                        </div>

                        {/*LinkedIn*/}
                        <div className="c--anim-btn">
                            <a href="https://www.linkedin.com/in/zhuodannychen/" rel="noopener noreferrer" target="_blank">
                            <span className="c-anim-btn">
                                <i className="fab fa-linkedin" aria-hidden="true"/>
                            </span>
                            <span>
                                <i className="fab fa-linkedin" aria-hidden="true"/>
                            </span>
                            </a>
                        </div>

                        {/*YouTube*/}
                        <div className="c--anim-btn">
                            <a href="https://www.youtube.com/channel/UC1C-oovRv0v4a48QlIr6hWg?view_as=subscriber" rel="noopener noreferrer" target="_blank">
                            <span className="c-anim-btn">
                                <i className="fab fa-youtube" aria-hidden="true"/>
                            </span>
                            <span>
                                <i className="fab fa-youtube" aria-hidden="true"/>
                            </span>
                            </a>
                        </div>

                        {/*Github*/}
                        <div className="c--anim-btn">
                            <a href="https://github.com/zhuodannychen" rel="noopener noreferrer" target="_blank">
                            <span className="c-anim-btn">
                                <i className="fab fa-github" aria-hidden="true"/>
                            </span>
                            <span>
                                <i className="fab fa-github" aria-hidden="true"/>
                            </span>
                            </a>
                        </div>

                        {/*Email*/}
                        <div className="c--anim-btn">
                            <a href="mailto:zhuodannychen@gmail.com">
                            <span className="c-anim-btn">
                                <i className="fas fa-envelope" aria-hidden="true"/>
                            </span>
                            <span>
                                <i className="fas fa-envelope" aria-hidden="true"/>
                            </span>
                            </a>
                        </div>
                    </div>
                </div>
                <p style={{color: "white", padding: "10px"}}>Zhuo Chen <span style={{color: "#00acee"}}><i className="far fa-copyright"></i>2020-2025</span></p>
            </footer>
        </div>
    )
}

export default Footer