import React from "react"
import dp from "./images/pic.jpg"
import mail from "./images/mail.png"
import linkedin from "./images/linkedin.png"

export default function Info(){
    return(
        <div className="Info">
            <img src={dp} alt="my picture" className="pic" />
            <p className="name">Banhi Bikash Saha</p>
            <p className="role">Full stack web developer</p>
            <p className="website">banhibikashsaha@gmail.com</p>
        
            <div className="button-group">
                <button className="Email"><img src={mail} /> <>Email</></button>
                <button className="LinkedIn"><img src={linkedin} /> <>LinkedIn</></button>
            </div>
        </div>
    )
}