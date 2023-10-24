import React, { useState, useEffect } from 'react';
import './styles/Headings.css'
function Heading({current,Maxscore}){
    return (
        <div className='Headings'>
            <h3>Current Score:{current}</h3>
            <h3>Max Score:{Maxscore}</h3>
        </div>
    );
}

export default Heading;