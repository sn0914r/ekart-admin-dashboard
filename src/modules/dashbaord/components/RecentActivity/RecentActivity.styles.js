import styled from "@emotion/styled";

export const Card = styled.div`
  background: var(--surface);
  border: 0.5px solid var(--border);
  border-radius: 10px;
  padding: 16px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.02);
`;

export const CardTitle = styled.div`
  font-size: 13px;
  font-weight: 500;
  margin-bottom: 14px;
  color: var(--text);
`;

export const ActivityList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const ActivityItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  padding: 8px;
  margin: -8px;
  border-radius: 8px;
  transition: background 0.15s ease, transform 0.15s ease;

  &:hover {
    background: var(--surface2);
    transform: translateX(2px);
  }
`;

export const ActivityIcon = styled.div`
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background: var(--accent-light);
  color: var(--accent);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  svg {
    width: 12px;
    height: 12px;
    stroke-width: 2;
  }
`;

export const ActivityContent = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const ActivityDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const ActivityTitle = styled.span`
  color: var(--text);
  font-weight: 500;
  text-transform: capitalize;
`;

export const ActivityTime = styled.span`
  color: var(--muted);
  font-size: 11px;
`;

export const ActivityAmount = styled.span`
  font-weight: 600;
  color: var(--text);
`;
