import React from "react";

function Article (props) {
    return (
        <article>
            <h3>{props.title}</h3>
            <small>{props.date} - {props.minutes} minute read</small>
            <p>{props.preview}</p>
        </article>
    )
}

Article.defaultProps = {
    date : "January 1, 1970"
}

export default Article;