import React from 'react'
import { configure, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import UnHappyCase from '../UnHappyCase';

import { render, screen, waitFor  } from '@testing-library/react';
import UserEvent from '@testing-library/user-event';

configure({ adapter: new Adapter() });

describe('Unhappy case', () => {
    test('unhappy case', () => {
        render(<UnHappyCase />);
        const msg = screen.getByTestId('unhappy-case');
        UserEvent.click(msg);
        expect(msg).toBeInTheDocument()
    });
});