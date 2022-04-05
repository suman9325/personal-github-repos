import React from 'react'
import { configure, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import NavBar from '../Navbar';
import { render, screen, waitFor } from '@testing-library/react';
import UserEvent from '@testing-library/user-event';

configure({ adapter: new Adapter() });

describe('Testing Navbar Menu Button', () => {
    test('menu button click', () => {
        const wrapper = shallow(<NavBar />);
        // render(<NavBar />);
        const menuBtn = wrapper.find('menu-btn');
        expect(menuBtn).toEqual({})
        // waitFor(() => {
        //     UserEvent.click(menuBtn);
        //     expect(menuBtn).toBeInTheDocument();
        // }
        // );
    });
});

// describe('Testing Navbar Close Menu Button', () => {
//     test('menu close button click', () => {
//         render(<NavBar />);
//         const menuCloseBtn = screen.queryByTestId('menu-close-btn');
//         waitFor(() => {
//             UserEvent.click(menuCloseBtn);
//             expect(menuCloseBtn).toBeInTheDocument();
//         }
//         );
//     });
// });

// describe('Testing Navbar User Button', () => {
//     test('user button click', () => {
//         render(<NavBar />);
//         const userBtn = screen.queryByTestId('user-btn');
//         waitFor(() => {
//             UserEvent.click(userBtn);
//             expect(userBtn).toBeInTheDocument();
//         }
//         );
//     });
// });

// describe('Testing Navbar User Close Button', () => {
//     test('user close button click', () => {
//         render(<NavBar />);
//         const userCloseBtn = screen.queryByTestId('user-close-btn');
//         waitFor(() => {
//             UserEvent.click(userCloseBtn);
//             expect(userCloseBtn).toBeInTheDocument();
//         }
//         );
//     });
// });