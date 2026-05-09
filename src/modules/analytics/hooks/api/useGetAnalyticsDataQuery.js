import { useQuery } from "@tanstack/react-query";
import { getAnalyticsData } from "../../api";

export const useGetAnalyticsDataQuery = () => {
  return useQuery({
    queryKey: ["analytics"],
    queryFn: getAnalyticsData,
  });
};
