import React, {useMemo, useState} from "react";


export default {
    title: "UseCallback demonstration"
}

const BooksRender = React.memo((props: { books: Array<string> }) => {
    debugger
    console.log("Books is render")
    return <div>
        {props.books.map((u, i) => <div key={i}>{u}</div>)}
    </div>
})

export const Books = () => {
    const [books, setBooks] = useState<Array<string>>(["HTML", "CSS", "JS", "React"])
    const newArray = useMemo(() => {
        return books.filter(b => b)
    }, [books])

    const addBook = () => {
        const newBook = "Redux"
        setBooks([...books, newBook]);
    }

    return <React.Fragment>
        <button onClick={addBook}>add book</button>
        <BooksRender books={newArray}/>
    </React.Fragment>
}