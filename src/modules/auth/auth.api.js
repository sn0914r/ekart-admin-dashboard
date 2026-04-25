import apiClient from "../../lib/apiClient";

export const loginWithEmail = async (credentials) => {
  const result = await apiClient.post("/auth/login", credentials);
  return result;
};

export const logoutUser = async () => {
  return await apiClient.post("/auth/logout");
};

export const refreshToken = async () => {
  return await apiClient.post("/auth/refresh");
};
