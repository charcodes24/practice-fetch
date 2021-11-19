

export default function Quote({ quote }) {
    const { text, author } = quote


    return (
        <div>
            <h2>{author}</h2>
            <p>{text}</p>
        </div>
    )
}