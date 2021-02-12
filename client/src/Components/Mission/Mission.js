import React from "react"
import "./Mission.css"
import Navigation from "../Navigation/Navigation"
const Mission = () => {
    return (
        <div className="homepage-container">
           <nav className="homepage-nav">
               <h1>Investigative Crowd</h1>
               <h1 className="sign-in-btn">Sign In</h1>
           </nav>
           <Navigation />
        </div>
    )
}

export default Mission