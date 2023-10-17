import React from 'react';
import popular from './popular.png'
import './style.css'

function MainBody() {
    return (
    <div className='page' id='page1'>

        <div className='image'>
            <h1>Your best recipes</h1>
            <img src={popular} />
        </div>
    </div>
    )
}
export default  MainBody