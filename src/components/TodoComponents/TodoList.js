// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

const TodoArray = [
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

class TodoList extends React.Component {
  constructor() {
    super();

    this.state = {};
  }
}

handleChanges = event => {
  this.setState({
    [event.target.task]: event.target.value
  });
};

export default TodoList;