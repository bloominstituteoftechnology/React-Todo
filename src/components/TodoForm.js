import React from 'react'
// `<TodoForm>` will hold your input field and your `Add Todo` and `Clear Completed` buttons.
// Your input field should take in user input, 
// and allow a user to press `Enter` or click on the `Submit Button` to add a todo to your list.


class FormInput extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div>
                <input 
                    type='text'
                    placeholder= 'Owned book to read' 
                />
                <button>Add Book</button>
                <button>Clear Completed</button>
            </div>
        )
    }
}

export default FormInput;