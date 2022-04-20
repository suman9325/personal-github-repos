import React from 'react'
import Transactionbox from '../Transactionbox';
import { render, act, fireEvent, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import * as ClaimAPI from '../../../Services/ClaimAPI';
import { apiData, detailApi } from "../../../data/index";
import { resolve } from 'path';

jest.mock('../../../Services/ClaimAPI')

beforeAll(() => {
  //@ts-ignore
  ClaimAPI.getClaimByNumber = jest.fn().mockImplementation(async () => {
    return Promise.resolve({ data: apiData }).catch((e) => {
      console.error(e);
    });
  })

  //@ts-ignore
  ClaimAPI.getClaimDetails = jest.fn().mockImplementation(async () => {
    return Promise.resolve({ data: detailApi })
  })
})

const waitforSomeTime = async (timeout = 1000) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(1);
    }, timeout);
  });
};

describe('<Transactionbox />', () => {
  act(() => {
    render(<Transactionbox />);
  });
  test('it should mount', async () => {
    const transaction = screen.getByTestId('Transaction');
    await waitforSomeTime();
    const transactionTable = screen.getByTestId('claim-search-input');
    expect(transaction).toBeInTheDocument();
    expect(transactionTable).toBeInTheDocument();
    fireEvent.change(transactionTable, { target: { value: '794977781060100' } });
    const searchButton = screen.getByTestId('claimSearch-button');
    fireEvent.click(searchButton);
    await waitFor(() => {
      const dataTable = screen.getByTestId('data-table');
      expect(dataTable).toBeInTheDocument();
    });
    const recordRow = screen.getByText(/THE_MATRIX_NEO/i);
    fireEvent.click(recordRow);
    const cancelBtn = screen.getByTestId('cancel-btn');
    fireEvent.click(cancelBtn);
    screen.queryAllByTestId('show-modal').forEach((elem) => {
      fireEvent.click(elem);
    });
  });
});


































