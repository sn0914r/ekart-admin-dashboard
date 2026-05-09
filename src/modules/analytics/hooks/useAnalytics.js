import { useGetAnalyticsDataQuery } from "./api/useGetAnalyticsDataQuery";

const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export const useAnalytics = () => {
  const { data, isLoading, isError, error } = useGetAnalyticsDataQuery();

  const rawData = data?.data || {};

  // Map monthly revenue to format expected by Recharts
  const formattedMonthlyRevenue = (rawData.monthlyRevenue || []).map((item) => ({
    name: item._id ? `${monthNames[item._id.month - 1]}` : "Unknown",
    revenue: item.revenue || 0,
    orders: item.count || 0,
  }));

  // Map order status to format expected by PieChart
  const formattedOrderStatus = (rawData.orderStatusDistribution || []).map((item) => ({
    name: item._id || "UNKNOWN",
    value: item.count || 0,
  }));

  return {
    metrics: rawData.metrics || {},
    monthlyRevenue: formattedMonthlyRevenue,
    orderStatusDistribution: formattedOrderStatus,
    topProducts: rawData.topProducts || [],
    isLoading,
    isError,
    error,
  };
};
