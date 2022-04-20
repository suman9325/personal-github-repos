import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { render, screen, waitFor } from '@testing-library/react';
import MemberTabDetails from '../components/MemberTabDetails';
configure({ adapter: new Adapter() });
describe('Row', () => {
    render(<MemberTabDetails data={
        {
            clientMember: {
                carrier: ""
            },
            coverage: {
                pharmacyBenefitPlanCode: ""
            }
        }
    }
    />);
    test('check Carrier', () => {
        const carrier = screen.getByTestId('Member-Carrier-heading');
        expect(carrier).toBeInTheDocument();
    });
    
    test('member', () => {
        const member = screen.queryByTestId('Member-MemberId-heading');
        waitFor(() => expect(member).toBeInTheDocument());
    });

    // test('carrier value check', () => {
    //     expect(screen.getByText(1234)).toBeInTheDocument();

    //     // const carrierValue = screen.queryByTestId('Member-Carrier-value');
    //     // waitFor(() => expect(carrierValue).toBeInTheDocument());
    // });
});
// describe('Row', () => {
//     render(<MemberTabDetails data={
//         {
//             clientMember: {
//                 carrier: "valueTest",
//             },
//             coverage: {
//                 pharmacyBenefitPlanCode: "CAPA001"
//             }
//         }
//     }
//     />);
//     test('carrier with the value ', () => {
//         const carrier = screen.getByText('valueTest');
//         expect(carrier).toBeInTheDocument();
//     });
//     test('plancode witht the value', () => {
//         const member = screen.queryByTestId('CAPA001');
//         waitFor(() => expect(member).toBeInTheDocument());
//     });
// });
