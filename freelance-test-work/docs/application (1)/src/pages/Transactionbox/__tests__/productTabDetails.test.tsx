import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { render, screen, waitFor } from '@testing-library/react';
import ProductTabDetails from '../components/ProductTabDetails';
configure({ adapter: new Adapter() });
describe('Row', () => {
    render(<ProductTabDetails data={
        {
            drug: "",
            claimRequest: {
                prescription: ""
            },
            clientMember: ""
        }
    }
    />);
    test('check drug', () => {
        const drug = screen.getByTestId('Product-DrugName-heading');
        expect(drug).toBeInTheDocument();
    });
    test('display', () => {
        const display = screen.queryByTestId('Product-DisplayQuantity-heading');
        waitFor(() => expect(display).toBeInTheDocument());
    });
});