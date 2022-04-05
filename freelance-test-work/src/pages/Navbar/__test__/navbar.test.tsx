import React from 'react'
import { configure, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import NavBar from '../Navbar';

configure({ adapter: new Adapter() });

describe('Testing Navbar Menu Button', () => {
    test('menu button click', () => {
        const wrapper = shallow(<NavBar />);
        const menuBtn = wrapper.find('menu-btn');
        expect(menuBtn).toEqual({})
    });
});

describe('Testing Navbar Close Menu Button', () => {
    test('menu close button click', () => {
        const wrapper = shallow(<NavBar />);
        const menuCloseBtn = wrapper.find('menu-close-btn');
        expect(menuCloseBtn).toEqual({})
    });
});

describe('Testing Navbar User Button', () => {
    test('user button click', () => {
        const wrapper = shallow(<NavBar />);
        const userBtn = wrapper.find('user-btn');
        expect(userBtn).toEqual({})
    });
});

describe('Testing Navbar User Close Button', () => {
    test('user close button click', () => {
        const wrapper = shallow(<NavBar />);
        const userCloseBtn = wrapper.find('user-close-btn');
        expect(userCloseBtn).toEqual({})
    });
});

describe('Testing Menu Function', () => {
    test('handleMenu function', () => {
        const wrapper = shallow(<NavBar />);
        const instance = wrapper.instance();
        instance.handleMenu({
            target: {}
        })
    });
});

describe('Testing User Menu Function', () => {
    test('handleUserMenu function', () => {
        const wrapper = shallow(<NavBar />);
        const instance = wrapper.instance();
        instance.handleUserMenu({
            target: {}
        })
    });
});

describe('Testing Close Function', () => {
    test('handleClose function', () => {
        const wrapper = shallow(<NavBar />);
        const instance = wrapper.instance();
        instance.handleClose({
            target: {}
        })
    });
});

describe('Testing User Close Function', () => {
    test('handleUserClose function', () => {
        const wrapper = shallow(<NavBar />);
        const instance = wrapper.instance();
        instance.handleUserClose({
            target: {}
        })
    });
});
