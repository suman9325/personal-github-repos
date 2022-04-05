import React from 'react'
import { configure, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import DisplayTable from '../DisplayTable';

import { render, screen, waitFor  } from '@testing-library/react';

configure({ adapter: new Adapter() });

describe('Table', () => {
    test('display table', () => {
        render(<DisplayTable />);
        const modalHead = screen.queryByTestId('table-data');
        waitFor(()=>expect(modalHead).toBeInTheDocument())
        
    });
});