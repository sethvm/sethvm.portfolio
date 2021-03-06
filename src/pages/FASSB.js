import React from 'react';
import '../styles/Project.css';

import Banner from '../components/fassb/fassb-banner.svg';
import Methodology from '../components/fassb/methodology_fassb.svg';
import RecordList from '../components/fassb/interface0_fassb.svg';
import CreateRecord from '../components/fassb/interface1_fassb.svg';
import RecordOptions from '../components/fassb/interface2_fassb.svg';
import ModifyRecord from '../components/fassb/interface3_fassb.svg';
import Assessment0 from '../components/fassb/assessment0_fassb.svg';
import Assessment1 from '../components/fassb/assessment1_fassb.svg';
import Survey0 from '../components/fassb/survey0_fassb.svg';
import Survey1 from '../components/fassb/survey1_fassb.svg';
import Flow0 from '../components/fassb/flow0_fassb.svg';
import Flow1 from '../components/fassb/flow1_fassb.svg';
import DataVis from '../components/fassb/data-visualization_fassb.svg';

export default function FASSB() {
    
    return (
        <>
        <main className='project animate__animated animate__fadeIn'>
            <img className='project_banner' src={Banner} alt='fassb' />
            <div className='project_body'>
                <h4><span class='bold'>OVERVIEW</span></h4>
                <p>
                    The Finance, Analysis, and Systems Support Branch (FASSB) is a Toronto-based
                    division under the Government of Ontario's Ministry of Labour, Training and Skills Development (MLTSD).&nbsp;
                    <abbr title='Finance, Analysis and Systems Support Branch'>FASSB</abbr> collaborates with key internal
                    and external stakeholders across the branch, division and ministry in creating, implementing and supporting
                    user-centered digital solutions.
                    <br />
                    <br />
                </p>
                <h4><span class='bold'>TEAM</span></h4>
                <p>
                    I had the privilege of interning as a UX and Web Designer within <abbr title='Finance, Analysis and Systems Support Branch'>FASSB's</abbr> 
                    &nbsp;Digital Business Unit (DBU). Our team consisted of one Team Lead, four Business Coordinators, four Project Officers 
                    and myself. My primary responsibility as the sole designer within <abbr title='Digital Business Unit'>DBU</abbr> was to deliver 
                    UI prototypes as part of a large-scale ministry project known as Employment Services Transformation (EST).
                    <br />
                    <br />
                </p>
                <h4><span class='bold'>TIMELINE</span></h4>
                <p>
                    September 2019 - December 2019
                    <br />
                    <br />
                </p>
                <h4><span class='bold'>PROJECT</span></h4>
                <p>
                    The EST project was initiated with the intention of reworking the province's employment services to make 
                    them more efficient and streamlined. Through a new service model, its objective is to merge social assistance 
                    services as well as government employment services into Employment Ontario (EO) - this implementation aims to 
                    be more responsive to the needs of Ontarians seeking jobs.&nbsp;
                    <abbr title='Digital Business Unit'>DBU</abbr> plays a leading role within this project by creating new internal 
                    platforms to be utilized EO service providers.
                    <br />
                    <br />
                </p>
                <h4><span class='bold'>DESIGN PROCESS</span></h4>
                <p>
                    <abbr title='Digital Business Unit'>DBU</abbr> follows an <strong>Agile development model</strong>, operating
                    in two-week sprints.
                    <br />
                    <img className='project_img' src={Methodology} alt='methodology' />
                    <br />
                    <div className='indented'><strong>User stories</strong> were created for development of new interface components (be it a button or a navigation bar)
                    and were used as a "starting point" for how they were to be incorporated into each interface.
                    </div>
                    <br />
                    <div className='indented'><strong>Ideation</strong> involved sketching multiple design options that fulfilled the requirements outlined
                    in user stories. For iterations of work-in-progress UIs, sketches illustrated changes that needed to be made;
                    these were determined based on feedback received after the prototype is presented at the end of each sprint.
                    </div>
                    <br />
                    <div className='indented'><strong>Prototyping</strong> was done in Figma. During this phase, I would work closely with our Business Coordinators
                    and Project Officers to ensure that new UIs meet Level AA compliance with&nbsp;
                    <abbr title='Web Content Accessibility Guidelines'>WCAG 2.0</abbr> criteria and satisfy&nbsp;
                    <abbr title='Accessibility for Ontarians with Disabilities Act'>AODA</abbr> requirements.
                    Furthermore, measures are also taken to ensure that each design remains consistent with the ministry's internal design guidelines;
                    these included visual aspects such as colour palettes, font styles and font sizing.
                    </div>
                    <br />
                    <div className='indented'><strong>Presenting</strong> each UI to development and management teams is critical. It is at this phase where
                    valuable feedback is received and a new set of objectives for the next iteration of interfaces is established.
                    </div>
                    <br />
                    <br />
                </p>
                <h4><span class='bold'>PROTOTYPES</span></h4>
                <p>
                    I designed UI prototypes for several <abbr title='Employment Services Transformation'>EST</abbr> applications. 
                    Some text fields from the samples below have been altered from the original designs to filter out confidential information.
                    <br />
                    <br />
                </p>
                <div className='indented'>
                    <h6><span class='bold'>RECORD MANAGEMENT SYSTEM</span></h6>
                    <p>
                        Interface designs for a platform that is used to manage records within an entry 
                        system. Employees preferred to access this system via desktop machines (often set up with multiple monitors), 
                        so the focus of the prototype's layout is to enable a user to view as much information as possible within 
                        the dimensions of a single screen.
                        <br />
                    </p>
                </div>
                <div className='project_img_caption'>
                    <p>
                        <br/>
                        <span class='bold italic'>Viewing record list</span>
                        <br/>
                    </p>
                </div>
                <img className='project_img' src={RecordList} alt='record list screen' />
                <div className='project_img_caption'>
                    <p>
                        <br/>
                        <br/>
                        <span class='bold italic'>Creating a new record</span>
                        <br/>
                    </p>
                </div>
                <img className='project_img' src={CreateRecord} alt='create record screen' />
                <div className='project_img_caption'>
                    <p>
                        <br/>
                        <br/>
                        <span class='bold italic'>Viewing record activities</span>
                        <br/>
                    </p>
                </div>
                <img className='project_img' src={RecordOptions} alt='record options screen' />
                <div className='project_img_caption'>
                    <p>
                        <br/>
                        <br/>
                        <span class='bold italic'>Record modification</span>
                        <br/>
                    </p>
                </div>
                <img className='project_img' src={ModifyRecord} alt='modify record screen' />
                <p>
                    <br />
                    <br />
                </p>
                <div className='indented'>
                    <h6><span class='bold'>CLIENT SEGMENTATION PLATFORM</span></h6>
                    <p>
                        A high-fidelity mockup for a new platform that aims to enable service providers to conduct assessments
                        with clients and develop more focused service plans based on the client's needs. 
                        Since assessments will be done out-of-office, this UI has been designed with smaller screens
                        in mind (e.g. laptops and tablets). Components have been aligned within a single column to allow a 
                        caseworker to input and review information quickly and efficiently.
                        <br />
                        <br />
                    </p>
                </div>
                <img className='project_img' src={Assessment0} alt='assessment screen 1' />
                <p>
                    <br/>
                </p>
                <img className='project_img' src={Assessment1} alt='assessment screen 2' />
                <p>
                    <br />
                    <br />
                </p>
                <div className='indented'>
                    <h6><span class='bold'>SURVEY CREATION PLATFORM</span></h6>
                    <p>
                        Proof of concept of a new interface for an internal tool ised by service providers to create assessments
                        for their respective employment services. Desired features included pagination, the ability to seamlessly
                        rearrange questions (moving within each page or moving from one page to another) as well as multiple 
                        modification options for each question.
                        <br />
                        <br />
                    </p>
                </div>
                <img className='project_img' src={Survey0} alt='survey screen 1' />
                <p>
                    <br/>
                </p>
                <img className='project_img' src={Survey1} alt='survey screen 2' />
                <p>
                    <br />
                    <br />
                    <br />
                </p>
                <h4><span class='bold'>OUTSIDE OF PROTOTYPING</span></h4>
                <p>
                    Outside of UI prototyping, I had the opportunity to delve into other projects being
                    worked on within <abbr title="Finance, Analysis and Systems Support Branch">FASSB</abbr>. 
                    <br />
                    <br />
                </p>
                <div className='indented'>
                    <h6><span class='bold'>DATA VISUALIZATION</span></h6>
                    <p>
                        <abbr title="Finance, Analysis and Systems Support Branch">FASSB's</abbr> Analytics Unit (AU) regularly 
                        conducts surveys with user bases to collect information regarding experience with using the ministry's 
                        applications, presenting results to management teams. While designing this infographic, I collaborated 
                        with one of <abbr title="Analytics Unit">AU's</abbr> Business Coordinators in prioritizing which data to 
                        present as well as organizing this data within a relatively small frame (Legal-sized dimensions).
                        <br />
                    </p>
                </div>
                <div className='project_img_caption'>
                    <p>
                        <span class='bold italic'>Usage infographic for an internal application</span>
                        <br/>
                    </p>
                </div> {/* /caption */}
                <img className='project_img' src={DataVis} alt='data visualization graphic' />
                <p>
                    <br />
                    <br />
                </p>
                <div className='indented'>
                    <h6><span class='bold'>SERVICE FLOW MODELLING</span></h6>
                    <p>
                        In addition to prototyping application UIs, I worked closely with our team's Project 
                        Officers on creating system flow diagrams for an employment service that provides assistance 
                        to job seekers. The diagrams below model the evolution of this service as ministry systems 
                        are developed and updated.
                        <br />
                    </p>
                </div>
            </div> {/* /project-body */}
            <div className='project_img_caption'>
                <p>
                    <span class='bold italic'>Current service model</span>
                    <br/>
                    <br/>
                </p>
            </div> {/* /caption */}
            <img className='project_banner' src={Flow0} alt='flow diagram 1' />
            <div className='project_body'>
                <div className='indented'>
                    <p>
                        The to-be service model (below) is designed with the intent of shortening the
                        consultation and service planning phases. Additionally, the monitoring and closure phases have been
                        made more elaborate through the implementation of periodic follow-ups that ensure employment retention.
                    </p>
                </div>
            </div> {/* /project-body */}
            <div className='project_img_caption'>
                <p>
                    <span class='bold italic'>To-be service model</span>
                    <br />
                </p>
            </div> {/* /caption */}
            <img className='project_banner' src={Flow1} alt='flow diagram 2' />
            <div className='project_body'>
                <h4><span class='bold'>TAKEAWAYS</span></h4>
                <p>
                    <br />
                    My work term at <abbr title="Finance, Analysis and Systems Support Branch">FASSB</abbr> was my <strong>entry into
                    the field of design</strong>. It provided me with exposure to the Agile development
                    model, namely the variations in the scope of work that can occur between each two-week sprint. The opportunity
                    to develop wireframes for the <abbr title="Employment Services Transformation">EST</abbr> project resulted
                    in the growth of my interest for interface design and front-end development.
                    <br />
                    <br />
                    More importantly, I got to contribute to a province-wide project aimed at <strong>improving services
                    that make life easier for Ontarians</strong>.
                </p>
            </div> {/* /project-body */}
        </main> {/* /project */}
        </>
    );
}
