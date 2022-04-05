import React from 'react'
import { configure, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import CST from '../CSTNew';
import mockAxios from 'jest-mock-axios';
import UserEvent from '@testing-library/user-event';

configure({ adapter: new Adapter() });

describe('Testing Clear Function', () => {
    test('handleClear function', () => {
        const wrapper = shallow(<CST />);
        const instance = wrapper.instance();
        instance.handleClear({
            target: {}
        })
    });
});

describe('Testing Input Change Function', () => {
    test('handleChange function', () => {
        const wrapper = shallow(<CST />);
        const instance = wrapper.instance();
        instance.handleChange({
            target: {}
        })
    });
});

describe('Testing Submit Function', () => {
    test('handleSubmit function', () => {
        const wrapper = shallow(<CST />);
        const instance = wrapper.instance();
        instance.handleSubmit({
            preventDefault: () => {},
            target: {}
        })
    });
});

describe('Testing Clear Button', () => {
    test('clear button', () => {
        const wrapper = shallow(<CST />);
        const instance = wrapper.instance();
        const clearBtn = wrapper.find('clear-btn');
        expect(clearBtn).toEqual({});
    });
});

describe('Testing Send Button', () => {
    test('send button', () => {
        const wrapper = shallow(<CST />);
        const instance = wrapper.instance();
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
    test('response data', () => {
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



