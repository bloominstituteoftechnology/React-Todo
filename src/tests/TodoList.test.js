import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import TodoList from '../components/TodoList';

Enzyme.configure({ adapter: new Adapter() });

describe('Todo List', () => {
    it('should render an input tag', () => {
        const component = shallow(<TodoList />);
        expect(component.find('input').length).toBe(1);
    });

    it('should store todos in state', () => {
        const component = shallow(<TodoList />);
        expect(component.state('todos')).toBeDefined();
    });

    it('should render a Todo component for every todo in state', () => {
        const todos = ['complete this assignment', 'submit a PR'];
        const component = shallow(<TodoList />);
        expect(component.find('div').children().length).toBe(1);
        component.setState({ todos: todos});
        expect(component.find('div').children().length).toBe(3);
        expect(component.state().todos).toEqual(todos);
    });

    it('should add a new Todo when `addTodo` is called', () => {
        const e = { preventDefault: () => {} };
        const component = shallow(<TodoList />);
        expect(component.find('div').children().length).toBe(1);
        component.setState({ newTodo: 'bake canneles' });
        component.instance().addTodo(e);
        expect(component.state()).toEqual({ todos: ['bake canneles'], newTodo: '' });
    });
});