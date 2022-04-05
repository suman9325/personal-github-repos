import axios from "axios";
import { createAxiosClaimHistoryInstance } from "./AxiosConfig";

const axiosInstance = createAxiosClaimHistoryInstance()
export const getClaimByNumber = (claimNumber: string) =>{
    // axios.get("/claim-summary"+claimNumber)
    axios.get("https://reqres.in/api/users/"+claimNumber)
    .then((res)=>{
        return res
    })
}

export const getClaimDetails = (claimNumber: string, claimSequenceNumber) =>{
    axiosInstance.post("/claim-detail", {claimNumber, claimSequenceNumber})
    .then((res)=>{
        return res
    })
}