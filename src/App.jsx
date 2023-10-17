import React from 'react'
import { useState } from 'react'
// import db from './firebase'
// import firebase from "firebase/app"
import './App.css'
import Navbar from './components/navbar/Navbar'
import MainBody from './components/mainCode/MainBody'
import Snacks from './components/mainCode/snacks'
import Veg from './components/mainCode/Veg'
import { Crud } from './components/mainCode/index'

function App() {

  return (
    <>
      <div className='cover'>
        <Navbar />
        <MainBody />
        <Snacks/>
        <Veg/>
        <Crud />
      </div>
      {/* --------- Second web front-end----------- */}
      {/* <div className='page'>
        <div className='container'>
          <div className='circle2'></div>
          <div className='circle'></div>
          
          <form onSubmit={submitHandler} className='form'>
            <h2>Don't miss out</h2>
            <p> Subscribe to stay updated with our amazing deals and discounts</p>
            <input type='email' onChange={inputHandler}  value={input}/>
            <button type='submit'>Subscribe</button>
          </form>
        </div>
      </div> */}

      {/*------------- old web front-end -------------*/}

      {/* <div>
          <h2>Don't miss out</h2>
          <p> Subscribe to stay updated with our amazing deals and discounts</p>
          <div>
            <span>01</span>
            <small>Get premium discount</small>

          </div>
          <div>
            <span>02</span>
            <small>Get new deals updates instantly</small>
            
          </div>
          <div>
            <span>03</span>
            <small>Get premium discount</small>
            
          </div>
          <div>
            <input type='email' placeholder='Enter email address'/>
            <button>Subscribe</button>
          </div>
        </div> */}



    </>
  )
}

export default App
