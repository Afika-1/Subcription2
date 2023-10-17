import React from 'react';
import vegan from './vegan.png'
import lettus from './veg/lettus.png'
import stuffed from './veg/stuffed.png'
import air from './veg/air.png'
import fried from './veg/fried.png'
import './style.css'

function Veg() {
    return (
        <div className='page' id='page3'>

            <div className='image'>
                <h1>Healthy dinner recipes</h1>
                <h3>Healthy dinners are easier to make than you think! These healthier dinner recipe options are big crowd pleasers, and simple as always.</h3>
                <div className='veg'>
                    <div><img src={lettus} /></div>
                    <div><img src={stuffed} /></div>
                    <div><img src={air} /></div>
                    <div><img src={fried} /></div>
                </div>
            </div>
        </div>
    )
}
export default Veg