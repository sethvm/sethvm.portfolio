/*h2 tag wrapped in bold styling - for use with project title*/
import React from 'react';

export default function HTag2(props) {
    return(
        <h2>
            {props.children}
            <br />
        </h2>
    );
}