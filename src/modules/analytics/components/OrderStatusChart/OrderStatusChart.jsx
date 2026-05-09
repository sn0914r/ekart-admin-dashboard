import * as S from "../RevenueChart/RevenueChart.styles"; // Reuse card styles
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const COLORS = {
  CONFIRMED: "var(--badge-green-text)",
  PAID: "var(--badge-green-text)",
  CREATED: "var(--badge-amber-text)",
  PENDING: "var(--badge-amber-text)",
  CANCELLED: "var(--badge-red-text)",
  FAILED: "var(--badge-red-text)",
  UNKNOWN: "var(--muted)",
};

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div style={{ background: "var(--surface)", border: "0.5px solid var(--border)", padding: "10px", borderRadius: "8px", boxShadow: "0 4px 12px rgba(0,0,0,0.05)", fontSize: "12px" }}>
        <p style={{ margin: "0 0 4px 0", fontWeight: 600, color: "var(--text)" }}>{payload[0].name}</p>
        <p style={{ margin: 0, color: "var(--muted)" }}>Count: {payload[0].value}</p>
      </div>
    );
  }
  return null;
};

const OrderStatusChart = ({ data }) => {
  return (
    <S.Card>
      <S.CardTitle>Order Status Distribution</S.CardTitle>
      <S.ChartContainer>
        {(!data || data.length === 0) ? (
          <div style={{ height: "100%", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--muted)", fontSize: "12px" }}>
            No status data available.
          </div>
        ) : (
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="45%"
                innerRadius={65}
                outerRadius={85}
                paddingAngle={6}
                cornerRadius={10}
                dataKey="value"
                stroke="none"
              >
                {data.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={COLORS[entry.name] || COLORS.UNKNOWN} 
                    style={{ filter: "drop-shadow(0px 2px 4px rgba(0,0,0,0.05))" }}
                  />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} cursor={false} />
              <Legend 
                verticalAlign="bottom" 
                height={36} 
                iconType="circle" 
                wrapperStyle={{ fontSize: "11px", color: "var(--muted)" }} 
              />
            </PieChart>
          </ResponsiveContainer>
        )}
      </S.ChartContainer>
    </S.Card>
  );
};

export default OrderStatusChart;
