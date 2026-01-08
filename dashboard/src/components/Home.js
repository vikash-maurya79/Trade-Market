import TopBar from "./TopBar";
import Dashboard from "./Dashboard.js";
import DashboardDataPage from "./DashboardData.js";
import { Route, Routes } from "react-router-dom";
import HoldingsPage from "./Holdings.js";
import PositionsPage from "./Positions.js";
import NotFound from "./NotFound.js";
import OrdersPage from "./Orders.js";
import SignupPage from "./SignupPage.js";
import LoginPage from "./LoginPage.js";
import StockPage from "./StockPage.js";
import UserProfilePage from "./UserProfilePage.js";
import { UserContextProvider } from "./AuthContext.js";
import { StockContextProvider } from "./Context/StockContext.js";


function Home() {
  return (
    <>
      <UserContextProvider>
        <StockContextProvider>
          <TopBar />
          <div className="main-page">
            <Dashboard />
            <Routes>
              <Route path="/" element={<DashboardDataPage />} />
              <Route path="/holdings" element={<HoldingsPage />} />
              <Route path="/positions" element={<PositionsPage />} />
              <Route path="/orders" element={<OrdersPage />} />
              <Route path="/dashboard" element={<DashboardDataPage />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/view-stock/:id" element={<StockPage />} />
              <Route path="/profile" element={<UserProfilePage />} />

              <Route path='*' element={<NotFound />} />
            </Routes>
          </div >
        </StockContextProvider>
      </UserContextProvider>
    </>
  );
}

export default Home;