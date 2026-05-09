import api from "@lib/apiClient";

export const getDashboardData = async () => {
  return await api("/admin/dashboard", {
    method: "GET",
  });
};