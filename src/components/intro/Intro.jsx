import React, {useEffect, useRef} from 'react'
import "./intro.scss"
import { init } from 'ityped'
import { TurnedInTwoTone } from '@material-ui/icons'

export default function Intro() {
    const textRef = useRef()
    
    useEffect (()=>{
        init(textRef.current, {
            showCursor: true,
            startDelay: 2000,
            typeSpeed: 50,
            backDelay: 1500,
            backSpeed:60,
            loop: false,
            disableBackTyping: false,
            strings: ["design", "develop", "create."],
          });
    }, [])


    return (
        <div className="intro" id="intro" 
            >
                <div className="left">
                <div className="imgContainer">
                </div>
                </div>

            <div className="right">
                <div className="wrapper">
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
