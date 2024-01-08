import axios from "axios";

const baseUri: string = "http://localhost:3030";

const axiosConfig = axios.create({
    baseURL: baseUri
})

interface UsersQuery{

}

export const getAllUsers = async(query: UsersQuery): Promise<Object> =>{
    let response = await axiosConfig.post("/auth/", query)
    return response.data;
}