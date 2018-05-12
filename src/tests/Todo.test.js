import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Todo from '../components/Todo';

Enzyme.configure({ adapter: new Adapter() });

describe('Todo', () => {
    it('should render props that it receives', () => {
        const component = shallow(<Todo todo={['eat todo']} />);
        expect(component.state('todo')).toBeDefined();
        expect(component.props('todo')).toBeDefined();
        expect(component.state().todo).toEqual(['eat todo']);
        // expect(component.matchesElement(<div style={{ textDecoration: 'none' }}>eat food</div>)).toBe(true);
    });

    it('should toggle textDecoration upon being clicked', () => {
        const component = shallow(<Todo todo={['go to the bathroom']} />);
        // component.find('div').simulate('click');
        // expect(component.state().clicked).toBe(true);
        // expect(component.matchesElement(<div style={{ textDecoration: 'line-through' }}>go to the bathroom</div>)).toBe(true);
    });
});