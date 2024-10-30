import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img_circle.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
const Hero = () => {
    return (
        <div id='home' className='hero'>
            <div className="profile-border">
                <img className='profile-image' src={profile_img} alt="" />

            </div>
            <div className="hero-content">
                <h4 className='hi-there'>Hi There!</h4>
                <h1 className='my-name'>I'M SHIVA SANKAR</h1>
                <p className='hero-about-me'>Proficient in HTML, CSS, Bootstrap and JS for crafting visually appealing
                    and responsive user interfaces. Skilled in Python and Django for
                    backend development.</p>
                <div className="social-media-logos">
                    <p><a href="https://www.linkedin.com/in/shiva-sankar-qw/"><i class="fa-brands fa-linkedin"></i></a></p>
                    <p><a href="https://github.com/shiva-sankar-dev"><i class="fa-brands fa-github"></i></a></p>
                    <p><a href="https://www.instagram.com/shivah_________/"><i class="fa-brands fa-instagram"></i></a></p>
                    <p><a href="https://m.facebook.com/shiva.sankar.718689/"><i class="fa-brands fa-facebook"></i></a></p>
                </div>
                <div className="hero-action">

                    <AnchorLink href='#about' className='more-link'><div className="more-about-me">  MORE ABOUT ME </div></AnchorLink>

                    <AnchorLink href='#work' className='more-link'><div className="my-portfolio"> MY PORTFOLIO </div></AnchorLink>
                </div>
            </div>
        </div>
    )
}

export default Hero
