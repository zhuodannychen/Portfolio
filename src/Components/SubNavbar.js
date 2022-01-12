import React, { Component } from 'react'

class SubNavbar extends Component {
    render() {
        return (
            <nav className='nav' id='navbar'>
                <div className='nav-content'>
                    <ul style={{margin: 0, listStyleType: "none"}} className='nav-items'>
                        <li style={{margin: 0}} className='nav-itm'><a className='alinks' href="/">BACK TO HOME</a></li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default SubNavbar