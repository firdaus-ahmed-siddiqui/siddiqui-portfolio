import React from 'react'
import { Link } from 'react-router-dom'
import './css/Portfolio.css'

export default function Portfolio() {
  return (
    <>
        <div className="portfolio" id="portfolio">
            <div className="container">
                <div className="section-header text-center wow zoomIn" data-wow-delay="0.1s">
                    <p>My Portfolio</p>
                    <h2>My Excellent Portfolio</h2>
                </div>
                <div className="row">
                    <div className="col-12">
                        <ul id="portfolio-filter">
                            <li data-filter="*" className="filter-active">All</li>
                            <li data-filter=".filter-1">Web Design</li>
                            <li data-filter=".filter-2">Mobile Apps</li>
                            <li data-filter=".filter-3">Game Dev</li>
                        </ul>
                    </div>
                </div>
                <div className="row portfolio-container">
                    <div className="col-lg-4 col-md-6 col-sm-12 portfolio-item filter-1 wow fadeInUp" data-wow-delay="0.0s">
                        <div className="portfolio-wrap">
                            <div className="portfolio-img">
                                <img src="/assets/dooars.jpeg" alt="img"/>
                            </div>
                            <div className="portfolio-text">
                                <h3>eCommerce Website</h3>
                                <Link className="btn" to="/" data-lightbox="portfolio">+</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 portfolio-item filter-2 wow fadeInUp" data-wow-delay="0.2s">
                        <div className="portfolio-wrap">
                            <div className="portfolio-img">
                                <img src="/assets/dooars.jpeg" alt="img"/>
                            </div>
                            <div className="portfolio-text">
                                <h3>Product Landing Page</h3>
                                <Link className="btn" to="/" data-lightbox="portfolio">+</Link>                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 portfolio-item filter-3 wow fadeInUp" data-wow-delay="0.4s">
                        <div className="portfolio-wrap">
                            <div className="portfolio-img">
                                <img src="/assets/dooars.jpeg" alt="img"/>
                            </div>
                            <div className="portfolio-text">
                                <h3>JavaScript quiz game</h3>
                                <Link className="btn" to="/" data-lightbox="portfolio">+</Link>                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 portfolio-item filter-1 wow fadeInUp" data-wow-delay="0.6s">
                        <div className="portfolio-wrap">
                            <div className="portfolio-img">
                                <img src="/assets/dooars.jpeg" alt="img"/>
                            </div>
                            <div className="portfolio-text">
                                <h3>JavaScript drawing</h3>
                                <Link className="btn" to="/" data-lightbox="portfolio">+</Link>                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 portfolio-item filter-2 wow fadeInUp" data-wow-delay="0.8s">
                        <div className="portfolio-wrap">
                            <div className="portfolio-img">
                                <img src="/assets/dooars.jpeg" alt="img"/>
                            </div>
                            <div className="portfolio-text">
                                <h3>Social Mobile Apps</h3>
                                <Link className="btn" to="/" data-lightbox="portfolio">+</Link>                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 portfolio-item filter-3 wow fadeInUp" data-wow-delay="1s">
                        <div className="portfolio-wrap">
                            <div className="portfolio-img">
                                <img src="/assets/dooars.jpeg" alt="img"/>
                            </div>
                            <div className="portfolio-text">
                                <h3>Company Website</h3>
                                <Link className="btn" to="/" data-lightbox="portfolio">+</Link>                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
