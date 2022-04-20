import CST from '../CST';
import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
describe('Testing Clear Function', () => {
  test('handleClear function', () => {
    const wrapper = shallow(<CST />);
    const instance: any = wrapper.instance();
    instance.handleClear({
      target: {}
    })
  });
});
describe('Testing Input Change Function', () => {
  test('handleChange function', () => {
    const wrapper = shallow(<CST />);
    const instance: any = wrapper.instance();
    instance.handleChange({
      target: {}
    })
  });
});
describe('Testing Handle Submit Function', () => {
  test('handleSubmit function', () => {
    const wrapper = shallow(<CST />);
    const instance: any = wrapper.instance();
    instance.handleSubmit({
      target: {}
    })
  });
});
describe('Testing Clear Button', () => {
  test('clear button', () => {
    const wrapper = shallow(<CST />);
    const clearBtn = wrapper.find('clear-btn');
    expect(clearBtn).toEqual({});
  });
});
describe('Testing Send Button', () => {
  test('send button', () => {
    const wrapper = shallow(<CST />);
    const sendBtn = wrapper.find('send-btn');
    expect(sendBtn).toEqual({}); 
  });
});
describe('Request Data', () => {
  test('request data', () => {
    const wrapper = shallow(<CST />);
    const request = wrapper.find('request-h');
    expect(request).toEqual({});
  });
});
describe('Response Data', () => {
  test('Response data', () => {
    const wrapper = shallow(<CST />);
    const response = wrapper.find('response-h');
    expect(response).toEqual({});
  });
});
describe('Input', () => {
  test('input', () => {
    const wrapper = shallow(<CST />);
    const input = wrapper.find('input-h');
    expect(input).toEqual({});
  });
});
