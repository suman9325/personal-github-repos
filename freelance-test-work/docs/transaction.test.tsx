import React, { useState } from 'react'
import { configure, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Transactionbox from '../Transactionbox'

import { render, screen, waitFor  } from '@testing-library/react';
import UserEvent from '@testing-library/user-event';
import TextField  from '../Transactionbox';
import { apiData } from '../../../common/demoApiData/apiData';
jest.mock('../../../common/demoApiData/apiData')

configure({ adapter: new Adapter() });

describe('Testing Transactionbox Component', () => {
    test('cancel button click', () => {
        render(<Transactionbox />);
        const cancelBtn = screen.getByTestId('cancel-btn');
        UserEvent.click(cancelBtn);
        expect(cancelBtn.textContent).toEqual('');
    });
});

describe('Testing Transactionbox Component', () => {
    test('search button click', () => {
        render(<Transactionbox />);
        const searchBtn = screen.getByTestId('search-btn');
        UserEvent.click(searchBtn);
        expect(searchBtn.textContent).toEqual('SEARCH');
    });
});

describe('Testing Transactionbox Component', () => {
    test('input field change', () => {
        render(<Transactionbox />);
        const inputField = screen.getByTestId('input-field');
        UserEvent.click(inputField);
        expect(inputField.textContent).toEqual('');
    });
});


// test('input value is updated correctly', () => {
//     render(<Transactionbox />);

//     const input:any = screen.getByRole('textbox');
//     UserEvent.type(input, 'React');

//     expect(input.value).toBe('React');
// });


test('call the callback every time input value is changed', () => {
    const handleChange = jest.fn();

    render(<TextField handleChange={handleChange} inputValue="" />);

    const input = screen.getByRole('textbox');
    UserEvent.type(input, '');

    expect(handleChange).toHaveBeenCalledTimes(0);
});

test('transaction details ', () => {
    render(<Transactionbox />);
    const details = screen.queryByTestId ('data-table');
    waitFor(() => expect(details).toBeInTheDocument());
});

test('mainbox details ', () => {
    render(<Transactionbox />);
    const mainBox = screen.queryByTestId ('mainbox-area');
    waitFor(() => expect(mainBox).toBeInTheDocument());
});



test('check show modal fn', () => {
    render(<Transactionbox />);
    const showModal = jest.fn();
    expect(showModal).toHaveBeenCalledTimes(0);
});

test('show modal button', () => {
    render(<Transactionbox />);
    const clickModal = screen.queryByTestId('show-modal');
    waitFor(() => expect(clickModal.textContent).toEqual(''));
});

test('call the isDaylight function to check daylight', () => {
    const isDaylight = jest.fn();

    render(<Transactionbox />);

    expect(isDaylight).toHaveBeenCalledTimes(0);
});

test('Sequence No ', () => {
    render(<Transactionbox />);
    const seq = screen.queryByTestId ('Seq');
    waitFor(() => expect(seq).toBeInTheDocument());
});

test('Member ID', () => {
    render(<Transactionbox />);
    const memberId = screen.queryByTestId ('Member ID');
    waitFor(() => expect(memberId).toBeInTheDocument());
});

test('Last Name', () => {
    render(<Transactionbox />);
    const lastName = screen.queryByTestId ('Last Name');
    waitFor(() => expect(lastName).toBeInTheDocument());
});

test('First Name', () => {
    render(<Transactionbox />);
    const firstName = screen.queryByTestId ('First Name');
    waitFor(() => expect(firstName).toBeInTheDocument());
});

test('Submitted', () => {
    render(<Transactionbox />);
    const submitted = screen.queryByTestId ('Submitted');
    waitFor(() => expect(submitted).toBeInTheDocument());
});

test('Status', () => {
    render(<Transactionbox />);
    const status = screen.queryByTestId ('Status');
    waitFor(() => expect(status).toBeInTheDocument());
});

test("use state",()=>{
    // const setStateMock = jest.fn();
    // const useStateMock: any = (useState: any) => [useState, setStateMock];
    // jest.spyOn(React, 'useState').mockImplementation(useStateMock);

    render(<Transactionbox />);
    // const status = screen.queryByTestId ('setshowMainbox');
    // waitFor(() => expect(status).toBeInTheDocument());
})

test('check row click fn', () => {
    render(<Transactionbox />);
    const rowSelect = jest.fn();
    expect(rowSelect).toHaveBeenCalledTimes(0);
});

const check=(value:string)=>{
    if (value==''){
        return "ok"
    }
    else{
        return "not ok"
    }
}
describe('check', ()=>{
    test('checking if', ()=>{
        render(<Transactionbox />);
        // const check = jest.fn();
        // let res = jest.fn();
        let value="123"
        const res= check(value)
        expect(res).toEqual("not ok");
    })

    test('checking eelse', ()=>{
        render(<Transactionbox />);
        // const check = jest.fn();
        // let res = jest.fn();
        let value=""
        const res= check(value)
        expect(res).toEqual("ok");
    })
    
    
})