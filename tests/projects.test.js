import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Projects from '../src/components/Projects';

Enzyme.configure({ adapter: new Adapter() });

/* eslint-disable  */
describe('Projects component', () => {
  test('renders', () => {
    const wrapper = shallow(<Projects />);

    expect(wrapper.exists()).toBe(true);
  });

  test('matches the snapshot', () => {
    const wrapper = shallow(<Projects />);

    expect(wrapper).toMatchSnapshot();
  });

  test('there are projects listed', () => {
    const wrapper = shallow(<Projects />);

    expect(wrapper.find('li')).not.toHaveLength(0);
  });

  test('the projects listed have a title', () => {
    const wrapper = shallow(<Projects/>);

    expect(wrapper.find('h4').exists()).toBe(true);
  });

  test('there is a user information', () => {
    const wrapper = shallow(<Projects/>);

    expect(wrapper.find('h5').text()).toBe('Name: Chidinma K.');
  });

  test('there is a delete button', () => {
    const wrapper = shallow(<Projects deleteDiagram={() => {}} />);

    const button = wrapper.find('button');

    expect(button.exists()).toBeDefined;
  });
});
