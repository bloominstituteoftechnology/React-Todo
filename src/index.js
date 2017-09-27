/*eslint no-unused-vars: "off"*/
import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App';
import { createUUID } from './components/App';
import Menu from './components/Menu';
import Header from './components/Header';
import TaskList from './components/Tasks';
import { Task } from './components/Tasks';

require('!style-loader!css-loader!sass-loader!./index.scss');

const tabs = [
  {
    title: "tab1",
    contents: "this is the contents of the first tab"
  },
  {
    title: "tab2",
    contents: "this is the contents of the second tab",
    contentsType: "python"
  },
  {
    title: "tab3",
    contents: "this is the contents of the third tab",
    contentsType: "lol"
  }
];

const tasks = [
  {
    uuid: createUUID(),
    title: "This is a test title",
    tabs: tabs,
    completed: false
  },
  {
    uuid: createUUID(),
    title: "This is a second test title",
    tabs: [tabs[0], tabs[1]],
    completed: false,
    backgroundColor: '#a0fb74'
  },
  {
    uuid: createUUID(),
    title: "This is a third test title",
    tabs: [tabs[0]],
    completed: true,
    backgroundColor: '#FA04E1'
  }
];

ReactDom.render(
  <App>
    <Menu />
    <Header />
    <TaskList title="tasks">
      <Task {...tasks[0]}/>
      <Task {...tasks[1]}/>
      <Task {...tasks[2]}/>
    </TaskList>
  </App>
  , document.getElementById('root')).toString();
