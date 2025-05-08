import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Tabs from "./components/shared/Tabs";
import Search from "./pages/Search";
import SearchPage from "./pages/Search";
import Profile from "./pages/Profile";

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
          path="/profile"
          element={<PrivateRoute element={<Profile />} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
