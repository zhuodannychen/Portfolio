import React from 'react'

const SmallNavbar: React.FC = () => {
  return (
    <nav className="nav navbar navbar-expand-lg">
      <input type="checkbox" id="nav-toggle" className="nav-toggle" />
      <label htmlFor="nav-toggle" className="custom-toggler navbar-toggler">
        <span className="hamburger-icon">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </label>
      <div className="navbar-collapse nav-items collapse">
        <ul className="navbar-nav">
        <li className='nav-itm'><a href="#home">HOME</a></li>
        <li className='nav-itm'><a href="#about">ABOUT</a></li>
        <li className='nav-itm'><a href="#experiences">EXPERIENCES</a></li>
        <li className='nav-itm'><a href="#notes">WRITINGS</a></li>
        <li className='nav-itm'><a href="#projects">PROJECTS</a></li>
        <li className='nav-itm'><a href="#contact">CONTACT</a></li>
        <a style={{textDecoration: "none"}} className='nav-itm' href="/zhuo_chen_resume_09_01_2022.pdf" rel="noopener noreferrer" target="_blank">RESUME</a>
        <a style={{textDecoration: "none"}} className='nav-itm' href="https://dannychen.substack.com/" rel="noopener noreferrer" target="_blank">BLOG</a>
        </ul>
      </div>
    </nav>
  );
}

export default SmallNavbar