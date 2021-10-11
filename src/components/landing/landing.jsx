import React from 'react'
import "./landing.scss"


export default function Landing() {

    return (
        <div className="landing" id="landing" 
            >
             <div className="left">
        <div className="imgContainer">

        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>

        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
    )
}