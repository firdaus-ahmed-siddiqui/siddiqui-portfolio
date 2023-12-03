import React from 'react'
import { Link } from 'react-router-dom'
import './css/Blog.css'

export default function Blog() {
  return (
    <>
        <div className="blog" id="blog">
            <div className="container">
                <div className="section-header text-center wow zoomIn" data-wow-delay="0.1s">
                    <p>From Blog</p>
                    <h2>Latest Articles</h2>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="blog-item wow fadeInUp" data-wow-delay="0.1s">
                            <div className="blog-img">
                                <img src="/assets/dooars.jpeg" alt="dooars_img"/>
                            </div>
                            <div className="blog-text">
                                <h2>Office trip to dooars</h2>
                                <div className="blog-meta">
                                    <p><i className="far fa-user"></i>Tourism</p>
                                    <p><i className="far fa-list-alt"></i>Dooars</p>
                                    <p><i className="far fa-calendar-alt"></i>1-Jan-2024</p>
                                    <p><i className="far fa-comments"></i>5</p>
                                </div>
                                <p>
                                    Lorem ipsum dolor sit amet elit. Nullam commodo mattis mi. Nullam eu erat lectus. Proin viverra risus vitae luctus. Proin ut ante, vitae sapien. Fusce sem ac erat rhoncus, ornare mattis nisl massa et eros vitae pulvin
                                </p>
                                <Link className="btn" to="">Read More <i className="fa fa-angle-right"></i></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="blog-item wow fadeInUp" data-wow-delay="0.3s">
                            <div className="blog-img">
                                <img src="/assets/dooars.jpeg" alt="Blog"/>
                            </div>
                            <div className="blog-text">
                                <h2>Lorem ipsum dolor sit amet</h2>
                                <div className="blog-meta">
                                    <p><i className="far fa-user"></i>Admin</p>
                                    <p><i className="far fa-list-alt"></i>Apps Design</p>
                                    <p><i className="far fa-calendar-alt"></i>01-Jan-2045</p>
                                    <p><i className="far fa-comments"></i>10</p>
                                </div>
                                <p>
                                    Lorem ipsum dolor sit amet elit. Nullam commodo mattis mi. Nullam eu erat lectus. Proin viverra risus vitae luctus. Proin ut ante, vitae sapien. Fusce sem ac erat rhoncus, ornare mattis nisl massa et eros vitae pulvin
                                </p>
                                <Link className="btn" to="">Read More <i className="fa fa-angle-right"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
