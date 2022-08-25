import { BrowserRouter, Routes, Route } from "react-router-dom";
import Users from "./Users";
import Products from "./Products";
import ProductDetail from "./ProductDetail";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="users/:id" element={<Users />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:id" element={<ProductDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
