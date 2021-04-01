import React from 'react'
import sample from '../images/sample.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons'
import { PopupboxManager, PopupboxContainer } from 'react-popupbox'
import 'react-popupbox/dist/react-popupbox.css'
import petadog from '../images/petadog.JPG'
import enasco from '../images/enasco.JPG'
import mauijim from '../images/mauijim.JPG'
import heartrate from '../images/heartrate.jpg'

const Portfolio = () => {
    const openPopupboxPetadog = () => {
        const content = (
            <>
                <img className="portfolio-image-popupbox" src={petadog} alt="Pet a Dog..." />
                <p>Discover local pet sitters and dog walkers, read reviews, and find the right fit for you.</p>
                <b><a className="hyper-link" onClick={() => window.open("https://petadog.herokuapp.com/home", "_blank")}>View Project</a></b>
            </>
        )
        PopupboxManager.open({content})
        PopupboxManager.update({
            content,
            config: {
                titleBar: {
                    text: "Pet a dog web app"
                }
            }
        })
    }

    const popupboxConfigPetadog = {
        titleBar: {
            enable: true,
            text: ''
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    const openPopupboxEnasco = () => {
        const content = (
            <>
                <img className="portfolio-image-popupbox" src={enasco} alt="Enasco.." />
                <p>A B2B website, that allows user to purchase products in all categories.</p>
                <b><a className="hyper-link" onClick={() => window.open("https://github.com/prarthamjp786/pet-a-dog", "_blank")}>View Project</a></b>
            </>
        )
        PopupboxManager.open({content})
        PopupboxManager.update({
            content,
            config: {
                titleBar: {
                    text: "Enasco"
                }
            }
        })
    }

    const popupboxConfigEnasco = {
        titleBar: {
            enable: true,
            text: 'Enasco'
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    const openPopupboxMauijim = () => {
        const content = (
            <>
                <img className="portfolio-image-popupbox" src={mauijim} alt="Mauijim.." />
                <p>Mauijim offers over 125 styles of sunglasses, 100% of which are polarized and protect from 100% of UVA and UVB rays.</p>
                <b><a className="hyper-link" onClick={() => window.open("https://www.mauijim.com/", "_blank")}>View Project</a></b>
            </>
        )
        PopupboxManager.open({content})
        PopupboxManager.update({
            content,
            config: {
                titleBar: {
                    text: "Mauijim"
                }
            }
        })
    }

    const popupboxConfigMauijim = {
        titleBar: {
            enable: true,
            text: 'Mauijim'
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    const openPopupboxHeartRate = () => {
        const content = (
            <>
                <img className="portfolio-image-popupbox" src={heartrate} alt="Heart Rate Profiling App.." />
                <p>A simple application that helps user to check their heartrate by placing their index finger on back of camera lens.</p>
                <b><a className="hyper-link" onClick={() => window.open("https://github.com/prarthamjp786/heart_rate", "_blank")}>View Project</a></b>
            </>
        )
        PopupboxManager.open({content})
        PopupboxManager.update({
            content,
            config: {
                titleBar: {
                    text: "Heart rate monitoring and profiling app"
                }
            }
        })
    }

    const popupboxConfigHeartRate = {
        titleBar: {
            enable: true,
            text: 'Heart rate monitoring and profiling app'
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    return (
        <div id="education" className="portfolio-wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-xm-12">
                    <h2 className="about-heading">Education</h2>
                    </div>
                    <div className="col-lg-6 col-xm-12">
                        <h2 className="about-heading">Pace University, NYC</h2>
                        <p>
                            Master's in Computer Science. <span className="font-italic">May 2021</span>
                        </p>

                        <h2 className="about-heading">University of Mumbai, India</h2>
                        <p>
                            Bachelor's in Information Technology. <span className="font-italic">June 2018</span>
                        </p>
                    </div>
                </div>

                <h1 className="text-uppercase text-center py-5">Projects</h1>
                <div className="image-box-wrapper row justify-content-center">
                    <div className="portfolio-image-box" onClick={openPopupboxPetadog}>
                        <img src={petadog} className="portfolio-image" alt="Pet a Dog..." />
                        <div className="overflow"></div>
                        <FontAwesomeIcon icon={faSearchPlus} className="portfolio-icon" />
                    </div>

                    <div className="portfolio-image-box" onClick={openPopupboxEnasco}>
                        <img src={enasco} className="portfolio-image" alt="Enasco..." />
                        <div className="overflow"></div>
                        <FontAwesomeIcon icon={faSearchPlus} className="portfolio-icon" />
                    </div>

                    <div className="portfolio-image-box" onClick={openPopupboxMauijim}>
                        <img src={mauijim} className="portfolio-image" alt="Mauijim..." />
                        <div className="overflow"></div>
                        <FontAwesomeIcon icon={faSearchPlus} className="portfolio-icon" />
                    </div>

                    <div className="portfolio-image-box" onClick={openPopupboxHeartRate}>
                        <img src={heartrate} className="portfolio-image" alt="Heart Rate Monitor..." />
                        <div className="overflow"></div>
                        <FontAwesomeIcon icon={faSearchPlus} className="portfolio-icon" />
                    </div>
                </div>
            </div>
            <PopupboxContainer {...popupboxConfigPetadog} />
            <PopupboxContainer {...popupboxConfigEnasco} />
            <PopupboxContainer {...popupboxConfigMauijim} />
            <PopupboxContainer {...popupboxConfigHeartRate} />
        </div>
    )
}

export default Portfolio
