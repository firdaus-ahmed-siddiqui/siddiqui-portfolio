import React from 'react'
import { Link } from 'react-router-dom'
import './css/Footer.css'

export default function Footer() {
  return (
    <>
        <div className="footer wow fadeIn" data-wow-delay="0.3s">
            <div className="container-fluid">
                <div className="container">
                    <div className="footer-info">
                        <h2>Firdaus Siddiqui</h2>
                        <h3>Kolkata, West Bengal, India</h3>
                        <div className="footer-menu">
                            <p>+91 7003886834</p>
                            <p>firdausahmed47@gmail.com</p>
                        </div>
                        <div className="footer-social">
                            <Link exact target='_blank' to=""><i className="fab fa-twitter"></i></Link>
                            <Link exact target='_blank' to=""><i className="fab fa-facebook-f"></i></Link>
                            <Link exact target='_blank' to=""><i className="fab fa-youtube"></i></Link>
                            <Link exact target='_blank' to=""><i className="fab fa-instagram"></i></Link>
                            <Link exact target='_blank' to="https://www.linkedin.com/in/firdaus-ahmed-siddiqui-b68172186/"><i className="fab fa-linkedin-in"></i></Link>
                        </div>
                    </div>
                </div>
                <div className="container copyright">
                    <p>&copy; <Link to="/">Firdaus's Portfolio</Link>, All Right Reserved | Developed By <Link exact target='_blank' to="https://www.linkedin.com/in/firdaus-ahmed-siddiqui-b68172186/">Firdaus Siddiqui</Link></p>
                </div>
            </div>
        </div>
    </>
  )
}
