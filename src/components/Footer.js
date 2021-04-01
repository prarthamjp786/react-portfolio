import React from 'react'
import { FacebookShareButton, FacebookIcon, LineShareButton, LinkedinIcon, 
    TwitterShareButton, TwitterIcon, LinkedinShareButton } from 'react-share'
import { Link } from 'react-scroll'

const Footer = () => {
    return (
        <div id="contact" className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="d-flex">
                            <p>Brooklyn, New York, NY 11228, USA</p>
                        </div>
                        <div className="d-flex">
                            <a href="tel:9174367240">+1 - 9174367240</a>
                        </div>
                        <div className="d-flex">
                            <p>prathmesh.j.pathak@gmail.com</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-2 col-sm-6">
                        <div className="row">
                            <div className="col">
                                <Link smooth={true} offset={-110} to="home" className="footer-nav">Home</Link>
                                <br />
                                <Link smooth={true} offset={-110} to="about" className="footer-nav">About me</Link>
                                <br />
                                <Link smooth={true} offset={-110} to="education" className="footer-nav">Education</Link>
                                <br />
                            </div>
                            <div className="col">
                                <Link smooth={true} offset={-110} to="services" className="footer-nav">Skills</Link>
                                <br />
                                <Link smooth={true} offset={-110} to="experience" className="footer-nav">Experience</Link>
                                <br />
                                <Link smooth={true} offset={-110} to="contact" className="footer-nav">Contact me</Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-5 col-sm-6 align-items-center">
                        <div className="d-flex justify-content-center">
                            <FacebookShareButton
                                url={"https://github.com/prarthamjp786"}
                                quote={"Fullstack Developer"}
                                hashtag="#javascript"
                            >
                                <FacebookIcon className="mx-3" size={36} />
                            </FacebookShareButton>

                            <TwitterShareButton
                                url={"https://twitter.com/prathmeshjp786"}
                                quote={"Fullstack Developer"}
                                hashtag="#javascript"
                            >
                                <TwitterIcon className="mx-3" size={36} />
                            </TwitterShareButton>

                            <LinkedinShareButton
                                url={"https://www.linkedin.com/in/prathmesh-pathak/"}
                                quote={"Fullstack Developer"}
                                hashtag="#javascript"
                            >
                                <LinkedinIcon className="mx-3" size={36} />
                            </LinkedinShareButton>
                        </div>

                        <p className="pt-3 text-center">Copyright&copy;
                            {new Date().getFullYear()}&nbsp;Prathmesh Pathak | All Rights Reserved
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
