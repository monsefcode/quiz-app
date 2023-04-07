import axios from "axios";

// @ts-ignore
export const api = import.meta.env.VITE_API_URL;

export const getAllUsers = async () => {
  const { data } = await axios.get(`${api}/users`);
  return data;
};

export const createUser = async (user: any) => {
  const { data } = await axios.post(`${api}/users`, user);
  return data;
};

export const updateUser = async (id: number, quizResult: any) => {
  const { data } = await axios.patch(
    `${api}/users/${id}/quiz-result`,
    quizResult
  );
  return data;
};

// Quiz Result
export const getQuizResult = async (id: number) => {
  const { data } = await axios.get(`${api}/users/${id}/quiz-result`);
  return data;
};
