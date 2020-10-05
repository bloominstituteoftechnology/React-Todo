import React from 'react';
// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
// `<TodoList />` receives your Todos array and iterates over the list generating a new `<Todo />` 
// for each element in the array.


const BookList = (props) => {
    // {console.log(props.books)}

    return (
        <div>
            <h1>List of books goes here</h1>
            {props.books.map((book) => {
                return(
                <p key={book.id}>Title: {book.title}</p>
                )
            })}
        </div>
    )
}

export default BookList;