import * as S from "./RevenueChart.styles";
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div style={{ background: "var(--surface)", border: "0.5px solid var(--border)", padding: "10px", borderRadius: "8px", boxShadow: "0 4px 12px rgba(0,0,0,0.05)", fontSize: "12px" }}>
        <p style={{ margin: "0 0 4px 0", fontWeight: 600, color: "var(--text)" }}>{label}</p>
        <p style={{ margin: 0, color: "var(--accent)" }}>Revenue: ₹{payload[0].value}</p>
        {payload[1] && <p style={{ margin: 0, color: "var(--muted)" }}>Orders: {payload[1].value}</p>}
      </div>
    );
  }
  return null;
};

const RevenueChart = ({ data }) => {
  return (
    <S.Card>
      <S.CardTitle>Monthly Revenue</S.CardTitle>
      <S.ChartContainer>
        {(!data || data.length === 0) ? (
          <div style={{ height: "100%", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--muted)", fontSize: "12px" }}>
            No revenue data available.
          </div>
        ) : (
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data} margin={{ top: 10, right: 0, left: -20, bottom: 5 }}>
              <defs>
                <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="var(--accent)" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="var(--accent)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--border)" opacity={0.5} />
              <XAxis dataKey="name" tick={{ fontSize: 11, fill: "var(--muted)" }} tickLine={false} axisLine={false} dy={10} />
              <YAxis tick={{ fontSize: 11, fill: "var(--muted)" }} tickLine={false} axisLine={false} tickFormatter={(val) => `₹${val}`} dx={-10} />
              <Tooltip content={<CustomTooltip />} cursor={{ stroke: "var(--border)", strokeWidth: 1, strokeDasharray: "4 4" }} />
              <Area 
                type="monotone" 
                dataKey="revenue" 
                stroke="var(--accent)" 
                strokeWidth={3}
                fillOpacity={1} 
                fill="url(#colorRevenue)" 
                activeDot={{ r: 6, fill: "var(--surface)", stroke: "var(--accent)", strokeWidth: 2 }}
              />
            </AreaChart>
          </ResponsiveContainer>
        )}
      </S.ChartContainer>
    </S.Card>
  );
};

export default RevenueChart;
