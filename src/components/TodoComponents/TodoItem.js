import React, { Component } from 'react'
import PropTypes from 'prop-types';


export class TodoItem extends Component {
    getStyle = () => {
        return{
            background: 'lightpink',
            padding: '10px',
            borderBottom: '2px #ccc solid',
            backgroundColor: this.props.todo.status ?
            '#f4f4f4' : 'none',
            textDecoration: this.props.todo.status ?
            'line-through' : 'none'
        }
    }
        
    render() {
        const {id, title} = this.props.todo;

        return (
            <div style={this.getStyle()}>
                <h3>
                    <input type='checkbox' onChange={this.props.markComplete.bind
                        (this, id)}/> {' '}
                        {title}
                        <button onClick={this.props.delTodo.bind(this, id)}style={btnStyle}>X</button>
                </h3>
            </div>
        )
    }
}

//PropTypes
   TodoItem.propTypes ={
   todos: PropTypes.array.isRequired }
   const btnStyle = {
       background: 'black',
       color: '#fff',
       border:'none',
       padding: '3px 5px',
       borderRadius: '20%',
       float: 'right'
   }

export default TodoItem;
