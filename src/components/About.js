import React from "react";

function About (props) {
    return (
        <aside>
            <img src={props.image} defaultValue = "https://via.placeholder.com/215" alt="blog logo"></img>
            <p>{props.about}</p>
        </aside>
    )
}

export default About;