/**
 * @format
 */
import 'jsdom-global/register';
import 'react-native';
import React from 'react';
import App from '../App';
import TestComponent from '../src/components/TestComponent';
import {mount, shallow} from 'enzyme';

// Note: test renderer must be required after react-native.

// it('renders correctly', () => {
//   renderer.create(<App />);
// });

// describe('Component tested with airbnb enzyme', () => {
//   test('App mount with enzyme', () => {
//     const wrapper = mount(<App />);
//     console.warn(wrapper);
//     const wrapper1 = shallow(<App />);
//     console.warn(wrapper1);
//   });
// });

describe('SomeComponent component', () => {
  it('Shallow rendering', () => {
    const wrapper = shallow(<TestComponent />);
    const componentInstance = wrapper.instance();
    //Accessing react lifecyle methods
    componentInstance.componentDidMount();
    // componentInstance.componentWillMount();
    //Accessing component state
    expect(wrapper.state('value')).toBe('Value');
    // //Accessing component props
    // expect(wrapper.props.someProp).toEqual(1);
    // //Accessing class methods
    componentInstance.handleOnChange('2222');
    expect(wrapper.state('value')).toBe('2222');
  });
});
//
// describe('Mock function', () => {
//   it('Mockkkkk', () => {
//     const mockFn = jest.fn();
//     const wrapper = shallow(<TestComponent />);
//     const componentInstance = wrapper.instance();
//     //Accessing react lifecyle methods
//     componentInstance.componentDidMount();
//     // componentInstance.componentWillMount();
//     //Accessing component state
//     expect(wrapper.state('value')).toBe('Value');
//     // //Accessing component props
//     // expect(wrapper.props.someProp).toEqual(1);
//     // //Accessing class methods
//     // expect(componentInstance.counter(1)).toEqual(2);
//   });
// });
