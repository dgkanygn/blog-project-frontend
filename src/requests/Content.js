import axios from "axios";

export const getContent = () => {
  return axios.get(`${process.env.REACT_APP_API_URL}/contents`);
};

export const addContent = (data) => {
  return axios.post(`${process.env.REACT_APP_API_URL}/contents/add`, data);
};

export const deleteContent = (data) => {
  return axios.delete(
    `${process.env.REACT_APP_API_URL}/contents/delete/${data}`
  );
};

export const getByIdContent = (data) => {
  return axios.get(`${process.env.REACT_APP_API_URL}/contents/${data}`);
};

export const likeContent = (param, body) => {
  return axios.put(
    `${process.env.REACT_APP_API_URL}/contents/like/${param}`,
    body
  );
};

export const dislikeContent = (param, body) => {
  return axios.put(
    `${process.env.REACT_APP_API_URL}/contents/dislike/${param}`,
    body
  );
};

export const getByUserIdContent = (data) => {
  return axios.get(
    `${process.env.REACT_APP_API_URL}/contents/getByUserIdContent/${data}`
  );
};

export const updateContent = (param, body) => {
  return axios.put(
    `${process.env.REACT_APP_API_URL}/contents/update/${param}`,
    body
  );
};
