// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import CreditCards from "./pages/CreditCards.jsx";
import DebitCards from "./pages/DebitCards.jsx";
import PaymentPlatforms from "./pages/PaymentPlatforms.jsx";
import PhoneBills from "./pages/PhoneBills.jsx";
import ElectricityBills from "./pages/ElectricityBills.jsx";
import WaterBills from "./pages/WaterBills.jsx";
import StockMarket from "./pages/StockMarket.jsx";
import "./style/branding.css";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="transition-container">
        <Routes>
          <Route path="/credit-cards" element={<CreditCards />} />
          <Route path="/debit-cards" element={<DebitCards />} />
          <Route path="/payment-platforms" element={<PaymentPlatforms />} />
          <Route path="/phone-bills" element={<PhoneBills />} />
          <Route path="/electricity-bills" element={<ElectricityBills />} />
          <Route path="/water-bills" element={<WaterBills />} />
          <Route path="/stock-market" element={<StockMarket />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
