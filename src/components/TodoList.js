/*eslint no-unused-vars: "off"*/
import React from 'react';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.remove = this.remove.bind(this);
  }

  remove(obj) {
    this.props.removeTodo(obj.id);
  }

  render() {
    return (
      <div>
        {this.props.todoList.map(todo => {
          return (
            <div key={todo.title + todo.id}>
              {todo.title}
              <button
                onClick={() => {
                  remove(todo);
                }}
              >
                Complete
              </button>
            </div>
          );
        })}
      </div>
    );
  }
}

export default TodoList;