import React from 'react'
import author from '../prathmesh.jpg'
import resume from '../images/resume.pdf'

function AboutMe() {
    return (
        <div id="about" className="container py-5">
            <div className="row">
                <div className="col-lg-6 col-xm-12">
                    <div className="photo-wrap mb-5">
                        <img className="profile-img" src={author} alt="Author..."></img>
                    </div>
                </div>
                <div className="col-lg-6 col-xm-12">
                    <h2 className="about-heading">About Me</h2>
                    <p>
                        Hello, I'm a NYC based software engineer currently seeking a full-time software development role in the United States.
                        
                        I am a computer programmer, sometimes called a software developer, a programmer or more recently a coder, is a person who creates computer software. 
                        
                        I'm that person with over 3 years of hands-on experience in Design, Development, and Implementation of business applications. 
                        
                        I love building things. My expertise is in building scalable web and mobile applications using state of the art technologies. 
                    </p>
                    <h2 className="about-heading">Contact Me</h2>
                    <p>Prathmesh Pathak</p>
                    <p>prathmesh.j.pathak@gmail.com</p>
                    <p><a href="https://github.com/prarthamjp786">GitHub</a></p>
                    <p><a href="https://www.linkedin.com/in/prathmesh-pathak/">LinkedIn</a></p>
                    <a href={resume} target="blank" class="btn btn-dark">Download Resume</a>
                </div>
            </div>
        </div>
    )
}

export default AboutMe
