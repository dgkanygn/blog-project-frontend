import axios from "axios";

export const getProfile = (data) => {
  return axios.get(`${process.env.REACT_APP_API_URL}/users/${data}`);
};

export const updateUser = (param, body) => {
  return axios.put(
    `${process.env.REACT_APP_API_URL}/users/updateUser/${param}`,
    body
  );
};

export const addFavorite = (param, body) => {
  return axios.put(
    `${process.env.REACT_APP_API_URL}/users/addFavorite/${param}`,
    body
  );
};

export const getUserFavsAndContents = (data) => {
  return axios.get(
    `${process.env.REACT_APP_API_URL}/users/getUserFavsAndContents/${data}`
  );
};

export const deleteProfile = (data, body) => {
  return axios.delete(
    `${process.env.REACT_APP_API_URL}/users/deleteProfile/${data}`,
    { data: body }
  );
};
