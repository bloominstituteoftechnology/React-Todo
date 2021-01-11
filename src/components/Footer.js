import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <StyledFooter>
      <h2>©Copyright Too.Do Inc.</h2>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  background-color: #e85a4f;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;

  h2 {
    font-size: 2rem;
    font-family: 'Cookie', cursive;
    color: #f7f9fb;
  }
`;

export default Footer;
