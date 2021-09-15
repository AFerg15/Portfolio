import React from 'react'
import "./works.scss"

export default function Works() {
    return (
        <div className="works" id="works">
            <div className="slider">
                <div className="container">
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                <div className="imgContainer">
                                    <img src="assets/mobile.png" alt="" />
                                </div>
                                <h2>Title</h2>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore ipsum dolores et ipsam ea corrupti esse consequuntur reprehenderit obcaecati fugit. Iure ut exercitationem mollitia est. Explicabo nemo nostrum minus aliquid.</p>
                                <span>Projects</span>
                            </div>
                        </div>
                        <div className="right">
                            <img src="https://images.unsplash.com/photo-1529472119196-cb724127a98e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=642&q=80" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
