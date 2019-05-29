import React from 'react';
import { placeholder } from '@babel/types';
import { defaultCipherList } from 'constants';

class TodoForm extends React.Component {
    render() {
        return (
            <div>
                <input
                    type='text'
                    placeholder="...todo"
                />
                <button>Add Todo</button>
                <button>Clear Completed</button>
            </div>
        )
    }
}

export default TodoForm;