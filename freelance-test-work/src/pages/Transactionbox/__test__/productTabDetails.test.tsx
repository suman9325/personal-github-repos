import React from 'react'
import { configure, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import ProductTabDetails from '../components/ProductTabDetails';

import { render, screen, waitFor } from '@testing-library/react';

configure({ adapter: new Adapter() });

describe('Row', () => {
    render(<ProductTabDetails data={
        {
            drug:"",
            claimRequest:{
                prescription:""
            },
            clientMember:""
        }
    }
    />);
    test('check drug', () => {
        
        const drug = screen.getByTestId('drug-h');
        expect(drug).toBeInTheDocument();

    });

    test('display', () => {
        const display = screen.queryByTestId('display-h');
        waitFor(() => expect(display).toBeInTheDocument());
    });

});
