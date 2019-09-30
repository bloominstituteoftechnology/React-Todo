import React from 'react';

const ClearCompletedForm = props => {
  const handleSubmit = e => {
    e.preventDefault();
    props.clearCompleted();
  };
  return (
    <form onSubmit={e => handleSubmit(e)}>
      <button type='submit'>Clear Completed</button>
    </form>
  );
};

export default ClearCompletedForm;
