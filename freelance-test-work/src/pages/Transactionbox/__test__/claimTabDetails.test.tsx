import React from 'react'
import { configure, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import ClaimTabDetails from '../components/ClaimTabDetails';

import { render, screen, waitFor } from '@testing-library/react';

configure({ adapter: new Adapter() });

describe('Row', () => {
    render(<ClaimTabDetails data={
        {
            claimRequest: {
                header: "",
                prescription:{
                    prescriptionServiceReferenceNumber:""
                }
                
            },
            additionalFields:{
                cob:""
            },
            claimResponseStatus:{
                claimResponseMessageInformations:[],
                claimResponseRejects:[]
            }
        }
    }
    />);
    test('check bin', () => {
        
        const bin = screen.getByTestId('bin-h');
        expect(bin).toBeInTheDocument();

    });

    test('rx', () => {
        const rx = screen.queryByTestId('rx-h');
        waitFor(() => expect(rx).toBeInTheDocument());
    });

    test('rx data', () => {
        const rxData = screen.queryByTestId('rx-data');
        waitFor(() => expect(rxData).toBeInTheDocument());
    });

    it('renders child correctly', () => {
        // expect(screen.getByTestId('message').toBeInTheDocument());
        waitFor(()=>expect(screen.queryByTestId('message')))
  
    });

    // it('print message fn', () => {
    //     const printMessage = jest.fn();
    //     expect(printMessage).toBeInTheDocument();
    // });

});
