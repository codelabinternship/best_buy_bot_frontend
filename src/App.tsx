import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Tabs from "./components/shared/Tabs";
import SearchPage from "./pages/Search";

import Korzina from "./pages/korzina";
import { User } from "lucide-react";
import Profile from "./pages/Profile";
import CheckoutPage from "./pages/CheckoutPage";
import Commants from "./pages/commants";
import ProductsSlug from "./pages/ProductsSlug";
import LikedPage from "./pages/LikedPage";
import SearchCategory from "./pages/SearchCategory";
import OrderSummary from "./pages/OrderSummary";
import CartPage from "./pages/Cart";


function App() {
  const isAuthenticated = () => true;
  function Layout({ children }: any) {
    return (
      <>
        <div className="max-w-[422px] h-[625px] mx-auto relative">
          {children}
          <Tabs />
        </div>
      </>
    );
  }
  const PrivateRoute = ({ element }: any) => {
    return isAuthenticated() ? (
      <Layout>{element}</Layout>
    ) : (
      <Navigate to="/login" replace />
    );
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PrivateRoute element={<Home />} />} />
        <Route
          path="/search"
          element={<PrivateRoute element={<SearchPage />} />}
        />

        <Route
          path="/korzina"
          element={<PrivateRoute element={<Korzina/>} />}
        />
         <Route
          path="/user"
          element={<PrivateRoute element={<User/>} />}

        <Route path="/cart" element={<PrivateRoute element={<CartPage />} />} />
        <Route
          path="/category/:id"
          element={<PrivateRoute element={<SearchCategory />} />}
        />
        <Route
          path="/profile/"
          element={<PrivateRoute element={<Profile />} />}
        />
        <Route
          path="/comments"
          element={<PrivateRoute element={<Commants />} />}
        />
        <Route
          path="/checkout"
          element={<PrivateRoute element={<CheckoutPage />} />}
        />{" "}
        <Route
          path="/products/:id"
          element={<PrivateRoute element={<ProductsSlug />} />}
        />
        <Route
          path="/liked-products"
          element={<PrivateRoute element={<LikedPage />} />}
        />
        <Route
          path="/my-orders"
          element={<PrivateRoute element={<OrderSummary />} />}

        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
