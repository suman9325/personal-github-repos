import React from 'react'
import { configure, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Details from '../components/Details';

import { render, screen, waitFor  } from '@testing-library/react';

configure({ adapter: new Adapter() });

describe('Testing Detail Heading', () => {
    test('detail heading', () => {
        render(<Details claimList={''}/>);
        const claim_heading = screen.getByTestId('claim-h');
        expect(claim_heading).toBeInTheDocument();
    });
});

describe('Testing Status Heading', () => {
    test('status heading', () => {
        render(<Details claimList={''}/>);
        const status_heading = screen.getByTestId('status-h');
        expect(status_heading).toBeInTheDocument();
    });
});