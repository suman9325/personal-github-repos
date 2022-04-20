import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ClaimTabDetails from '../components/ClaimTabDetails';
import { render, screen, waitFor } from '@testing-library/react';
configure({ adapter: new Adapter() });
describe('Row', () => {
    render(<ClaimTabDetails data={
        {
            claimRequest: {
                header: "",
                prescription: {
                    prescriptionServiceReferenceNumber: ""
                }
            },
            additionalFields: {
                cob: ""
            },
            claimResponseStatus: {
                claimResponseMessageInformations: [],
                claimResponseRejects: []
            }
        }
    }
    />);
    test('check bin', () => {
        const bin = screen.getByTestId('bin-h');
        expect(bin).toBeInTheDocument();
    });
    test('rx', () => {
        const rx = screen.queryAllByTestId('rx-h');
        waitFor(() => expect(rx).toBeInTheDocument());
    });
    test('rx data', () => {
        const rxData = screen.queryByTestId('rx-data');
        waitFor(() => expect(rxData).toBeInTheDocument());
    });
    test('bin data', () => {
        const binData = screen.queryByTestId('bin-data');
        waitFor(() => expect(binData).toBeInTheDocument());
    });
    test('product data', () => {
        const paData = screen.queryByTestId('pa-data');
        waitFor(() => expect(paData).toBeInTheDocument());
    });
    it('renders child correctly', () => {
        waitFor(() => expect(screen.queryByTestId('message')))
    });
   
});

