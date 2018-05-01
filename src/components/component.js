// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
class ToDoList extends Component {
  constructor() {
    super();
    this.state = {
      toDos: [],
      newToDos:''
    };
  }

  handleSubmit = () => {
    const ToDos = this.state.newToDos;
    const newToDos = {name: this.state.toDos, id: this.state.toDos + toDos.length};
    toDos.push(newToDos);
    this.setState({newToDos: newToDos, toDos: ""});
};
