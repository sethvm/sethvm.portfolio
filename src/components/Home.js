import React from 'react';

import './animate.min.css';
import './Home.css';

import './fonts/Futura PT_Light.css';
import './fonts/Futura PT_Book.css';
import './fonts/Futura_Demi.css';

export default function Home() {
    return (
        <div id='home'>
            <div className='blue_block animated slideInDown'>
                <>
                    <div className='intro_sm'>
                        <h1>DESIGNER</h1>
                        <h6>SYSTEMS DESIGN ENGINEERING</h6>
                        <h6>UNIVERSITY OF WATERLOO</h6>
                    </div>
                    <div className='intro_md'>
                        <h1>DESIGNER</h1>
                        <p>
                            SYSTEMS DESIGN ENGINEERING STUDENT
                            <br />UNIVERSITY OF WATERLOO
                            <br />
                            <br />Experienced in UI/UX Design
                            <br />Interested in Product Design and Front-end Development
                        </p>    
                    </div>
                </>
            </div>

            <div className='intro_lg animated fadeIn'>
                <h1>
                    <strong>Hello! I'm Seth</strong>
                    <br />
                </h1>
                <p> 
                    <br />Welcome to my portfolio!
                    <br />
                    <br />I'm a <strong>designer</strong> pursuing a BASc. in
                    <br /><strong>Systems Design Engineering</strong> with a
                    <br />passion for creating products that leave
                    <br />a positive impact in the world around me.
                    <br />
                    <br />Experienced in <strong>UI/UX</strong> with an
                    <br />interest in <strong>product design</strong> and
                    <br /><strong>front-end development</strong>.
                    <br />
                    <br />Previous position:
                    <br /><strong>UX and Web Designer</strong> at Ontario Public Service.
                </p>
            </div>
        </div>
    );
}