import React, { Component } from 'react'

class SubNavbar extends Component {
    render() {
        return (
            <nav className='nav' id='navbar'>
                <div className='nav-content'>
                    <ul className='nav-items'>
                        <li className='nav-item'><a className='alinks' href="/">BACK TO HOME</a></li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default SubNavbar