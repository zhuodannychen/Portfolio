import React, { useState } from 'react'
import { Link } from "react-scroll";

const SmallNavbar: React.FC = () => {
    const [isNavCollapsed, setIsNavCollapsed] = useState<boolean>(true);

  const handleNavCollapse = (): void => {
      setIsNavCollapsed(!isNavCollapsed);
  }

  return (
    <nav className="nav navbar navbar-expand-lg">
      <button style={{margin: "15px"}} className="custom-toggler navbar-toggler" type="button" onClick={handleNavCollapse}>
        <span className="navbar-toggler-icon"></span>
      </button>
      <div style={{padding: !isNavCollapsed ? "10px" : "0", background: "#111"}} className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse nav-items`}>
        <li className='nav-itm'><Link activeClass="active" to="home" spy={true} smooth={true} offset={-72} duration={500}>HOME</Link></li>
        <li className='nav-itm'><Link activeClass="active" to="about" spy={true} smooth={true} offset={-70} duration={500}>ABOUT</Link></li>
        <li className='nav-itm'><Link activeClass="active" to="experiences" spy={true} smooth={true} offset={-70} duration={500}>EXPERIENCES</Link></li>
        <li className='nav-itm'><Link activeClass="active" to="notes" spy={true} smooth={true} offset={-70} duration={500}>WRITINGS</Link></li>
        <li className='nav-itm'><Link activeClass="active" to="projects" spy={true} smooth={true} offset={-70} duration={500}>PROJECTS</Link></li>
        <li className='nav-itm'><Link activeClass="active" to="contact" spy={true} smooth={true} offset={-70} duration={500}>CONTACT</Link></li>
        <a className='nav-itm' href="/zhuo_chen_resume_09_01_2022.pdf" rel="noopener noreferrer" target="_blank">RESUME</a>
        <a className='nav-itm' href="https://dannychen.substack.com/" rel="noopener noreferrer" target="_blank">BLOG</a>
      </div>
    </nav>
  );
}

export default SmallNavbar