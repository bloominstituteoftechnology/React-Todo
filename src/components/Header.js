import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return (
    <StyledHeader>
      <h2>Too.Do</h2>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  background-color: #e85a4f;
  height: 90px;
  display: flex;
  align-items: center;

  h2 {
    font-size: 4.5rem;
    font-family: 'Cookie', cursive;
    color: #f7f9fb;
    padding: 10px;
  }
`;

export default Header;
