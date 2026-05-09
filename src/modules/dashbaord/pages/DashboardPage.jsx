import { useDashboard } from "../hooks/useDashboard";
import DashboardStats from "../components/DashboardStats/DashboardStats";
import RecentOrders from "../components/RecentOrders/RecentOrders";
import LowStockAlerts from "../components/LowStockAlerts/LowStockAlerts";
import RecentActivity from "../components/RecentActivity/RecentActivity";
import * as S from "./DashboardPage.styles";

const DashboardPage = () => {
  const {
    stats,
    recentOrders,
    lowStockItems,
    recentActivity,
    isLoading,
    isError,
    error,
  } = useDashboard();

  if (isLoading) return <div className="p-4">Loading dashboard...</div>;
  if (isError) return <div className="p-4 text-danger">Error loading dashboard: {error?.message}</div>;

  return (
    <S.PageLayout>
      <div className="container-fluid pb-4">
        <DashboardStats stats={stats} />
        <div className="row">
          <div className="col-lg-8 mb-4 mb-lg-0">
            <RecentOrders orders={recentOrders} />
          </div>
          <div className="col-lg-4">
            <LowStockAlerts items={lowStockItems} />
            <RecentActivity activities={recentActivity} />
          </div>
        </div>
      </div>
    </S.PageLayout>
  );
};

export default DashboardPage;
