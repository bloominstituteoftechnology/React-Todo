import React from 'react'
// `<TodoForm>` will hold your input field and your `Add Todo` and `Clear Completed` buttons.
// Your input field should take in user input, 
// and allow a user to press `Enter` or click on the `Submit Button` to add a todo to your list

const FormInput = props => {
        // console.log(props);
        return (
            <form onSubmit={props.onSubmit}>
                <input 
                    type='text'
                    placeholder= 'Owned book to read' 
                    onChange={props.handleChanges}
                />
                <button type='submit'>Add Book</button>
                <button>Clear Completed</button>
            </form>
        )
    }


export default FormInput;