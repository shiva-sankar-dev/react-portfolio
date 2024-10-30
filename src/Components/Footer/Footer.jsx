import React from 'react'
import './Footer.css'
import linkedin from '../../assets/linkedin.svg'
import github from '../../assets/github.svg'
import instagram from '../../assets/instagram.svg'
import facebook from '../../assets/facebook.svg'

const Footer = () => {
    return (
        <div className="footer-main">
            <div className='footer'>
                <div className="footer-top">
                    <div className="footer-top-left">
                        <h1>Shiva Sankar</h1>
                        <p>Proficient in HTML, CSS, Bootstrap, js for crafting visually appealing
                            and responsive user interfaces. Skilled in Python and Django for
                            backend development.</p>
                    </div>
                    <div className="footer-top-right">
                        <div className="footer-social-media">
                            <a href="https://www.linkedin.com/in/shiva-sankar-qw/"><img src={linkedin} alt="" /></a>
                        </div>
                        <div className="footer-social-media">
                            <a href="https://github.com/shiva-sankar-dev"><img src={github} alt="" /></a>
                        </div>
                        <div className="footer-social-media">
                            <a href="https://www.instagram.com/shivah_________/"><img src={instagram} alt="" /></a>
                        </div>
                        <div className="footer-social-media">
                            <a href="https://m.facebook.com/shiva.sankar.718689/"><img src={facebook} alt="" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
