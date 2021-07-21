function Article (props) {
    const emoji = props.minutes < 30 ? "☕️".repeat(Math.ceil(props.minutes/5)) : "🍱".repeat(Math.ceil(props.minutes/10))

    return (
        <article>
            <h3>{props.title}</h3>
            <small>{props.date} - {emoji}
            {props.minutes} minute read</small>
            <p>{props.preview}</p>
        </article>
    )
}

Article.defaultProps = {
    date : "January 1, 1970"
}

export default Article;