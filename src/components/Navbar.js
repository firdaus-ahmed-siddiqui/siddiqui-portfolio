import React from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'
import './js/main.js'
import './css/Navbar.css'


export default function Navbar(props) {
  return (
    <>
        <div className="navbar navbar-expand-lg bg-light navbar-light">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand">{props.title}</Link>
                <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                    <div className="navbar-nav ml-auto">
                        <Link to="/" className="nav-item nav-link active">Home</Link>
                        <Link to="/about" className="nav-item nav-link">About</Link>
                        <Link to="/experience" className="nav-item nav-link">Experience</Link>
                        <Link to="/education" className="nav-item nav-link">Education</Link>
                        <Link to="/services" className="nav-item nav-link">Service</Link>
                        <Link to="/portfolio" className="nav-item nav-link">Portfolio</Link>
                        <Link to="/blog" class="nav-item nav-link">Blog</Link>
                        <Link to="/review" class="nav-item nav-link">Review</Link>
                        <Link to="/contact" class="nav-item nav-link">Contact</Link>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}


//Defining proptypes
Navbar.propTypes = { 
    title : PropTypes.string.isRequired,
};

//Defining default value of prop
Navbar.defaultProps = {
    title : 'Website name',
}