import React from 'react';
import styled from 'styled-components';

const StyledCompletedForm = styled.form`
  display: flex;
  flex-direction: row;
  margin-top: 25px;
`;

const StyledButton = styled.button`
  background-color: white;
  outline: none;
  border: 2px solid #124149;
  padding: 10px 0;
  margin-left: 15px;
  min-width: 200px;
  color: #124149;
  &:hover {
    cursor: pointer;
  }
`;

const ClearCompletedForm = props => {
  const handleSubmit = e => {
    e.preventDefault();
    props.clearCompleted();
  };
  return (
    <StyledCompletedForm onSubmit={e => handleSubmit(e)}>
      <StyledButton type='submit'>Clear Completed</StyledButton>
    </StyledCompletedForm>
  );
};

export default ClearCompletedForm;
