import React from 'react';
import { configure, shallow } from 'enzyme';
import NavBar from '../Navbar';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
describe('Testing Navbar Menu Button', () => {
    test('menu button click', () => {
        const wrapper = shallow(<NavBar />);
        const menuBtn = wrapper.find('menu-btn');
        expect(menuBtn).toEqual({})
    });
});
describe('Testing NavBar Close Menu Button ', () => {
    test('menu button click', () => {
        const wrapper = shallow(<NavBar />);
        const menuCloseBtn = wrapper.find('menu-close-btn');
        expect(menuCloseBtn).toEqual({})
    });
});
describe('Testing NavBar User Button', () => {
    test('user button click', () => {
        const wrapper = shallow(<NavBar />);
        const userBtn = wrapper.find('user-btn');
        expect(userBtn).toEqual({})
    });
});
describe('Testing NavBar User Close Button', () => {
    test('user close button click', () => {
        const wrapper = shallow(<NavBar />);
        const userCloseBtn = wrapper.find('user-close-btn');
        expect(userCloseBtn).toEqual({})
    });
});
describe('Testing  Menu Function', () => {
    test('handlemenu function', () => {
        const wrapper = shallow(<NavBar />);
        const instance:any = wrapper.instance();
        instance.handleMenu({
            target: {}
        })
    });
});
describe('Testing User Menu Function', () => {
    test('handleUsermenu function', () => {
        const wrapper = shallow(<NavBar />);
        const instance:any = wrapper.instance();
        instance.handleUserMenu({
            target: {}
        })
    });
});
describe('Testing Close Function', () => {
  test('handleClose function', () => {
    const wrapper = shallow(<NavBar />);
    const instance:any = wrapper.instance();
    instance.handleClose({
        target: {}
    })
  });
});
describe('Testing User Close Function', () => {
    test('handleUserClose function', () => {
        const wrapper = shallow(<NavBar />);
        const instance:any = wrapper.instance();
        instance.handleUserClose({
            target: {}
        })
    });
});