import React from 'react'
import './css/About.css'

export default function About() {
  return (
    <>
      <div className="about wow fadeInUp" data-wow-delay="0.1s" id="about">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="about-haeder">
                                <div className="section-header text-left">
                                    <p>About</p>
                                    <div className="about-text">
                                    </div>
                                    <ul>
                                        <li>Software Developer with 2 years of experience</li>
                                        <li>Worked with Software Development Life Cycle(SDLC) and agile methodologies</li>
                                        <li>Expertise in Salesforce , Apex Programming, CL Portal(a Q2 Product), Java, React, Javascript, HTML, CSS and UI with Responsive Designs</li>
                                        <li>Have intermediate understanding of Python and MYSQL</li>
                                        <li>Have good understanding of Problem Solving, DBMS, Operating Systyem</li>
                                        <li>Experience with Git, GitHub and JIRA</li>
                                    </ul>
                                    <br></br>
                                    <span>
                                    A dynamic and adaptable software professional with proficiency in quickly mastering new technologies. I thrive in team settings, consistently contributing and offering essential support. I am also distinguished by my articulate communication skills, ensuring clarity and precision in conveying complex ideas.
                                    </span>
                                </div>
                                
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="section-header text-left">
                                <p>Basic Information</p>
                            </div>
                            <div className="about-content"> 
                                <div className="skills">
                                    <div className="skill-name">
                                        <p className="about-text">DATE OF BIRTH:</p>
                                        <p className="about-value">February 12, 2000</p>
                                    </div>
                                    <div className="skill-name">
                                        <p className="about-text">EMAIL:</p>
                                        <p className="about-value">firdausahmed47@gmail.com</p>
                                    </div>
                                    <div className="skill-name">
                                        <p className="about-text">PHONE:</p>
                                        <p className="about-value">+91 7003886834</p>
                                    </div>
                                    <div className="skill-name">
                                        <p className="about-text">ADDRESS:</p>
                                        <p className="about-value">Kolkata, India</p>
                                    </div>
                                    <div className="skill-name">
                                        <p className="about-text">LANGUAGE:</p>
                                        <p className="about-value">English, Hindi, Urdu, Bengali</p>
                                    </div>
                                </div>
                               
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    </>
  )
}


