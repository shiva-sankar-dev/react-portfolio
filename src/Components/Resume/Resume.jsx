import React from 'react'
import './Resume.css'
import education_data from '../../assets/education.js'
import work_data from '../../assets/work_experience.js'

const Resume = () => {
    return (
        <div id='resume' className="resume-main">
            <div className='resume'>
                <div className="resume-title">
                    <p>MY SUMMERY</p>
                    <h1>Resume</h1>
                </div>
                <div className="education-work">
                    <div className="resume-education">
                        <div className="education-title">
                            <p>Education</p>
                        </div>
                        <div className="eduction-container">
                            {education_data.map((edu_data, index) => {
                                return <div className="edu-main">
                                    <p className='set-class-no'><span className='edu-class' key={index}>{edu_data.class}</span> <span key={index}>{edu_data.no}</span> </p> <span className='edu-date' key={index}>{edu_data.year}</span> 

                                    <p className='edu-place' key={index}>{edu_data.place}</p>
                                    <p className='edu-details' key={index}>{edu_data.string}</p>
                                </div>

                            })}
                        </div>
                    </div>
                    <div className="resume-work">
                        <div className="work-title">
                            <p>Experience</p>
                        </div>
                        <div className="work-container">
                            {work_data.map((exp_data, index) => {
                                return <div className="work-main">
                                    <p className='set-exp-no'><span className='work-company' key={index}>{exp_data.class} </span> <span key={index}>{exp_data.no}</span> </p> <span className='work-date' key={index}>{exp_data.year}</span>

                                    <p className='work-place' key={index}>{exp_data.place}</p>
                                    <p className='work-details' key={index}>{exp_data.string}</p>
                                </div>

                            })}
                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default Resume
