import React from 'react';
jest.mock('axios', () => {
  return {
_esModule: true,
default: jest.fn()
  }
});

describe('Claim API', () => {
  it('should get data', () => {
      const axios = require ('axios');
      jest.spyOn(axios,'default').mockResolvedValue({
        claimNumber: '1234'
      })
  })
})

