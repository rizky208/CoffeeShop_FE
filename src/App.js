import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductPage from "./pages/productPage";
import ProductDetail from "./pages/productDetail";
import Login from "./pages/Login";
import Payment from "./pages/payment";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ProductPage />} path="/" />
        <Route element={<ProductPage />} path="products" />
        <Route element={<ProductDetail />} path="products/:id" />
        <Route element={<Login />} path="login" />
        <Route element={<Payment />} path="payment/:id" />
        {/* <Route element={<ProductPage />} path="products">
          <Route element={<ProductDetail />} path=":productId" />
          <Route index element={<ProductDetail />} />
        </Route> */}
      </Routes>
    </BrowserRouter>
  );
};
export default App;
