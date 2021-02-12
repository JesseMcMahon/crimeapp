import React from "react"
import "./OpenInvestigations.css"
import Navigation from "../Navigation/Navigation"
import MostActive from "./MostActive"


const OpenInvestigations = () => {
    return (
        <div className="investigation-container">
           <nav className="homepage-nav">
               <h1>Investigative Crowd</h1>
               <h1 className="sign-in-btn">Sign In</h1>
           </nav>
           <Navigation />

           <section className="crime-type-container">
               <div className="crime-type-nav">
               <h3 className="crime-type">Murders</h3>
               <h3 className="crime-type">Missing Persons</h3>
               <h3 className="crime-type">Other</h3>
               </div>
               <div className="search-container">
                    <h2>Search by keywords and location:</h2>
                    <div className="inputs">
                        <input type="text" placeholder="Keywords" />
                        <input type="text" placeholder="Location" />
                    </div>
                    <input className="search-btn" type="submit" value="Search"/>
               </div>
           </section>

           <MostActive />
        </div>
    )
}

export default OpenInvestigations