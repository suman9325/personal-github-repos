import React from 'react'
import { configure, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import MemberTabDetails from '../components/MemberTabDetails';

import { render, screen, waitFor } from '@testing-library/react';

configure({ adapter: new Adapter() });

describe('Row', () => {
    render(<MemberTabDetails data={
        {
            clientMember:"",
            coverage:{
                pharmacyBenifitPlanCode:""
            }
        }
    }
    />);
    test('check carrier', () => {
        
        const carrier = screen.getByTestId('carrier-h');
        expect(carrier).toBeInTheDocument();

    });

    test('member', () => {
        const member = screen.queryByTestId('member-h');
        waitFor(() => expect(member).toBeInTheDocument());
    });

});
