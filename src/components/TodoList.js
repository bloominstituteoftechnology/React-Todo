// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';
import styled from 'styled-components';


const TodoList = props => {
    
    return (
        <ListDiv>
            {props.todo.map(todo => (
                <Todo todo={todo} key={todo.id} toggleCompleted={props.toggleCompleted}/>
            ))}
            <button onClick={() => props.clearCompleted()}>Clear Completed</button>
        </ListDiv>
    )
}

const ListDiv = styled.div`
    margin-top:2vh;
    display:flex;
    flex-direction:column;
    align-items:center;
    button{
        color: white;
        background-color: #b10707;
        font-family: Courier;
        font-size:1.5rem;
        width: 50vw;
        height:5vh;
        border-radius: 1vh;
    }
`

// class TodoList extends React.Component {
//     constructor (props) {
//         super ();
//         this.state = {
//             todo: props.todo
//         }
//         console.log(this.state.todo)
//     }

//     componentWillReceiveProps({todo}) {
//         this.setState({...this.state, todo: todo})
//     }

//     render () {
//         return (
//             <div>
//                 {this.state.todo.map(todo => (
//                     <Todo todo={todo} key={todo.id}/>
//                 ))}
//             </div>
//         )
//     }
// }

export default TodoList