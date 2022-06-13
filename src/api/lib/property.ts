import axiosClient from "api/axiosClient";
import { AddProperty } from "interfaces/property";

export const getProperties = async (query = "") => {
  const { data } = await axiosClient.get(`/property/${query}`);
  console.log(data);
  return data.data;
};

export const getProperty = async (id: string) => {
  const response = await axiosClient.get(`/property/${id}`);
  return response.data?.data;
};

export const createProperty = async ({
  propertyOwner,
  address,
  description,
  type,
  bathroom,
  bedroom,
  kitchen,
  toilet,
  sittingRoom,
  validFrom,
  validTo,
  images,
}: AddProperty) => {
  const body = {
    propertyOwner,
    address,
    description,
    type,
    bathroom,
    bedroom,
    kitchen,
    toilet,
    sittingRoom,
    validFrom,
    validTo,
    images,
  };

  try {
    const { data } = await axiosClient.post("/property", body);
    return data.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
