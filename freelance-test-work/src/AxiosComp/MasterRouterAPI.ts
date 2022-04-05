import { createAxiosMasterRouterInstance } from "./AxiosConfig";

const axiosInstance = createAxiosMasterRouterInstance()
export const addMasterRouterResponse = (cst_input_data: string): Promise<string> =>{
    return axiosInstance
    .post("/route", cst_input_data, {headers:{"content-type" : "text/plain"}})
    .then((cst_response_data)=>{
        return cst_response_data.data
    })
}