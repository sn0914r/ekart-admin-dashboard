import * as S from "./RecentOrders.styles";

const RecentOrders = ({ orders }) => {
  return (
    <S.Card>
      <S.CardTitle>Recent Orders</S.CardTitle>
      <S.TableWrapper>
        <S.Table>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {orders?.map((order) => (
              <tr key={order._id}>
                <td>#{order._id.slice(-6).toUpperCase()}</td>
                <td>{order.email}</td>
                <td>{new Date(order.createdAt).toLocaleDateString()}</td>
                <td>₹{order.subTotal}</td>
                <td>
                  <S.Badge className={order.orderStatus.toLowerCase()}>
                    {order.orderStatus}
                  </S.Badge>
                </td>
              </tr>
            ))}
            {(!orders || orders.length === 0) && (
              <tr>
                <td colSpan="5" style={{ textAlign: "center", color: "var(--muted)" }}>
                  No recent orders found.
                </td>
              </tr>
            )}
          </tbody>
        </S.Table>
      </S.TableWrapper>
    </S.Card>
  );
};

export default RecentOrders;
