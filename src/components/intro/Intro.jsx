import React, {useEffect, useRef} from 'react'
import "./intro.scss"
import { init } from 'ityped'

export default function Intro() {
    const textRef = useRef()
    
    useEffect (()=>{
        init(textRef.current, {
            showCursor: true,
            backDelay: 1500,
            backSpeed:60,
            strings: ["Design", "Develop", "Create"],
          });
    }, [])

    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/man.png" alt=""/>
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hello World</h2>
                    <h1>I'm Amanda Ferguson</h1>
                    <h3>And I <span ref={textRef}></span></h3>
                </div>
                <a href="#portfolio">
                    <img src="assets/down.png" alt="" className="arrow"/>
                </a>
            </div>
        </div>
    )
}
