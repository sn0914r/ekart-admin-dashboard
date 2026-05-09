import * as S from "./LowStockAlerts.styles";

const LowStockAlerts = ({ items }) => {
  return (
    <S.Card>
      <S.CardTitle>Low Stock Alerts</S.CardTitle>
      <S.ItemList>
        {items?.map((item) => (
          <S.Item key={item._id}>
            <S.ItemContent>
              {item.images && item.images.length > 0 ? (
                <S.ItemImage src={item.images[0]} alt={item.name} />
              ) : (
                <S.ItemImage as="div" /> /* Placeholder if no image */
              )}
              <S.ItemDetails>
                <S.ItemName>{item.name}</S.ItemName>
                <S.ItemCategory>{item.category}</S.ItemCategory>
              </S.ItemDetails>
            </S.ItemContent>
            <S.Badge className={item.stock < 5 ? "critical" : "low"}>
              {item.stock} left
            </S.Badge>
          </S.Item>
        ))}
        {(!items || items.length === 0) && (
          <S.ItemName style={{ color: "var(--muted)", fontWeight: 400 }}>
            Stock is looking good.
          </S.ItemName>
        )}
      </S.ItemList>
    </S.Card>
  );
};

export default LowStockAlerts;
