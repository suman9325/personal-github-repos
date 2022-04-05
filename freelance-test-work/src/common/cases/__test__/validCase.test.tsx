import React from 'react'
import { configure, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import ValidCase from '../ValidCase';

import { render, screen, waitFor  } from '@testing-library/react';
import UserEvent from '@testing-library/user-event';

configure({ adapter: new Adapter() });

describe('Valid case', () => {
    test('valid case', () => {
        render(<ValidCase />);
        const msg = screen.getByTestId('valid-case');
        UserEvent.click(msg);
        expect(msg).toBeInTheDocument()
    });
});