import React, { useState } from 'react'
import { Link } from "react-scroll";

const SmallNavbar: React.FC = () => {
    const [isNavCollapsed, setIsNavCollapsed] = useState<boolean>(true);

  const handleNavCollapse = (): void => {
      setIsNavCollapsed(!isNavCollapsed);
  }

  return (
    <nav className="nav navbar navbar-expand-lg">
      <button className="custom-toggler navbar-toggler" type="button" onClick={handleNavCollapse}>
        <span className="hamburger-icon">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </button>
      <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse nav-items`}>
        <ul className="navbar-nav">
        <li className='nav-itm'><Link activeClass="active" to="home" spy={true} smooth={true} offset={-72} duration={500}>HOME</Link></li>
        <li className='nav-itm'><Link activeClass="active" to="about" spy={true} smooth={true} offset={-70} duration={500}>ABOUT</Link></li>
        <li className='nav-itm'><Link activeClass="active" to="experiences" spy={true} smooth={true} offset={-70} duration={500}>EXPERIENCES</Link></li>
        <li className='nav-itm'><Link activeClass="active" to="notes" spy={true} smooth={true} offset={-70} duration={500}>WRITINGS</Link></li>
        <li className='nav-itm'><Link activeClass="active" to="projects" spy={true} smooth={true} offset={-70} duration={500}>PROJECTS</Link></li>
        <li className='nav-itm'><Link activeClass="active" to="contact" spy={true} smooth={true} offset={-70} duration={500}>CONTACT</Link></li>
        {/* <li className='nav-itm'><ELink className='alinks' to="/notes">NOTES</ELink></li> */}
        <a style={{textDecoration: "none"}} className='nav-itm' href="/zhuo_chen_resume_09_01_2022.pdf" rel="noopener noreferrer" target="_blank">RESUME</a>
        <a style={{textDecoration: "none"}} className='nav-itm' href="https://dannychen.substack.com/" rel="noopener noreferrer" target="_blank">BLOG</a>
        </ul>
      </div>
    </nav>
  );
}

export default SmallNavbar