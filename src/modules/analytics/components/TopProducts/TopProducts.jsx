import * as S from "./TopProducts.styles";

const TopProducts = ({ products }) => {
  return (
    <S.Card>
      <S.CardTitle>Top Products</S.CardTitle>
      <S.TableWrapper>
        <S.Table>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Product Name</th>
              <th>Total Sold</th>
              <th>Revenue</th>
            </tr>
          </thead>
          <tbody>
            {products?.map((product, index) => (
              <tr key={product._id}>
                <td><S.ProductName>#{index + 1}</S.ProductName></td>
                <td>
                  <S.ProductContent>
                    {product.image ? (
                      <S.ProductImage src={product.image} alt={product.productName} />
                    ) : (
                      <S.ProductImage as="div" />
                    )}
                    <S.ProductName>{product.productName}</S.ProductName>
                  </S.ProductContent>
                </td>
                <td>{product.totalSold}</td>
                <td style={{ color: "var(--accent)", fontWeight: 600 }}>
                  ₹{product.revenue?.toLocaleString() || 0}
                </td>
              </tr>
            ))}
            {(!products || products.length === 0) && (
              <tr>
                <td colSpan="4" style={{ textAlign: "center", color: "var(--muted)", padding: "20px 0" }}>
                  No top products found.
                </td>
              </tr>
            )}
          </tbody>
        </S.Table>
      </S.TableWrapper>
    </S.Card>
  );
};

export default TopProducts;
