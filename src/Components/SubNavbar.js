import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class SubNavbar extends Component {
    render() {
        return (
            <nav className='nav' id='navbar'>
                <div className='nav-content'>
                    <ul style={{margin: 0, listStyleType: "none"}} className='nav-items'>
                        <li style={{margin: 0}} className='nav-itm'><Link className='alinks' to="/">BACK TO HOME</Link></li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default SubNavbar