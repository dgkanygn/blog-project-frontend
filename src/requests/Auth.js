import axios from "axios";

export const login = (data) => {
  return axios.post(`${process.env.REACT_APP_API_URL}/users/login`, data);
};

export const register = (data) => {
  return axios.post(`${process.env.REACT_APP_API_URL}/users/register`, data);
};
