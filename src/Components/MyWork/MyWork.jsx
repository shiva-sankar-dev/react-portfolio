import './MyWork.css'
import React from 'react'
import mywork_data from '../../assets/mywork_data'
import arrow_img from '../../assets/arrow_img.jpg'


const MyWork = () => {
    return (
        <div id='work' className='mywork'>
            <div className="mywork-title">
                <p>MY RECENT WORK</p>
                <h1>My Portfolio</h1>
            </div>
            <div className="mywork-container">
                {mywork_data.map((work, index) => {
                    return <div className="card-container">
                        <img key={index} src={work.work_img} alt="" />
                        <div className="name-icon">
                            <p key={index}>{work.work_name}</p>
                            <p className='logos-container'>
                                {work.worked_with.map((logo, logoindex) => {
                                    return <img className='tech-logos' key={logoindex} src={logo} alt="" />;
                                })}
                            </p>
                        </div>
                        <div className="demo-git">
                            <p>DEMO</p>                            
                            <a href={work.git_link}><p key={index}>GIT</p></a>
                        </div>
                    </div>
                })}
            </div>
            <div className="show-more">
                <p>SHOW MORE</p>
                <img className='arrow_img' src={arrow_img} alt="" />
            </div>

        </div>
    )
}

export default MyWork
