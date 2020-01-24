import React from 'react';

const TodoError = props => {


  console.log("props.error: ", props.error," props:", props);
  if (props.error !== 0){
    if(props.error === 1){
      return(
          <div className='todo-error'>
            {/*trying to make an error appear if something is triggered in another function*/}
            You already have that task on your List!
            </div>
      );
    } else if(props.error === 2){
      return(
          <div className='todo-error'>
            {/*trying to make an error appear if something is triggered in another function*/}
            You cannot start your task with a Space or your task is empty!
          </div>
          );

    }

  } else {
  return(
      <div className='todo-nonerror'>
        {/*no error happened return an empty div*/}

      </div>
    );
  };
}

export default TodoError;
