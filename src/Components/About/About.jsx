import React from 'react'
import './About.css'
import profile_img from '../../assets/profile_img.jpeg'
import resume from '../../assets/shiva-sankar-CV.pdf'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const About = () => {
    return (
        <div id='about' className='about'>
            <div className="about-title">
                <p>Get to know</p>
                <h1>
                    About me
                </h1>
            </div>
            <div className="about-main">
                <div className="about-left">
                    <img className='profile_image' src={profile_img} alt="" />
                </div>
                <div className="about-right">
                    <h3>I'm <span className='my-name'>Shiva Sankar</span>, a Web Developer</h3>
                    <p>I'm Shiva Sankar, a web developer with experience in building user-friendly and efficient websites. I work with HTML, CSS, Bootstrap, JavaScript, Python, and Django.</p>
                    <p>

                        I am dedicated to crafting exceptional digital experiences. With a blend of creativity and technical prowess,
                        I bring ideas to life through clean, efficient, and user-friendly websites.
                        I believe in the power of code to transform ideas into tangible solutions.
                    </p>
                    <div className="two-colum">
                        <div className="left">
                            <p><span style={{ color: 'white' }}>Name:</span> Shiva Sankar</p>
                            <p><span style={{ color: 'white' }}>Age:</span> 22</p>
                        </div>
                        <div className="right">
                            <p><span style={{ color: 'white' }}>Email:</span> s3r3shiva@gmail.com</p>
                            <p><span style={{ color: 'white' }}>From:</span> Calicut,Kerala</p>
                        </div>
                    </div>
                    <div className="about-action">
                        <div className="download-cv">
                            <a className='download-link' href={resume} download="shiva sankar CV"><span>Download CV</span></a>
                        </div>
                        <AnchorLink className='more-link' href='#work'><div className="my-work">
                            <span>My Works</span>
                        </div></AnchorLink>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default About
