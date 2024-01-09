import axios from "axios";
import { toast } from 'react-toastify';

const baseUri: string = "http://localhost:3030";

export const getToken = ()=>{
    return localStorage.getItem("token")
}

const axiosConfig = axios.create({
    baseURL: baseUri,
    headers: {
        Authorization: `Bearer ${getToken()}`
    }
})

interface UsersQuery{

}

export const getAllUsers = async(query: UsersQuery): Promise<Object> =>{
    let response = await axiosConfig.post("/auth/", query)
    return response.data;
}



export const login = async (data: any)=>{
    await axiosConfig.post("/auth/sign-in", data)
    .then((resp : any) => {
        let token : string = resp.data.payload.token
        if(token){
            localStorage.setItem("token", token)
            toast("Signed In Successfully")
            window.location.href = "/"
        }
        
    })
    .catch((err : any) => console.log(err))
}

export const createUser = async (data: any)=>{
    await axiosConfig.post("/auth/sign-up", data)
    .then((resp : any) => {
        console.log(resp)
        toast(resp.data.message)
    })
    .catch((err : any) => console.log(err))
}
