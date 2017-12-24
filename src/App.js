import React from 'react';
import TodoList from './components/TodoList';

// import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column; 
`
const Heading = styled.h2`
  color: #e3e3e3;
  font-size: 2.5em;
  text-align: center;
  font-family: Courier New, Courier, monospace;
  font-variant: small-caps;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, .2);
  border-radius: 6px;
  border: 6px solid #9ad3de;
  background-color: #89bdd3;
  box-shadow: 0 10px 6px -6px rgba(119, 119, 119, .2);
  padding: .25% .1% .25% .1%;
  margin-bottom: 0;
  margin-top: 2px;

  @media (min-width: 537px) {
    font-size: 3rem;
  }

  @media (min-width: 700px) {
    font-size: 4rem;
  }
`;

const Main = styled.div`
  align-content: center;
  background-color: #c9c9c9;
  border-radius: 2px;
  border-color: 4px solid #9ad3de;
  box-shadow: 0 10px 6px -6px rgba(119, 119, 119, .6);
  padding: 60px;
`

const App = () => (
  <Wrapper>
    <Main>
    <Heading>Todo List</Heading>
  <TodoList />
  </Main>
  </Wrapper>
);
// <ReactCSSTransitionGroup transitionName="anim" transitionAppear={true} transitionAppearTimeout={5000} transitionEnter={false} transitionLeave={false}>
// </ReactCSSTransitionGroup>
export default App;
