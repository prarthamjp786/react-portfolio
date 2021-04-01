import React from 'react'

function Experience() {
    return (
        <div id="experience" className="experience">
            <div className="d-flex justify-content-center my-5">
                <h1>work experience</h1>
            </div>
            <div className="container experience-wrapper">
                <div className="timeline-block timeline-block-right">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>JAN 2020 - PRESENT</h3>
                        <h4>Pace University</h4>
                        <h5>Student Assistant, Application Developer</h5>
                        <p>
                            Developed backend server connected to database, fetching data of four million of products, and 
                            rendered them in frontend and graphically represented the data to the customer.
                        </p>
                        <p>
                            Assist the director of the data science lab with support and training of students in various tasks, 
                            such as explaining & showing the work of the web application, database, and firing queries in the database.
                        </p>
                        <p className="font-weight-bold">
                            Tools & Technologies: JavaScript, ReactJS, NodeJS, Express, ChartJS, HTML5, CSS, 
                            Bootstrap, MySQL Server, MS SQL Server, AWS LightSail, GitHub, Trello, Sourcetree.
                        </p>
                    </div>
                </div>

                <div className="timeline-block timeline-block-left">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>MAR 2018 - JUL 2019</h3>
                        <h4>Pragiti Inc.</h4>
                        <h5>Software Engineer</h5>
                        <p>Developed a functionality for e-commerce websites that allows a user to share product information with other users via email. 
                            <a href="https://www.enasco.com/">Enasco</a>
                        </p>
                        <p>
                            Resolved a technical and design issue for the applications in response to client reported bug and developed a new functionality to 
                            repopulate order history for missing entries.
                        </p>
                        <p>
                        Optimized the code for an itinerary website using Java 8, implementing new features reported by the client.
                        </p>
                        <p>
                        Developed a functionality that allowed users to update credit card information.
                        </p>
                        <p className="font-weight-bold">
                            Tools & Technologies: JAVA, JavaScript, jQuery, AJAX, Spring MVC, HTML5, CSS, Bootstrap, Material UI Eclipse, JIRA.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience
