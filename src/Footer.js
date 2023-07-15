import React from "react"
import twitter from "./images/twitter.svg"
import fb from "./images/fb.svg"
import instagram from "./images/instagram.svg"
import github from "./images/github.svg"

export default function Footer(){
    return(
        <div className="Footer">

            <div className="icons">
            <img src={twitter} />
            <img src={fb} />
            <img src={instagram} />
            <img src={github} />
            </div>
        </div>
    )
} 