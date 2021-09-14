import React from 'react'
import "./portfolioList.scss"

export default function portfolioList({title}) {
 
    return (
        <li className="portfolioList">
            {title}
        </li>
    )
}
