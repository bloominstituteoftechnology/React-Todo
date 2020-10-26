import React from 'react';
import Styled from 'styled-components';

const Completed = Styled.div`
.Completed {
    text-decoration: line-through;
}
p {
    cursor: pointer;
}
`;

class Todo extends React.Component {
    constructor () {
        super()
        this.state = {

        }
    }
    render() {
        return (
            <Completed>
                <h2>Todo</h2>
                {this.props.Todo.map((item) => <p className={item.Completed ? 'Completed' : null} onClick={e => this.props.Toggle(item.id)}>{item.task}</p>)}
            </Completed>
        )
    }
}

export default Todo;