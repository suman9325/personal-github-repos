import React from 'react'
import { configure, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import DisplayModal from '../DisplayModal';

import { render, screen, waitFor  } from '@testing-library/react';

configure({ adapter: new Adapter() });

describe('Head', () => {
    test('modal head', () => {
        render(<DisplayModal open={''}
            onClose={function name() {
                
            }} />);
        const modalHead = screen.queryByTestId('modal-h');
        waitFor(()=>expect(modalHead).toBeInTheDocument())
        
    });

    test('modal body', () => {
        render(<DisplayModal open={''}
            onClose={function name() {
                
            }} />);
        const modalbody = screen.queryByTestId('modal-content');
        waitFor(()=>expect(modalbody).toBeInTheDocument())
        
    });
});