import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Todo from '../components/Todo';

Enzyme.configure({ adapter: new Adapter() });

describe('Todo', () => {
    it('should render props that it receives', () => {
        const component = shallow(<Todo text={'eat food'} />);
        expect(component.props().children).toEqual('eat food');
        //expect(component.matchesElement(<div style={{ textDecoration: 'none' }}>eat food</div>)).toBe(true);
    });

    it('should toggle textDecoration upon being clicked', () => {
        const todo = { text: 'go to the bathroom', completed: false };
        const component = shallow(<Todo {...todo} />);
        expect(component.state().completed).toBe(false);
        component.find('div').simulate('click');
        expect(component.state().completed).toBe(true);
        expect(component.matchesElement(<div className="todo-list__todo todo-list__todo--complete">go to the bathroom</div>)).toBe(true);
    });
});