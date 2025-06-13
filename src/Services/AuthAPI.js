import axiosInstance from './AxiosInstance';

export const loginUser = async (credentials) => {
  const response = await axiosInstance.post('/Auth/login', credentials);
  return response.data;
};

export const registerUser = async (details) => {
  const response = await axiosInstance.post('/Users/register', details);
  return response.data;
};
