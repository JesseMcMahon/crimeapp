import React, {useEffect, useState} from "react"
import Axios from "axios"
import "./Homepage.css"
import Navigation from "../Navigation/Navigation"


const Homepage = () => {
    const [reqData, setReqData] = useState()

    useEffect(() => {
        const results = Axios.get('/hello')
        .then(res => setReqData(res.data))
    })

    return (
        <div className="homepage-container">
           <nav className="homepage-nav">
               <h1>Investigative Crowd</h1>
               <h1 className="sign-in-btn">Sign In</h1>
           </nav>
           <Navigation />

           <section className="hero">
                <h1 className="headline">Make a Difference.</h1>
           </section>
        </div>
    )
}

export default Homepage