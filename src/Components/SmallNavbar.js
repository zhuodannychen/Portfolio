import React, { useState } from 'react'
import { Link } from "react-scroll";
import { Link as ELink } from "react-router-dom";
import Resume from '../Assets/Resumes/zhuo_chen_resume.pdf'

const SmallNavbar = props => {
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => {
      console.log("clicked")
      setIsNavCollapsed(!isNavCollapsed);
  }

  return (
    <nav className="nav navbar navbar-expand-lg">
      <button style={{margin: "15px"}} className="custom-toggler navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
        <span className="navbar-toggler-icon"></span>
      </button>

      <div style={{padding: !isNavCollapsed ? "10px" : "0", background: "#111"}} className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse nav-items`} id="navbarsExample09">
      <li className='nav-itm'><Link activeClass="active" to="home" spy={true} smooth={true} offset={-72} duration={500}>HOME</Link></li>
        <li className='nav-itm'><Link activeClass="active" to="about" spy={true} smooth={true} offset={-70} duration={500}>ABOUT</Link></li>
        <li className='nav-itm'><Link activeClass="active" to="experiences" spy={true} smooth={true} offset={-70} duration={500}>EXPERIENCES</Link></li>
        <li className='nav-itm'><Link activeClass="active" to="notes" spy={true} smooth={true} offset={-70} duration={500}>NOTES</Link></li>
        <li className='nav-itm'><Link activeClass="active" to="projects" spy={true} smooth={true} offset={-70} duration={500}>PROJECTS</Link></li>
        <li className='nav-itm'><Link activeClass="active" to="contact" spy={true} smooth={true} offset={-70} duration={500}>CONTACT</Link></li>
        {/* <li className='nav-itm'><ELink className='alinks' to="/notes">NOTES</ELink></li> */}
        <a style={{textDecoration: "none"}} className='nav-itm' href={Resume} rel="noopener noreferrer" target="_blank">RESUME</a>
      </div>
    </nav>
  );
}

export default SmallNavbar