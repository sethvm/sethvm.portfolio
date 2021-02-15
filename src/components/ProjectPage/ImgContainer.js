import React from 'react';
import './ImgContainer.css';

export default function ImgContainer(props) {
    return (
        <div className='image animate__animated animate__fadeIn'>
            {props.children}
            <div className='image_caption'>
                <p>
                    <span className='italic'>{props.caption}</span>
                </p>
            </div>
        </div>
    );
}
