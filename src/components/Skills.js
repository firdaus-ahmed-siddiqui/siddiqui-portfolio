import React from 'react'
import { Link } from 'react-router-dom'
import './css/Skills.css'

export default function Skills() {
  return (
    <>
        <div className="my-skills wow fadeInUp" data-wow-delay="0.1s" id="my-skills">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="my-skills-img">
                                <img src="/assets/about.jpg" alt="img"/>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="my-skills-content">
                                <div className="section-header text-left">
                                    <p>Skills</p>
                                    <h5>2 Years Experience</h5>
                                </div>
                                <div className="my-skills-text">
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
                                        <p>Apex Programming</p><p>80%</p>
                                    </div>
                                    <div className="progress">
                                        <div className="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{width:'80%'}}></div>
                                    </div>
                                    <div className="skill-name">
                                        <p>CL Portal(a Q2 product)</p><p>95%</p>
                                    </div>
                                    <div className="progress">
                                        <div className="progress-bar" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100" style={{width:'95%'}}></div>
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
                                        <div className="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{width:'70%'}}></div>
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
                                        <p>SQL/SOQL</p><p>80%</p>
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
