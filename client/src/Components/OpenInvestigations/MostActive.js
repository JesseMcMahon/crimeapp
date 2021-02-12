import React from "react"
import "./MostActive.css"
import {IoPersonOutline, IoLocationOutline, IoFileTrayFullOutline} from "react-icons/io5"

const MostActive = () => {

    const listOfCases = [
        {
            name: "Lois Gardner",
            location: "Miami, Fl",
            type: "Missing Persons"
        },
        {
            name: "Jeff Smith",
            location: "Tampa Bay, Fl",
            type: "Murder"
        },
        {
            name: "Lou Williams",
            location: "Harlem, NY",
            type: "Missing Persons"
        },
        {
            name: "John Doe",
            location: "Los Angeles, CA",
            type: "Murder"
        },
        {
            name: "Lois Gardner",
            location: "Miami, Fl",
            type: "Missing Persons"
        },
        {
            name: "Jeff Smith",
            location: "Tampa Bay, Fl",
            type: "Murder"
        },
        {
            name: "Lou Williams",
            location: "Harlem, NY",
            type: "Missing Persons"
        },
        {
            name: "John Doe",
            location: "Los Angeles, CA",
            type: "Murder"
        },
        {
            name: "Lois Gardner",
            location: "Miami, Fl",
            type: "Missing Persons"
        },
        {
            name: "Jeff Smith",
            location: "Tampa Bay, Fl",
            type: "Murder"
        },
        {
            name: "Lou Williams",
            location: "Harlem, NY",
            type: "Missing Persons"
        },
        {
            name: "John Doe",
            location: "Los Angeles, CA",
            type: "Murder"
        },
        {
            name: "Lois Gardner",
            location: "Miami, Fl",
            type: "Missing Persons"
        },
        {
            name: "Jeff Smith",
            location: "Tampa Bay, Fl",
            type: "Murder"
        },
        {
            name: "Lou Williams",
            location: "Harlem, NY",
            type: "Missing Persons"
        },
        {
            name: "John Doe",
            location: "Los Angeles, CA",
            type: "Murder"
        },
    ]
    const Cases = () => {
        return (
            <>
            {listOfCases.map((c) => (
                <div className="individual-case" key={c.name}>
                    <img src="https://storage.googleapis.com/gweb-uniblog-publish-prod/original_images/true-crime.jpg" />
                    <h1><IoPersonOutline className="icon" /> {c.name}</h1>
                    <h1><IoLocationOutline className="icon" />{c.location}</h1>
                    <h1><IoFileTrayFullOutline className="icon" /> {c.type}</h1>
                </div>
            ))}
            </>
        )
    }
    return (
        <section className="most-active-container">
            <h1 className="most-active-header">Most Active Cases</h1>
            <div className="underline"></div>
            <div className="cases">
                <Cases />
            </div>
        </section>
    )
}

export default MostActive