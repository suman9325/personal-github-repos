import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { render, screen, waitFor } from '@testing-library/react';
import DisplayModal from '../DisplayModal';
configure({adapter : new Adapter() });
describe('Head', () => {
    test('modal head', () => {
      render(<DisplayModal open={''}
      onClose={function name() {
      }} />);
      const modalHead = screen.queryByTestId('modal-h');
      waitFor( () =>expect(modalHead).toBeInTheDocument())
    });
  
    test('modal body', () => {
      render(<DisplayModal open ={''}
      onClose={function name() {
      }}/>);
      const modalBody = screen.queryAllByTestId('modal-content');
      waitFor(() => expect(modalBody).toBeInTheDocument())
    });
});