import React from 'react'
import Typed from 'react-typed'
import { Link } from 'react-scroll'

const Header = () => {
    return (
        <div id="home" className="header-wraper">
            <div className="main-info">
                <canvas></canvas>
                <h1>Hi, I am Prathmesh Pathak</h1>
                <Typed 
                className="typed-text" 
                strings={["Web Design", "Web Development", "Backend Development", "Full Stack Development"]} 
                typeSpeed={50}
                backSpeed={70}
                loop
                />
                <Link smooth={true} offset={-110} to="about" className="btn-main-offer">Contact Me</Link>
            </div>
        </div>
    )
}

export default Header
