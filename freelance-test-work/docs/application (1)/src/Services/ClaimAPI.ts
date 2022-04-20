import { createAxiosClaimHistoryInstance } from "./AxiosConfig";
import {secureAxios} from "oidc-library";

const axiosInstance = createAxiosClaimHistoryInstance();
export const getClaimByNumber = (claimNumber: string) =>
    secureAxios.get("/claim-history/claim-summary/" + claimNumber)
        .then((res) => {
            return res;
        });

export const getClaimDetails = ( claimNumber: string,
    claimSequenceNumber) =>
    secureAxios.post("/claim-history/claim-detail", {claimNumber, claimSequenceNumber } )
        .then((res) => {
            return res;
        });


