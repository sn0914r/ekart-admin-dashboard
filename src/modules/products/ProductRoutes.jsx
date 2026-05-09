import { Routes, Route } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";

const ProductsRoutes = () => {
  return (
    <Routes>
      <Route path="/products" element={<ProductsPage />} />
    </Routes>
  );
};

export default ProductsRoutes;
