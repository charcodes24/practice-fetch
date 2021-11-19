import { useEffect, useState } from "react";

import Quote from "./Quote";

export default function QuoteContainer() {
    const [quotes, setQuotes] = useState([])

    useEffect(() => {
        fetch("https://type.fit/api/quotes")
          .then((res) => res.json())
          .then((data) => setQuotes(data));
    }, []);

    const displayQuotes = quotes.map(quote =>  <Quote key={quote.id} quote={quote} />)


    return (
        <div>
            {displayQuotes}
        </div>
    )
}