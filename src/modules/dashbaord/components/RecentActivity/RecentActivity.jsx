import * as S from "./RecentActivity.styles";
import { CheckCircle, Clock, XCircle } from "lucide-react";

const getStatusIcon = (status) => {
  switch (status.toLowerCase()) {
    case "confirmed":
    case "paid":
      return <CheckCircle style={{ color: "var(--badge-green-text)" }} />;
    case "created":
    case "pending":
      return <Clock style={{ color: "var(--badge-amber-text)" }} />;
    case "cancelled":
    case "failed":
      return <XCircle style={{ color: "var(--badge-red-text)" }} />;
    default:
      return <CheckCircle />;
  }
};

const getStatusBg = (status) => {
  switch (status.toLowerCase()) {
    case "confirmed":
    case "paid":
      return "var(--badge-green-bg)";
    case "created":
    case "pending":
      return "var(--badge-amber-bg)";
    case "cancelled":
    case "failed":
      return "var(--badge-red-bg)";
    default:
      return "var(--accent-light)";
  }
};

const RecentActivity = ({ activities }) => {
  return (
    <S.Card>
      <S.CardTitle>Recent Activity</S.CardTitle>
      <S.ActivityList>
        {activities?.map((activity) => (
          <S.ActivityItem key={activity._id}>
            <S.ActivityContent>
              <S.ActivityIcon style={{ background: getStatusBg(activity.orderStatus) }}>
                {getStatusIcon(activity.orderStatus)}
              </S.ActivityIcon>
              <S.ActivityDetails>
                <S.ActivityTitle>
                  Order {activity.orderStatus.toLowerCase()}
                </S.ActivityTitle>
                <S.ActivityTime>
                  {new Date(activity.createdAt).toLocaleString()}
                </S.ActivityTime>
              </S.ActivityDetails>
            </S.ActivityContent>
            <S.ActivityAmount>₹{activity.subTotal}</S.ActivityAmount>
          </S.ActivityItem>
        ))}
        {(!activities || activities.length === 0) && (
          <S.ActivityTitle style={{ color: "var(--muted)", fontWeight: 400 }}>
            No recent activities.
          </S.ActivityTitle>
        )}
      </S.ActivityList>
    </S.Card>
  );
};

export default RecentActivity;
