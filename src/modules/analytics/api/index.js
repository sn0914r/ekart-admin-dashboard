import api from "@lib/apiClient";

export const getAnalyticsData = async () => {
  return api("/admin/analytics", {
    method: "GET",
  });
};
