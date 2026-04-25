import styled from "@emotion/styled";

// =====================
// Layout
// =====================
export const TableWrapper = styled.div`
  width: 100%;
  flex: 1;
  overflow-y: auto;
  overflow-x: auto;
  background: var(--surface);
  border: 0.5px solid var(--border);
  border-radius: 10px;
  /* Removed padding so table renders edge-to-edge natively */

  &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: var(--border);
    border-radius: 4px;
  }
`;

// =====================
// Table Elements
// =====================
export const DataTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 12px;
`;

export const Th = styled.th`
  text-align: left;
  font-size: 11px;
  font-weight: 500;
  color: var(--muted);
  padding: 16px 8px; /* padding-y increased for header */
  border-bottom: 0.5px solid var(--border);
  white-space: nowrap;
  position: sticky;
  top: 0;
  background: var(--surface);
  z-index: 10;

  &:first-of-type {
    padding-left: 24px;
  }

  &:last-of-type {
    padding-right: 24px;
  }
`;

export const Td = styled.td`
  padding: 12px 8px;
  border-bottom: 0.5px solid var(--border);
  color: var(--text);
  vertical-align: middle;

  tr:last-child & {
    border-bottom: none;
  }

  &:first-of-type {
    padding-left: 24px;
  }

  &:last-of-type {
    padding-right: 24px;
  }
`;

// =====================
// Cells & Typography
// =====================
export const ProductCell = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const ProductImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 8px; /* per UI design system icon radius */
  object-fit: cover;
  background: var(--surface2);
`;

export const ProductTextContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProductName = styled.div`
  font-weight: 500;
  color: var(--text);
  font-size: 13px; /* Slightly larger for main text */
`;

export const ProductSubtext = styled.div`
  color: var(--muted);
  font-size: 11px;
  margin-top: 2px;
`;

// =====================
// Toggle Switch
// =====================
export const ToggleWrapper = styled.label`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;

  input {
    display: none;
  }
`;

export const ToggleSwitch = styled.div`
  position: relative;
  width: 32px;
  height: 18px;
  background: ${(props) => (props.$isOn ? "var(--accent)" : "var(--surface2)")};
  border: 1px solid
    ${(props) => (props.$isOn ? "var(--accent)" : "var(--border)")};
  border-radius: 20px;
  transition: all 0.2s ease;

  &::after {
    content: "";
    position: absolute;
    top: 1px;
    left: ${(props) => (props.$isOn ? "15px" : "1px")};
    width: 14px;
    height: 14px;
    background: ${(props) => (props.$isOn ? "#fff" : "var(--muted)")};
    border-radius: 50%;
    transition: all 0.2s ease;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  }
`;

export const ToggleText = styled.span`
  font-size: 11px;
  font-weight: 500;
  color: ${(props) => (props.$isOn ? "var(--text)" : "var(--muted)")};
  width: 50px;
  display: inline-block;
`;

// =====================
// Actions
// =====================
export const ActionGroup = styled.div`
  display: flex;
  gap: 8px;
  justify-content: flex-end;
`;

export const ActionButton = styled.button`
  width: 28px;
  height: 28px;
  border-radius: 6px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  background: var(--surface2);
  color: var(--text);

  &.view {
    background: var(--badge-green-bg);
    color: var(--badge-green-text);
  }

  &.edit {
    background: var(--accent-light);
    color: var(--accent);
  }

  &.delete {
    background: var(--badge-red-bg);
    color: var(--badge-red-text);
  }

  &:hover {
    opacity: 0.8;
    transform: translateY(-1px);
  }
`;
