import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { render, screen, waitFor } from '@testing-library/react';
import Details from '../components/Details';
configure({ adapter: new Adapter() });
describe('Testing ClaimNumber Value', () => {
  test('claimNumber value', () => {
    render(<Details claimList={
      {
        claimNumber: "578475621480100"
      }
    } />);
    const claim_value = screen.getByTestId('TransactionCard-claimNumber');
    expect(claim_value).toBeInTheDocument();
  });
});
describe('Testing Detail Heading', () => {
  test('detail heading', () => {
    render(<Details claimList={''} />);
    const claim_heading = screen.getByTestId('TransactionCard-claimNumber-heading');
    expect(claim_heading).toBeInTheDocument();
  });
});
describe('Testing Status Heading', () => {
  test('status heading', () => {
    render(<Details claimList={''} />);
    const status_heading = screen.getByTestId('claim-status-heading');
    expect(status_heading).toBeInTheDocument();
  });
});
describe('Testing Status value', () => {
  test('status value', () => {
    const status_value = screen.queryByTestId('claim-current-status');
    waitFor(() => expect(status_value).toBeInTheDocument());
  });
});


