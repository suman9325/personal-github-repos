import React from 'react';
import { configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { render, screen } from '@testing-library/react';
import UnHappyCase from '../UnHappyCase';
import userEvent from '@testing-library/user-event';
configure({ adapter: new Adapter() });
describe('unhappy case', () => {
  test('unhappycase', () => {
    render(<UnHappyCase />);
    const msg = screen.getByTestId('Alert-unhappyCase');
    userEvent.click(msg);
    expect(msg).toBeInTheDocument()
  });
});
