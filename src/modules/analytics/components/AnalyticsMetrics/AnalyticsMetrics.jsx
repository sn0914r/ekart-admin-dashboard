import * as S from "./AnalyticsMetrics.styles";
import { TrendingUp, ShoppingBag, Banknote } from "lucide-react";

const AnalyticsMetrics = ({ metrics }) => {
  return (
    <S.StatsGrid>
      <S.StatCard>
        <S.StatIcon style={{ background: "linear-gradient(135deg, #e0e7ff 0%, #c7d2fe 100%)", color: "#4338ca", boxShadow: "0 4px 10px rgba(67, 56, 202, 0.15)" }}>
          <TrendingUp />
        </S.StatIcon>
        <S.StatNumber>₹{metrics?.totalRevenue?.toLocaleString() || 0}</S.StatNumber>
        <S.StatLabel>Total Revenue</S.StatLabel>
      </S.StatCard>

      <S.StatCard>
        <S.StatIcon style={{ background: "linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%)", color: "#15803d", boxShadow: "0 4px 10px rgba(21, 128, 61, 0.15)" }}>
          <ShoppingBag />
        </S.StatIcon>
        <S.StatNumber>{metrics?.totalPaidOrders?.toLocaleString() || 0}</S.StatNumber>
        <S.StatLabel>Total Paid Orders</S.StatLabel>
      </S.StatCard>

      <S.StatCard>
        <S.StatIcon style={{ background: "linear-gradient(135deg, #fef9c3 0%, #fef08a 100%)", color: "#a16207", boxShadow: "0 4px 10px rgba(161, 98, 7, 0.15)" }}>
          <Banknote />
        </S.StatIcon>
        <S.StatNumber>₹{Math.round(metrics?.averageOrderValue || 0)?.toLocaleString()}</S.StatNumber>
        <S.StatLabel>Average Order Value</S.StatLabel>
      </S.StatCard>
    </S.StatsGrid>
  );
};

export default AnalyticsMetrics;
