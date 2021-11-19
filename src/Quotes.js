import { useEffect, useState } from "react";

export default function Quotes() {
    const [quotes, setQuotes] = useState([])

    useEffect(() => {
        fetch("https://type.fit/api/quotes")
          .then((res) => res.json())
          .then((data) => setQuotes(data));
    }, []);

    console.log("CONSOLE", quotes)

    return (
        <div>

        </div>
    )
}