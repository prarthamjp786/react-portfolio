import React from 'react'
import aws from '../images/aws.png'
import css from '../images/css.png'
import html from '../images/html.jpg'
import java from '../images/java.png'
import js from '../images/js.png'
import mysql from '../images/mysql.jpg'
import node from '../images/node.png'
import react from '../images/react.png'

function Services() {
    return (
        <div id="services" className="services">
            <h1 className="py-5">Skills</h1>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="box">
                                <div className="circle">
                                    <img className="icon" src={java} alt="Java..." />
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="box">
                                <div className="circle">
                                    <img src={node} className="icon" alt="Node..." />
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="box">
                                <div className="circle">
                                    <img src={react} className="icon" alt="React..." />
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="box">
                                <div className="circle">
                                <img src={js} className="icon" alt="JavaScript" />
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="box">
                                <div className="circle">
                                <img src={aws} className="icon" alt="AWS..." />
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="box">
                                <div className="circle">
                                <img src={mysql} className="icon" alt="MySQL..." />
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="box">
                                <div className="circle">
                                <img src={html} className="icon" alt="HTML5..." />
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="box">
                                <div className="circle">
                                <img src={css} className="icon" alt="CSS3..." />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Services
