import React from 'react';
import './Todo.css';
// import Material UI components
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));


class TodoSearch extends React.Component {

    // constructor with state
    constructor() {
      super();
      this.state = {
        todo: ''
      }
    }

  // classes = useStyles();

  handleChanges = e => {
    // update state with each keystroke
    this.setState({todoSearch: e.target.value})
  }
  
  // clearCompleted = () => {
  //   console.log('clearing completed todos');
  //   // if the todo.completed is true, then filter it out of the this.state.todos array
  //   this.setState({
  //     ... this.state,
  //     todos: this.state.todos.filter(todo => !todo.completed)
  //   })
  // }


  render() {
  return (
    <div className='form-container'>
      <form>
        
        <TextField 
          id="outlined-password-input"
          label="Search todos"
          type="text"
          autoComplete="current-password"
          variant="outlined"
          color="primary"
          value={this.state.todoSearch} // ?
          onChange={this.handleChanges} 
        />

        <Button 
          variant="outlined" 
          color="primary" 
          onClick={() => this.props.searchTodos(this.props.todoSearch)}
        >
          Search
        </Button>

      </form>
    </div>
  )  
  }
};
export default TodoSearch;