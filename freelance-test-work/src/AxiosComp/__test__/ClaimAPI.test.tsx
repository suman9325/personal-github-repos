import axios from 'axios';
import mockAxios from 'jest-mock-axios';
import {getClaimDetails, getClaimByNumber} from '../ClaimAPI'


jest.mock("axios");

describe("fetchUsers", () => {
  describe("when API call is successful", () => {
    it("should return users list", ()=>{
      // given
      const claimNumber = "2"
      axios.get.mockResolvedValueOnce(claimNumber);

      // when
      const result = getClaimByNumber(claimNumber);

      const res={
        data: {
            id: 2,
            email: "janet.weaver@reqres.in",
            first_name: "Janet",
            last_name: "Weaver",
            avatar: "https://reqres.in/img/faces/2-image.jpg"
        },
        support: {
            url: "https://reqres.in/#support-heading",
            text: "To keep ReqRes free, contributions towards server costs are appreciated!"
        }
    }

      // then
      expect(axios.get).toHaveBeenCalledWith("https://reqres.in/api/users/" + claimNumber);
    //   expect(result).toEqual(res)
    });
  });
});




// afterEach(() => {
//     // cleaning up the mess left behind the previous test
//     mockAxios.reset();
// });

// it('UppercaseProxy should get data from the server and convert it to UPPERCASE', () => {

//     let catchFn = jest.fn(),
//         thenFn = jest.fn();

//     let claimNumber = '323223';
//     let claimSequenceNumber=[1]

//     // getClaimDetails(claimNumber, claimSequenceNumber)
//         // .then(thenFn)
//         // .catch(catchFn);

//     expect(mockAxios.post).toHaveBeenCalledWith('https://reqres.in/api/users',{
//         "name": "morpheus",
//         "job": "leader"
//     });

//     // let responseObj = { data: {
//     //     "name": "morpheus",
//     //     "job": "leader",
//     //     "id": "587",
//     //     "createdAt": "2022-03-07T13:00:47.657Z"
//     // } };

//     // mockAxios.mockResponse(responseObj);

//     // expect(thenFn).toHaveBeenCalledWith({
//     //     "name": "morpheus",
//     //     "job": "leader"
//     // });

//     // expect(catchFn).not.toHaveBeenCalled();
// });