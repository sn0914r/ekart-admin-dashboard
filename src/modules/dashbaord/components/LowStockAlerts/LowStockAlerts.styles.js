import styled from "@emotion/styled";

export const Card = styled.div`
  background: var(--surface);
  border: 0.5px solid var(--border);
  border-radius: 10px;
  padding: 16px;
  margin-bottom: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.02);
`;

export const CardTitle = styled.div`
  font-size: 13px;
  font-weight: 500;
  margin-bottom: 14px;
  color: var(--text);
`;

export const ItemList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  padding: 8px;
  margin: -8px;
  border-radius: 8px;
  transition: background 0.15s ease, transform 0.15s ease;

  &:hover {
    transform: translateX(2px);
    background: var(--surface2);
  }
`;

export const ItemContent = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const ItemImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 6px;
  object-fit: cover;
  border: 0.5px solid var(--border);
  background: var(--bg);
`;

export const ItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const ItemName = styled.span`
  color: var(--text);
  font-weight: 500;
`;

export const ItemCategory = styled.span`
  color: var(--muted);
  font-size: 11px;
  text-transform: capitalize;
`;

export const Badge = styled.span`
  font-size: 10px;
  font-weight: 500;
  padding: 3px 8px;
  border-radius: 20px;
  display: inline-flex;
  align-items: center;

  &.low {
    background: var(--badge-amber-bg);
    color: var(--badge-amber-text);
  }
  
  &.critical {
    background: var(--badge-red-bg);
    color: var(--badge-red-text);
  }
`;
