import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import TodoList from '../components/TodoList';

Enzyme.configure({ adapter: new Adapter() });

describe('Todo List', () => {
    it('should render an input tag', () => {
        const component = shallow(<TodoList />);
        expect(component.find('input').length).toBe(2);
    });

    it('should store todos in state', () => {
        const component = shallow(<TodoList />);
        expect(component.state('todos')).toBeDefined();
    });

    it('should render a Todo component for every todo in state', () => {
        const todos = [
            {
                text: 'first todo',
                complete: false
            }, 
            {
                text: 'second todo',
                complete: false
            }
        ];
        const component = shallow(<TodoList />);
        expect(component.find('.todo-list__entry').length).toBe(0);
        component.setState({ todos: todos});
        expect(component.state().todos).toEqual(todos);
        expect(component.find('.todo-list__entry').length).toBe(2);
    });

    it('should add a new Todo when `addTodo` is called', () => {
        const e = { preventDefault: () => {} };
        const component = shallow(<TodoList />);
        component.setState({ newTodo: 'bake canneles' });
        component.instance().addTodo(e);
        expect(component.state()).toEqual({ todos: [{text: 'bake canneles', completed: false}], newTodo: '' });
    });
});