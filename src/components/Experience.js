import React from 'react'
import './css/Experience.css'
import { Link } from 'react-router-dom'


export default function Experience() {
  return (
    
    <>
        <div className="experience" id="experience">
                <div className="container">
                    <header className="section-header text-center wow zoomIn" data-wow-delay="0.1s">
                        <p>My Resume</p>
                        <h2>Working Experience</h2>
                    </header>
                    <div className="timeline">
                        <div className="timeline-item left wow slideInLeft" data-wow-delay="0.1s">
                            <div className="timeline-text">
                                <div className="timeline-date">11/2021 - Present</div>
                                <h2>Software Engineer</h2>
                                <h4>Kolkata, West Bengal, India</h4>
                                <h4><Link target='_blank' to='https://www.cloudkaptan.com/'> CloudKaptan Consultancy Services Pvt Ltd </Link></h4>
                                <p>
                                    Our work domain here involved the development of end-to-end P2P lending / Investment portals and backend systems on salesforce. Our task here was to customize a standard LMS (Loan Management System) app built on salesforce as per customer requirements.
                                </p>
                                <br/>
                                <h4>Responsibilities</h4>
                                <ul>
                                    <li>Customer interaction & requirement analysis.</li>
                                    <li>Solution design & development planning for end-to-end delivery.</li>
                                </ul>
                                <h4>Technical Experience</h4>
                                <ul>
                                    <li>Developed portal API's using Apex (Java Based) programming language and SOQL.</li>
                                    <li>Developed multiple Q2 portal functionalities on Salesforce projects using JSON, HTML, CSS, Javascript.</li>
                                    <li>Designed UI for multiple applications using LWC, Visualforce page, Javascript, SCSS and CSS. Experienced in mobile-first design approach.</li>
                                    <li>Experienced in setting up Salesforce Experience Cloud Community.</li>
                                    <li>Salesforce Admin process setup like Flows, Process Builder, profiles, permission sets, and sharing settings.</li>
                                    <li>Worked on data migration from clients legacy system to salesforce.</li>
                                </ul>

                            </div>
                        </div>
                        <div className="timeline-item right wow slideInRight" data-wow-delay="0.1s">
                            <div className="timeline-text">
                                <div className="timeline-date">6/2021 - 10/2021</div>
                                <h2>Web Developer</h2>
                                <h4>Kolkata, West Bengal, India</h4>
                                <p>
                                    Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit semper pretium.
                                </p>
                                <br/>
                                <h4>Responsibilities</h4>
                                <ul>
                                    <li>End-to-end development of food delivery webiste.</li>
                                </ul>
                                <h4>Technical Experience</h4>
                                <ul>
                                    <li>Developed responsive, mobile first website development using HTML, CSS, React, JavaScript. Planned website development, converting mockups into usable web presence.</li>
                                    <li>Provided security maintenance and patching on website interface to maintain viability after launch.</li>
                                    <li>UI testing on multiple devices using BrowserStack.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="timeline-item left wow slideInLeft" data-wow-delay="0.1s">
                            <div className="timeline-text">
                                <div className="timeline-date">2045 - 2050</div>
                                <h2>Web Developer</h2>
                                <h4>Soft Agency, San Francisco, CA</h4>
                                <p>
                                    Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit semper pretium.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    </>
  )
}
