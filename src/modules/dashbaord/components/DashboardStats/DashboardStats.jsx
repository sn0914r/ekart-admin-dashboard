import * as S from "./DashboardStats.styles";
import { TrendingUp, PackageSearch, Activity, AlertCircle } from "lucide-react";

const DashboardStats = ({ stats }) => {
  return (
    <S.StatsGrid>
      <S.StatCard>
        <S.StatIcon style={{ background: "linear-gradient(135deg, #e0e7ff 0%, #c7d2fe 100%)", color: "#4338ca", boxShadow: "0 4px 10px rgba(67, 56, 202, 0.15)" }}>
          <TrendingUp />
        </S.StatIcon>
        <S.StatNumber>₹{stats?.totalRevenue?.toLocaleString() || 0}</S.StatNumber>
        <S.StatLabel>Total Revenue</S.StatLabel>
      </S.StatCard>
      
      <S.StatCard>
        <S.StatIcon style={{ background: "linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%)", color: "#15803d", boxShadow: "0 4px 10px rgba(21, 128, 61, 0.15)" }}>
          <PackageSearch />
        </S.StatIcon>
        <S.StatNumber>{stats?.totalOrders || 0}</S.StatNumber>
        <S.StatLabel>Total Orders</S.StatLabel>
      </S.StatCard>

      <S.StatCard>
        <S.StatIcon style={{ background: "linear-gradient(135deg, #fef9c3 0%, #fef08a 100%)", color: "#a16207", boxShadow: "0 4px 10px rgba(161, 98, 7, 0.15)" }}>
          <Activity />
        </S.StatIcon>
        <S.StatNumber>{stats?.pendingOrders || 0}</S.StatNumber>
        <S.StatLabel>Pending Orders</S.StatLabel>
      </S.StatCard>

      <S.StatCard>
        <S.StatIcon style={{ background: "linear-gradient(135deg, #fee2e2 0%, #fecaca 100%)", color: "#b91c1c", boxShadow: "0 4px 10px rgba(185, 28, 28, 0.15)" }}>
          <AlertCircle />
        </S.StatIcon>
        <S.StatNumber>{stats?.lowStockCount || 0}</S.StatNumber>
        <S.StatLabel>Low Stock Alerts</S.StatLabel>
      </S.StatCard>
    </S.StatsGrid>
  );
};

export default DashboardStats;
