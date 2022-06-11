import axiosClient from "api/axiosClient";

export const getProperties = async (query = '') => {
    const { data } = await axiosClient.get(`/v1/lekki/property/${query}`);
    console.log(data);
    return data.data;
}

export const getProperty = async (id: string) => {
    const response = await axiosClient.get(`/v1/lekki/property/${id}`);
    return response.data;
}