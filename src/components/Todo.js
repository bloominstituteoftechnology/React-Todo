import React from 'react';
// `<Todo />` is a component that takes in the `todo` data and displays the task to the screen.

const BookList = (props) => {
    // {console.log(props.books)}
    return (
        <div>
            <h1>List of books goes here</h1>
            {props.books.map((book) => {
                return(
                <p key={book.id}>Name: {book.name}</p>
                )
            })}
        </div>
    )
}

// books.map( { //takes and reiterates data
//     return (
//         <div>
//             <p>{item}</p>
//         </div>
//     )
// }) 

export default BookList;