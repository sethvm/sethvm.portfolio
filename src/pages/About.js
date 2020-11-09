import React from 'react';
import '../styles/Project.css';

import Portrait from '../components/about/about-banner.png';
import ProfileLink from '../components/about/ProfileLink';
import ResumeFile from '../pdf/sethvm_resume.pdf';

export default function About() {
    
    return(
        <>
        <main className='project animated fadeIn'>
            <div className='project_body'>
                <img className='project_img' src={Portrait} alt='self portrait' />
                <p>
                    <br />
                </p>
                <h4><strong>DESIGNER, ENGINEERING STUDENT</strong></h4>
                <p>
                    <br />
                    As a visual learner, the usage of illustrations and graphics to communicate has been a lifelong passion of mine.
                    I am drawn toward the fields of design and development because they allow me to extend this passion towards learning
                    about the people for which products and experiences are created.
                    <br />
                    <br />
                    Currently an undergraduate student at the University of Waterloo, I am majoring in
                    the field of Systems Design Engineering (SYDE). <abbr title='Systems Design Engineering'>SYDE</abbr> is a 
                    unique department that employs the integration of knowledge across multiple Engineering disciplines.
                    I seek to develop my ability to tackle complex problems through my passion and education in order to 
                    drive positive change within the society around me.
                    <br />
                    <br />
                    Outside of class and work, I spend most of my time in the weight room or learning to cook a new dish. Occasionally,
                    I enjoy jumping out of flying aircraft - with a parachute, of course.
                    <br />
                    <br />
                    If you've made it this far into my introduction, don't hesitate to get in touch!
                    <br />
                    <br />
                    <ProfileLink label='LINKEDIN' href='https://www.linkedin.com/in/sethvm' />&nbsp;&nbsp;&nbsp;
                    <ProfileLink label='EMAIL' href='mailto:sethvm64@gmail.com?cc=svmoreno@uwaterloo.ca' />&nbsp;&nbsp;&nbsp;
                    <ProfileLink label='RESUME' href={ResumeFile} />
                </p>
            </div> {/* /project_body */}
        </main> {/* /project */}
        </>
    );
}
