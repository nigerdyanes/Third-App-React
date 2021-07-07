import axios from "axios";
const URL = "https://rickandmortyapi.com/api";

export const getLocations = async (page = 1) => {
  try {
    const data = await axios.get(`${URL}/episode?page=${page}`);
    return data;
  } catch (error) {
    throw new Error(error);
  }
};
