import { useGetDashboardDataQuery } from "./api/useGetDashboardDataQuery";

export const useDashboard = () => {
  const { data, isLoading, isError, error } = useGetDashboardDataQuery();

  return {
    stats: data?.data?.stats || {},
    recentOrders: data?.data?.recentOrders || [],
    lowStockItems: data?.data?.lowStockItems || [],
    recentActivity: data?.data?.recentActivity || [],
    isLoading,
    isError,
    error,
  };
};
