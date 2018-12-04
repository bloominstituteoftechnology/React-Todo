import React from "react";

const taskItems = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

const ListItemRenderer = props => {
  const {task} = props.taskItems;
  return (
    <p>{task}</p>
  )
}
class TodoList extends React.Component {
  constructor() {
    super();
    this.state = {
      todo: taskItems
    }
  }
  render() {
    return (
      <div class="todoList">
        {this.state.todo.map(task => <ListItemRenderer taskItems={task}/>)}
      </div>
    )
  }
}

export default TodoList;