import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
  flex: {
    display: "flex",
    justifyContent: "center",
  },
});


const ToDo = props => {
    const classes = useStyles();
    return(
        <div classes={{
            flex: classes.flex
        }}
            className={`toDo${props.toDo.completed ? ' completed': ''}`}
            style={props.toDo.completed ? { textDecoration: 'line-through' } : null}
            onClick={() => props.handleToggleComplete(props.toDo.id)}
        >
            <Button>{props.toDo.task}</Button>
        </div>
    )
};

export default ToDo;