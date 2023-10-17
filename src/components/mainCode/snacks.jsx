import React from 'react';
import snack from './snack.png'
import './style.css'

function Snacks() {
    return (
    <div className='page' id='page2'>

        <div className='image'>
            <h1>Quick snack recipes</h1>
            <img src={snack} />
        </div>
    </div>
    )
}
export default  Snacks