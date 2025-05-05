import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Tabs from "./components/shared/Tabs";

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
