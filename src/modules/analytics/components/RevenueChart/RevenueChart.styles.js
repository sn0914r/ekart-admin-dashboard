import styled from "@emotion/styled";

export const Card = styled.div`
  background: var(--surface);
  border: 0.5px solid var(--border);
  border-radius: 10px;
  padding: 16px;
  margin-bottom: 16px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.02);
  height: 350px;
  display: flex;
  flex-direction: column;
`;

export const CardTitle = styled.div`
  font-size: 13px;
  font-weight: 500;
  margin-bottom: 20px;
  color: var(--text);
`;

export const ChartContainer = styled.div`
  flex: 1;
  width: 100%;
  min-height: 0;
`;
