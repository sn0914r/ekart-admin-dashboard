import { useQuery } from "@tanstack/react-query";
import { getDashboardData } from "../../api";

export const useGetDashboardDataQuery = () => {
  return useQuery({
    queryKey: ["dashboardData"],
    queryFn: getDashboardData,
  });
};
