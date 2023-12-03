import React from 'react'
import { Link } from 'react-router-dom'
import './css/About.css'

export default function About() {
  return (
    <>
        <div className="about wow fadeInUp" data-wow-delay="0.1s" id="about">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="about-img">
                                <img src="/assets/about.jpg" alt="Image"/>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-content">
                                <div className="section-header text-left">
                                    <p>Learn About Me</p>
                                    <h2>2 Years Experience</h2>
                                </div>
                                <div className="about-text">
                                    <p>
                                    B.Tech Graduate|Salesforce certified|2 years of experience in Software Development|Sound understanding of XML, CSS3, JSON, Database, and SQL queries|Capable of Performance Testing, Documentation, and Deployment on live site
                                    </p>
                                </div>
                                <div className="skills">
                                    <div className="skill-name">
                                        <p>Salesforce Development</p><p>85%</p>
                                    </div>
                                    <div className="progress">
                                        <div className="progress-bar" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" style={{width:'85%'}}></div>
                                    </div>
                                    <div className="skill-name">
                                        <p>Web Development</p><p>80%</p>
                                    </div>
                                    <div className="progress">
                                        <div className="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{width:'80%'}}></div>
                                    </div>
                                    <div className="skill-name">
                                        <p>JavaScript</p><p>80%</p>
                                    </div>
                                    <div className="progress">
                                        <div className="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{width:'80%'}}></div>
                                    </div>
                                    <div className="skill-name">
                                        <p>React JS</p><p>70%</p>
                                    </div>
                                    <div className="progress">
                                        <div className="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{width:'80%'}}></div>
                                    </div>
                                    <div className="skill-name">
                                        <p>HTML</p><p>90%</p>
                                    </div>
                                    <div className="progress">
                                        <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{width:'90%'}}></div>
                                    </div>
                                    <div className="skill-name">
                                        <p>CSS/SCSS</p><p>90%</p>
                                    </div>
                                    <div className="progress">
                                        <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{width:'90%'}}></div>
                                    </div>
                                    <div className="skill-name">
                                        <p>Java</p><p>80%</p>
                                    </div>
                                    <div className="progress">
                                        <div className="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{width:'80%'}}></div>
                                    </div>
                                    <div className="skill-name">
                                        <p>Lightning Web Components (LWC)</p><p>65%</p>
                                    </div>
                                    <div className="progress">
                                        <div className="progress-bar" role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100" style={{width:'65%'}}></div>
                                    </div>
                                    <div className="skill-name">
                                        <p>Data Migration</p><p>75%</p>
                                    </div>
                                    <div className="progress">
                                        <div className="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width:'75%'}}></div>
                                    </div>
                                </div>
                                <Link className="btn" to="">Learn More</Link>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    </>
  )
}
