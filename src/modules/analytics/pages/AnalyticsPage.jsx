import { useAnalytics } from "../hooks/useAnalytics";
import AnalyticsMetrics from "../components/AnalyticsMetrics/AnalyticsMetrics";
import RevenueChart from "../components/RevenueChart/RevenueChart";
import OrderStatusChart from "../components/OrderStatusChart/OrderStatusChart";
import TopProducts from "../components/TopProducts/TopProducts";
import * as S from "./AnalyticsPage.styles";

const AnalyticsPage = () => {
  const {
    metrics,
    monthlyRevenue,
    orderStatusDistribution,
    topProducts,
    isLoading,
    isError,
    error,
  } = useAnalytics();

  if (isLoading) return <div className="p-4">Loading analytics...</div>;
  if (isError) return <div className="p-4 text-danger">Error loading analytics: {error?.message}</div>;

  return (
    <S.PageLayout>
      <div className="container-fluid pb-4">
        <AnalyticsMetrics metrics={metrics} />
        <div className="row mb-3">
          <div className="col-lg-8 mb-4 mb-lg-0">
            <RevenueChart data={monthlyRevenue} />
          </div>
          <div className="col-lg-4">
            <OrderStatusChart data={orderStatusDistribution} />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <TopProducts products={topProducts} />
          </div>
        </div>
      </div>
    </S.PageLayout>
  );
};

export default AnalyticsPage;
