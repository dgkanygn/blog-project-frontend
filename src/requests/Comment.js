import axios from "axios";

export const addComment = (data) => {
  return axios.post(`${process.env.REACT_APP_API_URL}/comments/add`, data);
};

export const deleteComment = (data) => {
  return axios.delete(
    `${process.env.REACT_APP_API_URL}/comments/delete/${data}`
  );
};

export const getByIdComment = (data) => {
  return axios.get(
    `${process.env.REACT_APP_API_URL}/comments/getByContentIdComments/${data}`
  );
};

export const likeComment = (param, body) => {
  return axios.put(
    `${process.env.REACT_APP_API_URL}/comments/like/${param}`,
    body
  );
};

export const dislikeComment = (param, body) => {
  return axios.put(
    `${process.env.REACT_APP_API_URL}/comments/dislike/${param}`,
    body
  );
};

export const getOneComment = (data) => {
  return axios.get(`${process.env.REACT_APP_API_URL}/comments/${data}`);
};
