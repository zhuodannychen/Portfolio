import React from "react";

interface Props {
  id?: string;
}

const Contact: React.FC<Props> = ({ id }) => {
    return (
        <div className="contact-container" id={id} style={{paddingTop: "20px"}}>
            <h1 className="contact-title" style={{color: "white", fontSize: "55px", marginBottom: "0"}}>CONTACT</h1>
            <hr style={{width: "100px", border: "1.5px solid white", marginBottom: "100px"}}></hr>
            
            <div>
                <h1 className="contact-text" style={{color: "white", fontFamily: 'Work Sans'}}>What's on your mind?</h1>
                <h3 className="contact-text" style={{color: "#AAA", fontFamily: 'Work Sans'}}>zhuodannychen [at] gmail.com</h3>
                <a href="#home"><button type="button" className="btn footerButton"><i className="fa fa-angle-double-up"></i></button></a>
            </div>
        </div>
    )
}

export default Contact