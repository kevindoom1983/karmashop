import React from 'react'
import About from './About';
import NewsLetter from './NewsLetter';
import Instagram from './Instagram';
import Follow from './Follow';




const Footer = () => {
    return (
            <div>
                <footer className="footer-area section_gap">
                    <div className="container">
                        <div className="row">
                            <About/>
                            <NewsLetter/>
                            <Instagram/>
                            <Follow/>
                        </div>
                        <div className="footer-bottom d-flex justify-content-center align-items-center flex-wrap">
                            <p className="footer-text m-0">
                        Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>

                            </p>
                        </div>
                    </div>    
                </footer>
            </div>
          
          );
    }
    
    export default Footer; 