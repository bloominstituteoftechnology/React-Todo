import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Todo from '../components/Todo';

Enzyme.configure({ adapter: new Adapter() });

describe('Todo', () => {
    it('should render props that it receives', () => {
        const component = shallow(<Todo todo={'eat food'} />);
        expect(component.props().children).toEqual('eat food');
        expect(component.matchesElement(<div style={{ textDecoration: 'none' }}>eat food</div>)).toBe(true);
    });

    it('should toggle textDecoration upon being clicked', () => {
        const component = shallow(<Todo todo={'go to the bathroom'} />);
        expect(component.state().clicked).toBe(false);
        component.find('div').simulate('click');
        expect(component.state().clicked).toBe(true);
        expect(component.matchesElement(<div style={{ textDecoration: 'line-through' }}>go to the bathroom</div>)).toBe(true);
    });
});