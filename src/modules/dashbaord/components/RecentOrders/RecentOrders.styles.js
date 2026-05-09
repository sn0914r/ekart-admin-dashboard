import styled from "@emotion/styled";

export const Card = styled.div`
  background: var(--surface);
  border: 0.5px solid var(--border);
  border-radius: 10px;
  padding: 16px;
  height: 100%;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.02);
`;

export const CardTitle = styled.div`
  font-size: 13px;
  font-weight: 500;
  margin-bottom: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--text);
`;

export const TableWrapper = styled.div`
  width: 100%;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  font-size: 12px;

  th {
    text-align: left;
    font-size: 11px;
    font-weight: 400;
    color: var(--muted);
    padding-bottom: 8px;
    border-bottom: 0.5px solid var(--border);
  }

  td {
    padding: 9px 0;
    border-bottom: 0.5px solid var(--border);
    color: var(--text);
    vertical-align: middle;
  }

  tr {
    transition: background-color 0.15s ease;
  }

  tr:hover td {
    background-color: var(--surface2);
  }

  tr:last-child td {
    border-bottom: none;
  }
`;

export const Badge = styled.span`
  font-size: 10px;
  font-weight: 500;
  padding: 3px 8px;
  border-radius: 20px;
  display: inline-block;
  letter-spacing: 0.02em;
  text-transform: capitalize;

  &.delivered, &.active, &.ok, &.paid, &.confirmed {
    background: var(--badge-green-bg);
    color: var(--badge-green-text);
  }

  &.pending, &.processing, &.low, &.created {
    background: var(--badge-amber-bg);
    color: var(--badge-amber-text);
  }

  &.cancelled, &.critical, &.inactive, &.failed {
    background: var(--badge-red-bg);
    color: var(--badge-red-text);
  }
`;
