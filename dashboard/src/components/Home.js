import TopBar from "./TopBar";
import Dashboard from "./Dashboard.js";
import DashboardDataPage from "./DashboardData.js";
import { Route, Routes,Navigate } from "react-router-dom";
import HoldingsPage from "./Holdings.js";
import PositionsPage from "./Positions.js";
import NotFound from "./NotFound.js";
import OrdersPage from "./Orders.js";
import SignupPage from "./SignupPage.js";
import LoginPage from "./LoginPage.js";
import StockPage from "./StockPage.js";
import UserProfilePage from "./UserProfilePage.js";
import { ProtectRoute } from "./Protect/Protect.js";
import { useAuth } from "./AuthContext.js";
function Home() {
  const { isLoggedIn } = useAuth();
  return (
    <>

      <TopBar />
      <div className="main-page">
        <Dashboard />
        <Routes>
          {!isLoggedIn ?
            <>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />
            </> : ''}

          <Route element={<ProtectRoute />}>
            <Route path="/" element={<DashboardDataPage />} />
            <Route path="/holdings" element={<HoldingsPage />} />
            <Route path="/positions" element={<PositionsPage />} />
            <Route path="/orders" element={<OrdersPage />} />
            <Route path="/dashboard" element={<DashboardDataPage />} />
            <Route path="/view-stock/:id" element={<StockPage />} />
            <Route path="/profile" element={<UserProfilePage />} />
            <Route path="/login" element={<Navigate to="/"/>} />
            <Route path="/signup" element={<Navigate to="/"/>} />
          </Route>
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div >

    </>
  );
}

export default Home;