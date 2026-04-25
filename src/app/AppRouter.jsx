import { Routes, Route } from "react-router-dom";
import MainLayout from "../shared/layout/MainLayout";
import ProductsRoutes from "../modules/products/ProductRoutes";
import AuthRoutes from "../modules/auth/AuthRoutes";
import OrderRoutes from "../modules/orders/OrderRoutes";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import ForbiddenPage from "./pages/ForbiddenPage/ForbiddenPage";
import ProtectedRoute from "../shared/components/ProtectedRoute";
import { useAuthStore } from "../store/authStore";

const AppRouter = () => {
  const isHydrated = useAuthStore((state) => state.isHydrated);

  if (!isHydrated) return null;

  return (
    <Routes>
      <Route path="/auth/*" element={<AuthRoutes />} />
      <Route
        path="/*"
        element={
          <ProtectedRoute requiredRole="admin">
            <MainLayout>
              <ProductsRoutes />
              <OrderRoutes />
            </MainLayout>
          </ProtectedRoute>
        }
      />
      <Route path="/forbidden" element={<ForbiddenPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRouter;
