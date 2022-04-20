import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ValidCase from '../ValidCase';
configure({ adapter : new Adapter() });
describe('Valid Case', () => {
  test('validCase', () => {
    render(<ValidCase />);
    const msg = screen.getByTestId('Alert-validCase');
    userEvent.click(msg);
    expect(msg).toBeInTheDocument()
  });
});