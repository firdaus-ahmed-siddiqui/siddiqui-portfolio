import React from 'react'
import './css/Home.css'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
        <div className="hero" id="home">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-sm-12 col-md-6">
                        <div className="hero-content">
                            <div className="hero-text">
                                <p>I'm</p>
                                <h1>Firdaus Siddiqui</h1>
                                <h2>ok</h2>
                                <div className="typed-text">Software Engineer, Web Developer, Front End Developer, Apps Designer, Apps Developer</div>
                            </div>
                            <div className="hero-btn">
                                <Link className="btn" to="">Hire Me</Link>
                                <Link className="btn" to="">Contact Me</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 d-none d-md-block">
                        <div className="hero-image">
                            <img src="/assets/about.jpg" alt="Firdaus img"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
