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


class TodoForm extends React.Component {
  // constructor with state
  constructor() {
    super();
    this.state = {
      todo: ''
    }
  }

  handleChanges = e => {
    // update state with each keystroke
    this.setState({todo: e.target.value})
  }

  // class property to submit form
  submitTodo = e => {
    e.preventDefault();
    this.setState({ todo: '' }); // zero out
    this.props.addTodo(this.state.todo, e);
  };

  // let classes = useStyles();

  render() {
    return (
      <div className='form-container'>
        <form onSubmit={this.submitTodo}>

            <TextField 
              id="outlined-input"
              label="Add todo"
              type="text"
              variant="outlined"
              color="primary"
              name="todo" // dont need this
              value={this.state.todo}
              onChange={this.handleChanges}
            />
  
            <Button 
              onClick={this.submitTodo} 
              variant="outlined" 
              color="primary"
            >
              Add
            </Button>

            <Button 
              variant="outlined" 
              color="primary"
              onClick={() => this.props.clearCompleted() }
              className="clear-btn"
            >
              Clear Completed
            </Button>

        </form>
      </div>
    )  


  }

};

export default TodoForm;