import axios, { AxiosInstance } from "axios";
const getApi = ()=>{
    if(window.location.host.startsWith("adj-ui-gateway")){
        return  `http://${window.location.host}`
    }
    return  `http://${window.location.host}`
};

const axiosClaimHistoryInstance = axios.create({
    baseURL:`${getApi()}/claim-history`
})

const axiosMasterRouterInstance = axios.create({
    baseURL:`${getApi()}/master-router`
})

export const createAxiosClaimHistoryInstance=(): AxiosInstance=>{
    return axiosClaimHistoryInstance
}

export const createAxiosMasterRouterInstance=(): AxiosInstance=>{
    return axiosMasterRouterInstance
}