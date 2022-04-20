import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { render, screen, waitFor } from '@testing-library/react';
import DisplayTable from '../DisplayTable';
configure({ adapter : new Adapter() });
describe('Table', () => {
  test('display table', () => {
    render(<DisplayTable />);
    const modalHead = screen.queryByTestId('table-data');
    waitFor(() => expect(modalHead).toBeInTheDocument())
  });
});