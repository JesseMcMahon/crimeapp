import React from "react"
import {Link} from "react-router-dom"
import "./Navigation.css"


const Navigation = () => {
    return (
        <div className="links">
              <Link className="link-item" to="/"><h3>Home</h3></Link>
               <Link className="link-item" to="/openinvestigations"><h3>Open Investigations</h3></Link>
               <Link className="link-item" to="/mission"><h3>Our Mission</h3></Link>
           </div>
    )
}

export default Navigation